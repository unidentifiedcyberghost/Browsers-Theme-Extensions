# CyberSecurity Theme v1.0.1 — Release and Firefox Publishing Guide

## What's new

- The extension and new-tab title are **CyberSecurity Theme v1.0.1**; its source files are kept in the `v1.0.1/` folder.
- Original cyber-city artwork is bundled at `assets/cyber-city.svg` and loads offline.
- The new tab layers theme-tinted lighting and subtle ambient/entrance animation over the artwork.
- The shared Linux terminal/Conky HUD animates with scanlines, a blinking cursor, and theme-colored accents on every theme choice.
- The layout adapts to smaller windows; canvas effects pause in hidden tabs and when reduced motion is requested.
- Every selected theme colors the shared Conky-inspired live clock/date HUD and saved-bookmark strip. Up to eight recently saved HTTP(S) bookmarks are shown below the clock.
- A local-only network panel reports online/offline and connection type when the browser exposes it. Public IP, ISP, and VPN data are not read or sent to a lookup service.
- The Firefox and Chrome manifests request bookmark access so the new-tab page can show the user's saved links.
- A theme-colored terminal mini-HUD and subtle animated city-image overlay persist on ordinary web pages without intercepting page clicks.
- An optional native messaging helper provides the actual device hostname, CPU, RAM, and home-disk statistics locally on Windows, Linux, and macOS.
- The Firefox AMO upload archive is `packages/CyberSecurityTheme-v1.0.1-firefox.zip`.

## Test in Firefox

1. Extract `packages/CyberSecurityTheme-v1.0.1-firefox.zip` to a folder.
2. Open `about:debugging` → **This Firefox** → **Load Temporary Add-on**.
3. Select `manifest.json` from the extracted folder.
4. Open a new tab and click the toolbar button to select a theme.

Temporary add-ons are removed when Firefox restarts. The ZIP is the AMO upload package; an unsigned package is not a permanent installation for regular Firefox.

## Install the optional system metrics helper

Python 3 is required for the helper. The helper uses native OS information APIs and local system files to read hostname, CPU, memory, and free/total space on the user's home disk. It makes no network requests.

### Windows

Open PowerShell in `v1.0.1/native-host/` and run:

```powershell
.\install_windows.ps1
```

This registers the helper for Firefox. For Chrome/Edge, copy the extension ID from the browser's Extensions page and run:

```powershell
.\install_windows.ps1 -ChromeExtensionId YOUR_32_CHARACTER_EXTENSION_ID
```

### Linux or macOS

In a terminal in `v1.0.1/native-host/`, run:

```sh
chmod +x install_unix.sh
./install_unix.sh
```

To register Chrome/Chromium too, pass its extension ID as the first argument:

```sh
./install_unix.sh YOUR_32_CHARACTER_EXTENSION_ID
```

Restart the browser after installation. If the helper is not installed or cannot start, system fields remain clearly marked unavailable; browser online/offline status continues working independently.

Native helper metrics stay on the device. The extension does not read public IP, ISP, or VPN details.

## Upload an update to AMO

1. Sign in to the Mozilla Add-ons Developer Hub with the account that owns the existing add-on.
2. Open **My Add-ons**, select the existing Theme Forge add-on, then choose **Upload a New Version**.
3. Upload `packages/CyberSecurityTheme-v1.0.1-firefox.zip`.
4. Keep the same add-on identity (`themeforge@pinoyunknown.dev`) and submit the version for review.
5. Check the Developer Hub and email for validation/review results. The public profile shows an add-on only after it is approved and distributed publicly.

If the profile remains empty, verify the add-on's status and that its distribution is **On this site** (public), not **Self Distribution**. An upload or draft alone does not publish a public listing. The profile is currently not showing Theme Forge to unauthenticated visitors.

## Firefox and Chrome manifests

`manifest.json` is the Chrome Manifest V3 source manifest. `manifest_firefox.json` is the Firefox Manifest V2 source manifest. The AMO archive is built with the Firefox manifest renamed to `manifest.json`; do not replace either source manifest in `v1.0.1/`.
