#!/bin/sh
set -eu

HOST_NAME="dev.pinoyunknown.cybersecurity_theme"
FIREFOX_ID="cybersecurity-theme@pinoyunknown.dev"
CHROME_ID="${1:-}"
PYTHON="$(command -v python3 || true)"

if [ -z "$PYTHON" ]; then
  echo "Python 3 is required to install the local metrics helper." >&2
  exit 1
fi

case "$(uname -s)" in
  Darwin)
    APP_DIR="$HOME/Library/Application Support/CyberSecurityTheme/NativeHost"
    FIREFOX_DIR="$HOME/Library/Application Support/Mozilla/NativeMessagingHosts"
    CHROME_DIR="$HOME/Library/Application Support/Google/Chrome/NativeMessagingHosts"
    CHROMIUM_DIR="$HOME/Library/Application Support/Chromium/NativeMessagingHosts"
    ;;
  Linux)
    APP_DIR="$HOME/.local/share/cybersecurity-theme/native-host"
    FIREFOX_DIR="$HOME/.mozilla/native-messaging-hosts"
    CHROME_DIR="$HOME/.config/google-chrome/NativeMessagingHosts"
    CHROMIUM_DIR="$HOME/.config/chromium/NativeMessagingHosts"
    ;;
  *)
    echo "Unsupported operating system: $(uname -s)" >&2
    exit 1
    ;;
esac

mkdir -p "$APP_DIR" "$FIREFOX_DIR"
cp "$(dirname "$0")/native_host.py" "$APP_DIR/native_host.py"
chmod 700 "$APP_DIR/native_host.py"

write_manifest() {
  manifest_path="$1"
  manifest_type="$2"
  browser_id="$3"
  mkdir -p "$(dirname "$manifest_path")"
  MANIFEST_PATH="$manifest_path" MANIFEST_TYPE="$manifest_type" BROWSER_ID="$browser_id" \
    HOST_NAME="$HOST_NAME" PYTHON_PATH="$PYTHON" SCRIPT_PATH="$APP_DIR/native_host.py" \
    "$PYTHON" -c '
import json, os
m = {"name": os.environ["HOST_NAME"], "description": "Local system metrics for CyberSecurity Theme", "path": os.environ["PYTHON_PATH"], "args": [os.environ["SCRIPT_PATH"]], "type": "stdio"}
if os.environ["MANIFEST_TYPE"] == "firefox":
    m["allowed_extensions"] = ["cybersecurity-theme@pinoyunknown.dev"]
else:
    m["allowed_origins"] = ["chrome-extension://" + os.environ["BROWSER_ID"] + "/"]
with open(os.environ["MANIFEST_PATH"], "w", encoding="utf-8") as f:
    json.dump(m, f, indent=2)
'
}

write_manifest "$FIREFOX_DIR/$HOST_NAME.json" firefox ""
if [ -n "$CHROME_ID" ]; then
  case "$CHROME_ID" in
    *[!a-p]*)
      echo "Chrome extension ID must contain only 32 lowercase letters from a through p." >&2
      exit 1
      ;;
  esac
  if [ "${#CHROME_ID}" -ne 32 ]; then
    echo "Chrome extension ID must contain exactly 32 characters." >&2
    exit 1
  fi
  for browser_dir in "$CHROME_DIR" "$CHROMIUM_DIR"; do
    write_manifest "$browser_dir/$HOST_NAME.json" chrome "$CHROME_ID"
  done
else
  echo "Firefox is registered. Pass the Chrome extension ID to also register Chrome/Chromium."
fi

echo "CyberSecurity Theme local metrics helper installed. Restart your browser."
