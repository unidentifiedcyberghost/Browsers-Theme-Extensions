# 🔥 CyberSecurity Theme v1.0.1

> **Choose your aesthetic. Forge your browser.**
> Cross-browser theme extension for Chrome, Firefox, Edge, Brave, and all Chromium browsers.

## Current release: v1.0.1

Adds an original bundled cyber-city wallpaper, an animated Linux terminal/Conky-style HUD, saved-bookmark shortcuts, privacy-safe local network status, real-time currency ticker, rotating planet globe HUD, search-result theming, reduced-motion support, and 9 premium themes including the new CyberSecurity Dark theme. The HUD animation and colors stay consistent across all nine themes.

The network panel is privacy-safe: it shows online/offline and connection type only when the browser reports it. It does not look up a public IP, ISP, or VPN.

The optional cross-platform native helper in `v1.0.1/native-host/` can locally report the device hostname, CPU, RAM, and home-disk usage. It must be separately installed (Python 3 required); without it, those values are clearly unavailable. A subtle animated terminal overlay follows the selected theme on regular pages and shows the current host/search, while website content and clicks remain available.

The public Firefox Add-ons profile previously did not show the add-on. Uploading a package alone does not publish it: check its AMO review status and confirm public/on-site distribution.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **9 Premium Themes** | Cyberpunk Neon, Blackhat Hacker, Sci-Fi HUD, Glass HUD, Cyberpunk HUD, PinoyUnknown, Dystopian, Pink Candy, CyberSecurity Dark |
| 🖥️ **New Tab Override** | Fully themed new tab with animated backgrounds, digital clock, live currency ticker, rotating planet globe, and search bar |
| 💉 **Website CSS Injection** | Injects theme CSS variables (scrollbar, selection color) into every website; applies themed styling to Google/Bing/DuckDuckGo/YouTube search results |
| 🦊 **Firefox Browser Theme** | Dynamically updates Firefox browser UI colors via the theme API |
| 🔄 **Persistent Settings** | Remembers your chosen theme across browser sessions |
| 🔍 **Multi-Engine Search** | Google, Bing, DuckDuckGo, YouTube — switch engines from new tab |
| 🖥️ **Conky-Inspired Linux HUD** | Animated terminal panel, live clock/date, selected-theme accents, saved bookmarks, local-only connection status, machine metrics panel, and rotating planet globe |
| 💱 **Real-Time Currency Ticker** | Live exchange rates (USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR) refreshed hourly; scrolling display below navbar |
| 🌍 **Rotating Planet Globe** | Animated HUD-style planet with theme-colored glowing borders; centered in the new-tab main content area |
| 📊 **Machine Metrics Panel** | Displays hostname, CPU%, RAM, OS, storage, network status (via optional native helper); left-aligned, below top navbar |
| 🔐 **Optional Native Helper** | Cross-platform Python daemon for Windows/Linux/macOS; reports real device hostname, CPU, RAM, disk usage without external API calls (privacy-first) |
| 📱 **Cross-Browser** | Chrome MV3, Firefox MV2, Edge, Brave |
| ♿ **Accessibility** | Reduced-motion support; proper ARIA labels; keyboard-navigable popup and search controls |

---

## 🎨 Themes (9 Total)

| # | Theme | Style | Vibe | Icon |
|---|---|---|---|---|
| 1 | ⚡ **Cyberpunk Neon** | Cyan, Magenta, Purple | Neon streets, rain, holographic | ⚡ |
| 2 | ⌨ **Blackhat Hacker** | Matrix Green, Black | Terminal, hacker, code | ⌨ |
| 3 | ◈ **Sci-Fi HUD** | Electric Blue, White | JARVIS, starship interface | ◈ |
| 4 | ◇ **Glass HUD** | Black + White Glass | Transparent glassmorphism HUD | ◇ |
| 5 | ⬡ **Cyberpunk HUD** | Orange, Yellow, Red | Night City, dystopian neon | ⬡ |
| 6 | ◉ **PinoyUnknown** | Hot Pink, Neon Green, Purple | Filipino brand identity | ◉ |
| 7 | ☢ **Dystopian** | Dark Red, Gray | Post-apocalyptic, grim survival | ☢ |
| 8 | ♡ **Pink Candy** | Pink, White | Soft, kawaii, sweet aesthetic | ♡ |
| 9 | 🔐 **CyberSecurity Dark** | Neon Green, Navy | Fortress, secure hacker aesthetic | 🔐 |

---

## 🚀 Installation

### Chrome / Edge / Brave
1. Download or clone this repo
2. Navigate into the `v1.0.1/` folder
3. Open browser → `chrome://extensions/` (or `edge://extensions/`)
4. Enable **Developer Mode** (top right toggle)
5. Click **"Load unpacked"** → select the `v1.0.1/` folder
6. Click the **CyberSecurity Theme** icon in your toolbar

### Firefox
1. Download and extract `packages/CyberSecurityTheme-v1.0.1-firefox.zip`
2. Open Firefox → `about:debugging`
3. Click **"This Firefox"** → **"Load Temporary Add-on"**
4. Select the `manifest.json` file inside the extracted folder
5. Temporary installs are removed when Firefox restarts. For a permanent install, submit the ZIP to AMO and wait for public approval/signing.

> 🦊 **Firefox Add-ons Profile:** [PinoyUnknown on AMO](https://addons.mozilla.org/en-US/firefox/user/20195701/)

### Optional: Install Native Metrics Helper (Windows/Linux/macOS)

The extension can display real hostname, CPU%, RAM, and storage via a local Python helper. Installation is entirely optional; without it, these fields show "HELPER NOT INSTALLED".

**Requirements:** Python 3.8+

#### Windows
```powershell
cd v1.0.1/native-host
.\install_windows.ps1
# Opens Registry to add Firefox/Chrome native-messaging configuration
```

#### Linux / macOS
```bash
cd v1.0.1/native-host
bash install_unix.sh
# Writes manifests to ~/.mozilla and ~/.config for native-messaging
```

---

## 📁 Project Structure

```
Browser-Theme-Extensions/
├── v1.0.1/                      ← CyberSecurity Theme v1.0.1 source
│   ├── assets/
│   │   └── cyber-city.svg        ← Original bundled new-tab artwork
│   ├── native-host/              ← Optional native metrics helper (Python)
│   │   ├── native_host.py        ← Cross-platform metrics daemon
│   │   ├── install_windows.ps1   ← Windows registry installer
│   │   └── install_unix.sh       ← Linux/macOS manifest installer
│   ├── manifest.json             ← Chrome MV3 manifest
│   ├── manifest_firefox.json     ← Firefox MV2 manifest
│   └── ...
└── v1.0.0/                      ← Previous release
```

---

## 👨‍💻 Developer Links

| Platform | Link |
|---|---|
| 🎮 Google Play Store | [PinoyUnknown Apps](https://play.google.com/store/apps/dev?id=7374638355121114347) |
| 🦊 Firefox Add-ons | [PinoyUnknown on AMO](https://addons.mozilla.org/en-US/firefox/user/20195701/) |
| 🐙 GitHub (CyberHost) | [unidentifiedcyberghost](https://github.com/unidentifiedcyberghost) |
| 🐙 GitHub (Brand) | [pinoyUnknown](https://github.com/pinoyUnknown) |
| 📸 Instagram | [@pinoyunknown](https://instagram.com/pinoyunknown) |
| ▶ YouTube | [PinoyUnknown Channel](https://www.youtube.com/watch?v=zrF1EoEh1-w) |

---

## 📋 Changelog & Update Logs

### Version History

---

#### `v1.0.1` — CyberSecurity Theme (Complete Edition)
**Release Date:** 2024

##### ✨ New Features
- Added **9th theme**: 🔐 CyberSecurity Dark (Neon Green + Navy)
- **Real-Time Currency Ticker**: Live exchange rates (USD/EUR, USD/GBP, USD/JPY, USD/AUD, USD/CAD, USD/CHF, USD/CNY, USD/INR); refreshes hourly; scrolling display below navbar with timestamp
- **Rotating Planet Globe HUD**: Animated 3D planet emoji with theme-colored glowing borders; centered in new-tab main content area; smooth CSS rotation animation
- **Search Result Theming**: Applied theme CSS injection to Google, Bing, DuckDuckGo, and YouTube search results; maintains theme colors, borders, and accent styling across search result cards
- **Machine Metrics Panel**: Left-aligned below navbar; displays:
  - Machine hostname
  - Real-time CPU usage
  - RAM usage
  - Storage / home disk
  - OS type
  - Network status
  - Connection type
  - All via optional native helper (Python daemon)
- **Optional Cross-Platform Native Helper**:
  - Windows: PowerShell installer writing to registry (HKCU)
  - Linux/macOS: Bash installer writing to ~/.mozilla and ~/.config
  - Supports native-messaging protocol for secure IPC with extension
  - No external API calls; all metrics computed locally
- **Extended Terminal HUD**: Terminal header now shows real machine hostname (editable in popup with storage persistence)
- **Theme Color Updates**: Refreshed all 8 existing themes + new 9th theme to use new visual features

##### 🎨 Updated Features
- Renamed extension to **"CyberSecurity Theme v1.0.1"** across all manifests
- Updated Extension ID from `themeforge@pinoyunknown.dev` → `cybersecurity-theme@pinoyunknown.dev`
- Enhanced new-tab layout: topbar → currency ticker → network panel → main content (clock, planet globe, bookmarks, search)
- Improved content.js to inject search-result styling with !important overrides for persistency
- Added `host_permissions` in manifests for currency ticker API (`https://api.exchangerate-api.com/*`)

---

#### `v1.0.0` — Initial Release
**Released:** September 28, 2024
**Author:** PinoyUnknown | unidentifiedcyberghost

##### ✅ Added
- 8 fully designed browser themes
- Chrome MV3 manifest
- Firefox MV2 manifest
- Custom animated new tab page with digital HUD clock, canvas animations, search bar, developer links
- Popup theme selector
- Content script for website CSS injection
- Firefox browser toolbar theming via `browser.theme.update()` API
- Persistent theme storage across sessions
- Cross-browser support

---

> *Future updates will be logged above in descending version order.*
> *Each version has its own folder (e.g., `v1.0.0/`, `v1.0.1/`, `v1.1.0/`).*

---

## 📄 License

MIT License — Free to use, modify, and distribute.
© 2024 PinoyUnknown | unidentifiedcyberghost

---

*Built with ❤️ by [PinoyUnknown](https://github.com/pinoyUnknown) & [unidentifiedcyberghost](https://github.com/unidentifiedcyberghost)*
