param(
  [string]$ChromeExtensionId = ""
)

$ErrorActionPreference = "Stop"
$hostName = "dev.pinoyunknown.cybersecurity_theme"
$extensionId = "cybersecurity-theme@pinoyunknown.dev"
$python = (Get-Command python -ErrorAction SilentlyContinue).Source
if (-not $python) {
  $pythonLauncher = Get-Command py -ErrorAction SilentlyContinue
  if ($pythonLauncher) {
    $python = (& $pythonLauncher.Source -3 -c "import sys; print(sys.executable)" | Select-Object -First 1).Trim()
  }
}
if (-not $python -or -not (Test-Path $python)) {
  throw "Python 3 was not found. Install Python 3, then run this installer again."
}

$installDirectory = Join-Path $env:LOCALAPPDATA "CyberSecurityTheme\NativeHost"
New-Item -ItemType Directory -Path $installDirectory -Force | Out-Null
$scriptPath = Join-Path $installDirectory "native_host.py"
Copy-Item (Join-Path $PSScriptRoot "native_host.py") $scriptPath -Force

function Write-HostManifest($manifestPath, $allowedOrigins, $allowedExtensions) {
  New-Item -ItemType Directory -Path (Split-Path $manifestPath) -Force | Out-Null
  $manifest = @{
    name = $hostName
    description = "Local system metrics for CyberSecurity Theme"
    path = $python
    args = @($scriptPath)
    type = "stdio"
  }
  if ($allowedOrigins) { $manifest.allowed_origins = @($allowedOrigins) }
  if ($allowedExtensions) { $manifest.allowed_extensions = @($allowedExtensions) }
  $manifest | ConvertTo-Json -Depth 4 | Set-Content -Path $manifestPath -Encoding utf8
}

$firefoxManifest = Join-Path $installDirectory "firefox-host.json"
Write-HostManifest $firefoxManifest @() @($extensionId)
$firefoxRegistry = "HKCU:\Software\Mozilla\NativeMessagingHosts\$hostName"
New-Item -Path $firefoxRegistry -Force | Out-Null
Set-Item -Path $firefoxRegistry -Value $firefoxManifest

if ($ChromeExtensionId) {
  if ($ChromeExtensionId -notmatch '^[a-p]{32}$') {
    throw "Chrome extension ID must be 32 lowercase letters from a through p."
  }
  $chromeManifest = Join-Path $installDirectory "chrome-host.json"
  $origin = "chrome-extension://$ChromeExtensionId/"
  Write-HostManifest $chromeManifest @($origin) @()
  foreach ($browserKey in @("Google\Chrome", "Microsoft\Edge")) {
    $registryPath = "HKCU:\Software\$browserKey\NativeMessagingHosts\$hostName"
    New-Item -Path $registryPath -Force | Out-Null
    Set-Item -Path $registryPath -Value $chromeManifest
  }
} else {
  Write-Warning "Firefox is registered. For Chrome/Edge, rerun with -ChromeExtensionId from the browser's extensions page."
}

Write-Output "CyberSecurity Theme local metrics helper installed for Firefox."
if ($ChromeExtensionId) { Write-Output "Chrome and Edge native messaging hosts are registered." }
Write-Output "Restart the browser to connect to the helper."
