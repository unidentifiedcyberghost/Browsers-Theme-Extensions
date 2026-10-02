#!/usr/bin/env python3
"""Local-only native messaging host for CyberSecurity Theme."""

import ctypes
import ipaddress
import json
import os
import platform
import re
import socket
import shutil
import struct
import subprocess
import sys
import time
from pathlib import Path

MAX_MESSAGE_SIZE = 1024 * 1024


def read_memory():
    system = platform.system()
    if system == "Windows":
        class MemoryStatus(ctypes.Structure):
            _fields_ = [
                ("dwLength", ctypes.c_ulong),
                ("dwMemoryLoad", ctypes.c_ulong),
                ("ullTotalPhys", ctypes.c_ulonglong),
                ("ullAvailPhys", ctypes.c_ulonglong),
                ("ullTotalPageFile", ctypes.c_ulonglong),
                ("ullAvailPageFile", ctypes.c_ulonglong),
                ("ullTotalVirtual", ctypes.c_ulonglong),
                ("ullAvailVirtual", ctypes.c_ulonglong),
                ("ullAvailExtendedVirtual", ctypes.c_ulonglong),
            ]

        status = MemoryStatus()
        status.dwLength = ctypes.sizeof(status)
        if not ctypes.windll.kernel32.GlobalMemoryStatusEx(ctypes.byref(status)):
            raise OSError("GlobalMemoryStatusEx failed")
        return status.ullTotalPhys, status.ullAvailPhys

    if system == "Linux":
        values = {}
        with open("/proc/meminfo", encoding="ascii") as memory_file:
            for line in memory_file:
                key, value = line.split(":", 1)
                if key in ("MemTotal", "MemAvailable"):
                    values[key] = int(value.strip().split()[0]) * 1024
        return values["MemTotal"], values["MemAvailable"]

    if system == "Darwin":
        total = int(subprocess.check_output(
            ["/usr/sbin/sysctl", "-n", "hw.memsize"], text=True, timeout=3
        ).strip())
        output = subprocess.check_output(["/usr/bin/vm_stat"], text=True, timeout=3)
        page_size = int(re.search(r"page size of (\d+) bytes", output).group(1))
        pages = {
            key: int(value)
            for key, value in re.findall(r"Pages ([a-z]+):\s+([\d.]+)", output)
        }
        available = sum(pages.get(key, 0) for key in ("free", "inactive", "speculative"))
        return total, min(available * page_size, total)

    raise OSError("Unsupported operating system")


def read_cpu_percent():
    system = platform.system()
    if system == "Linux":
        def sample():
            with open("/proc/stat", encoding="ascii") as stat_file:
                values = list(map(int, stat_file.readline().split()[1:]))
            idle = values[3] + (values[4] if len(values) > 4 else 0)
            return sum(values), idle

        total_before, idle_before = sample()
        time.sleep(0.12)
        total_after, idle_after = sample()
        total_delta = total_after - total_before
        if total_delta <= 0:
            return None
        return round(100 * (1 - (idle_after - idle_before) / total_delta))

    if system == "Windows":
        class FileTime(ctypes.Structure):
            _fields_ = [("low", ctypes.c_ulong), ("high", ctypes.c_ulong)]

        def sample():
            idle, kernel, user = FileTime(), FileTime(), FileTime()
            if not ctypes.windll.kernel32.GetSystemTimes(
                ctypes.byref(idle), ctypes.byref(kernel), ctypes.byref(user)
            ):
                raise OSError("GetSystemTimes failed")

            def value(file_time):
                return (file_time.high << 32) | file_time.low

            return value(idle), value(kernel) + value(user)

        idle_before, total_before = sample()
        time.sleep(0.12)
        idle_after, total_after = sample()
        total_delta = total_after - total_before
        if total_delta <= 0:
            return None
        return round(100 * (1 - (idle_after - idle_before) / total_delta))

    if system == "Darwin":
        output = subprocess.check_output(
            ["/usr/bin/top", "-l", "1", "-n", "0"], text=True, timeout=5
        )
        match = re.search(r"([\d.]+)% idle", output)
        if match:
            return round(100 - float(match.group(1)))

    return None


def format_bytes(value):
    amount = float(value)
    for unit in ("B", "KB", "MB", "GB", "TB"):
        if amount < 1024 or unit == "TB":
            return f"{amount:.0f} {unit}" if unit == "B" else f"{amount:.1f} {unit}"
        amount /= 1024
    return f"{amount:.1f} TB"


def read_local_ip():
    targets = (
        (socket.AF_INET, ("192.0.2.1", 9)),
        (socket.AF_INET6, ("2001:db8::1", 9, 0, 0)),
    )
    for family, target in targets:
        try:
            with socket.socket(family, socket.SOCK_DGRAM) as connection:
                connection.connect(target)
                address = ipaddress.ip_address(connection.getsockname()[0])
            if address.is_private and not address.is_loopback and not address.is_link_local:
                return str(address)
        except (OSError, ValueError):
            continue
    return "NOT AVAILABLE"


def get_metrics():
    total_memory, available_memory = read_memory()
    disk = shutil.disk_usage(Path.home())
    try:
        cpu = read_cpu_percent()
        cpu_text = f"{cpu}%" if cpu is not None else "NOT AVAILABLE"
    except (OSError, subprocess.SubprocessError):
        cpu_text = "NOT AVAILABLE"

    return {
        "hostname": platform.node() or os.environ.get("COMPUTERNAME", "Unknown"),
        "os": platform.system(),
        "memory": f"{format_bytes(total_memory - available_memory)} / {format_bytes(total_memory)}",
        "storage": f"{format_bytes(disk.free)} free / {format_bytes(disk.total)}",
        "cpu": cpu_text,
        "local_ip": read_local_ip(),
    }


def read_exact(stream, size):
    chunks = bytearray()
    while len(chunks) < size:
        chunk = stream.read(size - len(chunks))
        if not chunk:
            return None
        chunks.extend(chunk)
    return bytes(chunks)


def main():
    source = sys.stdin.buffer
    destination = sys.stdout.buffer
    while True:
        header = read_exact(source, 4)
        if header is None:
            return
        message_size = struct.unpack("<I", header)[0]
        if message_size > MAX_MESSAGE_SIZE:
            raise ValueError("Native message exceeds size limit")
        raw_message = read_exact(source, message_size)
        if raw_message is None:
            raise EOFError("Incomplete native message")
        message = json.loads(raw_message.decode("utf-8"))
        if message.get("type") != "GET_SYSTEM_METRICS":
            response = {"error": "Unsupported request"}
        else:
            response = get_metrics()
        encoded = json.dumps(response, separators=(",", ":")).encode("utf-8")
        destination.write(struct.pack("<I", len(encoded)))
        destination.write(encoded)
        destination.flush()


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"CyberSecurity Theme native host: {error}", file=sys.stderr)
        raise
