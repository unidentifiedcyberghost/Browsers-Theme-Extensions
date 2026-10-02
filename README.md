# 🔥 CyberSecurity Theme v1.0.1

> **Choose your aesthetic. Forge your browser.**
> Cross-browser theme extension for Chrome, Firefox, Edge, Brave, and all Chromium browsers.

## Current release: v1.0.1

Adds an original bundled cyber-city wallpaper, an animated Linux terminal/Conky-style HUD, saved-bookmark shortcuts, live world clocks, a daily USD currency reference ticker, an original animated holographic globe HUD with optional public/private IP readouts, minimal search-engine buttons above the clock, search-result theming, reduced-motion support, and 9 premium themes including the new CyberSecurity Dark theme. Rates are indicative reference data, not live trading data.

Public IP lookup is off until the user opts in and grants the optional `api.ipify.org` host permission. If enabled, that service receives the request IP and returns it for display; it is not sent to the extension developer. The private interface IP is read locally by the optional native helper. ISP and VPN details are not requested. The user can disable public lookup in the popup at any time.

The popup and new-tab footer include an optional PayPal tip link for users who want to support this independently maintained project: [Tip on PayPal](https://www.paypal.com/paypalme/facebookgamer). Tips are appreciated but never expected.

Both support messages thank users and explain that contributions are voluntary: the popup has a “Love this app?” card, and the new-tab footer presents “A Note From the Developer” and its compact message in cyan floating text without a box, paired with a cyan “SHOW YOUR SUPPORT VIA PAYPAL” button. The “Support a solo dev” tagline is slightly larger for readability.

The optional cross-platform native helper in `v1.0.1/native-host/` can locally report the device hostname, private interface IP, CPU, RAM, and home-disk usage. It must be separately installed (Python 3 required); without it, those values are clearly unavailable. A subtle animated terminal overlay follows the selected theme on regular pages and shows the current host/search, while website content and clicks remain available.

The public Firefox Add-ons profile previously did not show the add-on. Uploading a package alone does not publish it: check its AMO review status and confirm public/on-site distribution.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **9 Premium Themes** | Cyberpunk Neon, Blackhat Hacker, Sci-Fi HUD, Glass HUD, Cyberpunk HUD, PinoyUnknown, Dystopian, Pink Candy, CyberSecurity Dark |
| 🖥️ **New Tab Override** | Fully themed new tab with animated backgrounds, digital clock, daily reference-rate ticker, holographic globe, and search bar |
| 💉 **Website CSS Injection** | Injects theme CSS variables (scrollbar, selection color) into every website; applies themed styling to Google/Bing/DuckDuckGo/YouTube search results |
| 🦊 **Firefox Browser Theme** | Dynamically updates Firefox browser UI colors via the theme API |
| 🔄 **Persistent Settings** | Remembers your chosen theme across browser sessions |
| 🔍 **Multi-Engine Search** | Google, Bing, DuckDuckGo, YouTube — switch engines from new tab |
| 🖥️ **Conky-Inspired Linux HUD** | Animated terminal panel, live clock/date, selected-theme accents, saved bookmarks, browser-reported connection status, machine metrics panel, and rotating planet globe |
| 💱 **Currency Reference Ticker** | All currencies in the free provider's USD reference-rate response, with the source update timestamp; provider rates update daily and are not live trading quotes |
| 🌍 **Holographic Globe HUD** | Original animated wireframe globe with theme-colored orbit rings, meridians, and scan sweep at the upper-left of the new-tab background; honors reduced-motion settings |
| 🔐 **IP Address HUD** | Public IP lookup is opt-in and uses ipify; private interface IP is read locally through the optional helper. ISP/VPN are not queried |
| 🌐 **World Clock Rail** | Live clocks and dates for 17 requested locations, with representative cities shown for broad regions |
| 📊 **Machine Metrics Panel** | Displays hostname, CPU%, RAM, OS, storage, network status (via optional native helper); left-aligned, below top navbar |
| 🔐 **Optional Native Helper** | Cross-platform Python daemon for Windows/Linux/macOS; reports real device hostname, CPU, RAM, disk usage without external API calls (privacy-first) |
| 📱 **Cross-Browser** | Chrome MV3, Firefox MV2, Edge, Brave |
| ♿ **Accessibility** | Reduced-motion support; proper ARIA labels; keyboard-navigable popup and search controls |

The search-engine selector is positioned above the central clock. The right rail contains the live world clocks and separate Microsoft Rewards and Hostinger referral links; “Earn Rewards” is also available in the footer.

The world-clock rail is placed near the top of the right column. It shows all 17 location clocks at once, without an internal scrollbar; country labels are bold white text with no glow effect for readability.

The center greeting, search-engine selector, and search input appear before the main clock panel. The center clock is intentionally compact, and the search field has a brighter accent border, background, and focus state so users can find it quickly.

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
#### Test locally
1. Download the repository ZIP from GitHub and extract it, or clone the repository.
2. Open `chrome://extensions` in Chrome, `edge://extensions` in Edge, or `brave://extensions` in Brave.
3. Enable **Developer mode**.
4. Select **Load unpacked** and choose the `v1.0.1/` folder (the folder containing `manifest.json`).
5. Open a new tab to test the HUD; use the toolbar button to test theme selection and settings.

#### Publish to the Chrome Web Store
1. Register for a [Chrome Web Store developer account](https://chrome.google.com/webstore/devconsole) and complete its one-time registration.
2. Choose **Add new item** and upload `packages/CyberSecurityTheme-v1.0.1-chromium.zip`.
3. Complete the listing, privacy disclosures, screenshots, and permission justifications, then submit for review.
4. After approval, publish the listing and install the public listing to test the store-delivered version.

#### Publish to Microsoft Edge Add-ons
1. Register/sign in at the [Microsoft Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/overview) and open the Edge Add-ons developer dashboard.
2. Create a new extension submission and upload `packages/CyberSecurityTheme-v1.0.1-chromium.zip`.
3. Complete the listing and privacy/permission declarations, submit it for certification, then publish after approval.

Brave can load the unpacked folder using `brave://extensions`; it can also use compatible Chromium Web Store listings where available. For Opera, test the Chromium ZIP via Developer Mode at `opera://extensions`, or submit through the Opera add-ons developer portal.

### Firefox
#### Test locally
1. Extract `packages/CyberSecurityTheme-v1.0.1-firefox.zip`.
2. Open `about:debugging#/runtime/this-firefox` in Firefox.
3. Click **Load Temporary Add-on…** and select the extracted package's `manifest.json`.
4. Open a new tab to check the interface. Temporary add-ons are removed when Firefox restarts.

#### Submit to Firefox Add-ons (AMO)
1. Sign in to the [AMO Developer Hub](https://addons.mozilla.org/developers/) using the account that owns the add-on.
2. Choose **Submit a New Add-on** and select **On this site** for AMO distribution.
3. Upload `packages/CyberSecurityTheme-v1.0.1-firefox.zip`; it is built with Firefox's manifest at the archive root.
4. Complete the listing, privacy/data-use questionnaire, source-code submission if AMO requests it, and permission justifications.
5. Submit for review. Track validation/review in the Developer Hub; publication is not immediate until AMO approves it.
6. To update an existing add-on, open its AMO Developer Hub page and upload the new version to that listing rather than creating a duplicate.

Use the Firefox-specific package for AMO and the Chromium package for Chrome/Edge/Opera testing and store submission. Store approval and distribution are controlled by each browser's store.

> 🦊 **Firefox Add-ons Profile:** [PinoyUnknown on AMO](https://addons.mozilla.org/en-US/firefox/user/20195701/)

### Release packages

- Firefox / AMO: `packages/CyberSecurityTheme-v1.0.1-firefox.zip`
- Chrome / Edge / Brave / Opera (Chromium): `packages/CyberSecurityTheme-v1.0.1-chromium.zip`
- For local Chromium development, load the `v1.0.1/` folder unpacked.
- Rebuild both packages with `.\v1.0.1\package_release.ps1` from the repository root.

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
| 🐙 GitHub (CyberGhost) | [unidentifiedcyberghost](https://github.com/unidentifiedcyberghost) |
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
- **Currency Reference Ticker**: Displays every valid currency in the selected public USD reference-rate response, with its upstream timestamp and a clear daily-reference/not-live-trading label; refreshes when the provider's next update is due
- **Holographic Globe HUD**: Added original wireframe globe artwork with theme-colored orbit rings, meridians, and scan sweep in the upper-left background; honors reduced-motion settings
- **IP Address HUD**: Public IP display requires first-run consent plus optional ipify host permission; private interface IP is read only by the local native helper. ISP/VPN data is not requested.
- **Referral Links**: Added the Bing Rewards referral next to the Bing search selector and a clearly disclosed Hostinger affiliate link in developer links.
- **Search Engine Buttons**: Replaced large icon buttons with small, minimal G/B/D/YT labels while retaining accessible names and selected-state styling
- **Developer Footer**: Added the developer support line and changed the CyberGhost and PinoyUnknown links to icon-free labels
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
- Added the currency-provider permission (`https://open.er-api.com/*`) to both browser manifests

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
