# 🔥 CyberSecurity Theme v1.0.1

> **Choose your aesthetic. Forge your browser.**
> Cross-browser theme extension for Chrome, Firefox, Edge, Brave, and all Chromium browsers.

## Current release: v1.0.1

The v1.0.1 update adds 11 distinct animated themes with bundled artwork, a responsive Conky-style new-tab HUD, in-page About/theme controls, synthesized glitch sounds, saved bookmarks and local search history, world clocks, a currency reference ticker, and optional network/system information. Public IP lookup is opt-in; local machine metrics require the separately installed native helper. Exchange rates are daily reference data, not live trading quotes.

Public IP lookup is off until the user opts in and grants the optional `api.ipify.org` host permission. If enabled, that service receives the request IP and returns it for display; it is not sent to the extension developer. The private interface IP is read locally by the optional native helper. ISP and VPN details are not requested. The user can disable public lookup in the popup at any time.

On first install, the privacy page asks whether to enable public-IP lookup. After Allow or Decline is saved, it opens the new tab so the user can continue; if permission or saving fails, the page stays open and reports the problem.

The popup and new-tab footer include an optional PayPal tip link for users who want to support this independently maintained project: [Tip on PayPal](https://www.paypal.com/paypalme/facebookgamer). Tips are appreciated but never expected.

Both support messages thank users and explain that contributions are voluntary: the popup has a “Love this app?” card, and the new-tab footer presents “A Note From the Developer” and its compact message in cyan floating text without a box, paired with a cyan “SHOW YOUR SUPPORT VIA PAYPAL” button. The “Support a solo dev” tagline is slightly larger for readability.

The optional cross-platform native helper in `v1.0.1/native-host/` can locally report the device hostname, private interface IP, CPU, RAM, and home-disk usage. It must be separately installed (Python 3 required); without it, those values are clearly unavailable. A subtle animated terminal overlay follows the selected theme on regular pages and shows the current host/search, while website content and clicks remain available.

The public Firefox Add-ons profile previously did not show the add-on. Uploading a package alone does not publish it: check its AMO review status and confirm public/on-site distribution.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **11 Premium Themes** | Cyberpunk Neon, Blackhat Hacker, Sci-Fi HUD, Glass HUD, Cyberpunk HUD, PinoyUnknown, Dystopian, Pink Candy, CyberSecurity Dark, Glitch, HackTheBox |
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
| 🔊 **Glitch Sound Effects** | Short synthesized sounds for typing, interface clicks, and searches; enabled by default and configurable in About → Preferences |

The search-engine selector is positioned above the central clock. The right rail contains the live world clocks and separate Microsoft Rewards and Hostinger referral links; “Earn Rewards” is also available in the footer.

The world-clock rail is placed near the top of the right column. It shows all 17 location clocks at once, without an internal scrollbar; country labels are bold white text with no glow effect for readability.

The center greeting, search-engine selector, and search input appear before the main clock panel. The center clock is intentionally compact, and the search field has a brighter accent border, background, and focus state so users can find it quickly.

The small gear in the new-tab top bar expands/collapses an inline HUD theme selector. The About dialog also embeds the popup, including its SELECT THEME cards and preferences. Selecting a theme saves it across sessions and applies it to the new-tab HUD, website styling, and Firefox browser colors; open extension pages synchronize from the saved theme. The search-results terminal banner is decorative; it does not scan or certify the destination site's security.

Each of the eleven themes has its own bundled background artwork and motion treatment. Pink Candy uses a light pastel background with darker text and accents for readability. Glitch adds multicolor cyberpunk interference and HackTheBox uses an original green cyber-lab aesthetic. Saved Bookmarks and Search History are keyboard-accessible expandable panels; only submitted searches are stored locally on this device, up to eight recent terms, and users can clear the history. At narrow/zoomed viewport sizes, side panels stack into a scrollable layout to avoid covering one another. Search-result terminal notices fade away after three seconds. The optional glitch sound effects are generated locally by Web Audio (no audio files or network requests) and can be turned off in About → Preferences.

The collapsible machine panel reports browser network online/offline and connection type when available, plus optional native-helper CPU, RAM, OS, local IP, disk capacity, and uptime. It starts expanded; use its heading to collapse or reopen it. Disk used/free is shown directly, with total capacity available on hover. Uptime and detailed disk data require the updated optional helper; older helper installations should be updated by rerunning its installer.

---

## 🎨 Themes (11 Total)

| # | Theme | Style | Vibe | Icon |
|---|---|---|---|---|
| 1 | ⚡ **Cyberpunk Neon** | Cyan, Magenta, Purple | Neon streets, rain, holographic | ⚡ |
| 2 | ⌨ **Blackhat Hacker** | Matrix Green, Black | Terminal, hacker, code | ⌨ |
| 3 | ◈ **Sci-Fi HUD** | Electric Blue, White | JARVIS, starship interface | ◈ |
| 4 | ◇ **Glass HUD** | Black + White Glass | Transparent glassmorphism HUD | ◇ |
| 5 | ⬡ **Cyberpunk HUD** | Orange, Yellow, Red | Night City, dystopian neon | ⬡ |
| 6 | ◉ **PinoyUnknown** | Hot Pink, Neon Green, Purple | Filipino brand identity | ◉ |
| 7 | ☢ **Dystopian** | Dark Red, Gray | Post-apocalyptic, grim survival | ☢ |
| 8 | ♡ **Pink Candy** | Light Pink, White, Dark Berry | Soft, kawaii, higher-contrast text | ♡ |
| 9 | 🔐 **CyberSecurity Dark** | Neon Green, Navy | Fortress, secure hacker aesthetic | 🔐 |
| 10 | ▧ **Glitch** | Magenta, Cyan, Red, Green, Yellow, Orange, Purple | Multicolor cyberpunk interference | ▧ |
| 11 | ⬢ **HackTheBox** | Lime Green, Black, White | Original cyber-lab terminal aesthetic | ⬢ |

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

**Important:** Select `manifest.json` from the extracted `CyberSecurityTheme-v1.0.1-firefox` package folder. Do not select `v1.0.1/manifest.json`; that is the Chromium Manifest V3 file and uses `background.service_worker`. The Firefox package uses Manifest V2 with `background.scripts`.

The Firefox manifest declares Firefox 140 as its minimum version because AMO requires a non-empty `data_collection_permissions.required` list. It declares required collection as `none`; optional `locationInfo` covers the opt-in public-IP lookup.

The Firefox extension includes a toolbar action for its theme popup. To show it, open Firefox's Extensions (puzzle-piece) menu and pin **CyberSecurity Theme** to the toolbar. This is a browser-toolbar button, not a Windows taskbar shortcut; browser extensions cannot add themselves to the Windows taskbar.

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
.\v1.0.1\native-host\install_windows.ps1
```

This registers the optional helper for the current Windows user (no administrator access is needed). Restart Firefox after installation. If PowerShell blocks the script, run `Set-ExecutionPolicy -Scope Process Bypass` in that PowerShell window and rerun the installer. Until installed, local metrics and the private IP remain unavailable; public-IP lookup is separate and opt-in.

#### Linux / macOS
```bash
cd v1.0.1/native-host
bash install_unix.sh
# Writes manifests to ~/.mozilla and ~/.config for native-messaging
```

If native metrics fail, the HUD shows an install/error status; hover the affected value for the browser's native-messaging error and install guidance.

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
| 𝕏 WhiteHatDev | [@TeamWhiteHatDev](https://x.com/TeamWhiteHatDev) |
| 🐙 GitHub (CyberGhost) | [unidentifiedcyberghost](https://github.com/unidentifiedcyberghost) |
| 🐙 GitHub (Brand) | [pinoyUnknown](https://github.com/pinoyUnknown) |
| 📸 Instagram | [@pinoyunknown](https://instagram.com/pinoyunknown) |
| ▶ YouTube | [PinoyUnknown Channel](https://www.youtube.com/watch?v=zrF1EoEh1-w) |

---

## 📋 Changelog & Update Logs

### Version History

---

#### `v1.0.1` — CyberSecurity Theme (feature and compatibility updates)
**Release:** 2024; maintained as the current v1.0.1 line.

This release grew through the following updates. Together they describe the changes in the current `v1.0.1/` source and packages.

##### 1. New themes and visual design
- Expanded the original eight-theme set to eleven: added **CyberSecurity Dark**, **Glitch**, and **HackTheBox**.
- Made Pink Candy a lighter pastel theme with darker, higher-contrast text and accents.
- Created and bundled a distinct original SVG background for every theme.
- Added theme-specific canvas animation treatments, including multicolor Glitch interference and a green HackTheBox-inspired cyber-lab network.
- Preserved per-theme accent colors across the new-tab HUD, website styling, popup previews, and Firefox browser chrome where the Firefox theme API is available.

##### 2. Main interface, layout, and controls
- Built a responsive, Conky-inspired new-tab interface with a live digital clock/date, greeting, terminal prompt, animated background, and theme-colored HUD.
- Placed the search engine selector and input before the clock; retained Google, Bing, DuckDuckGo, and YouTube search targets.
- Added an expandable settings gear and an **ABOUT** dialog. The About view embeds the existing popup, so users can select any theme and access preferences without leaving the interface.
- Made theme selection persist in extension storage and update the open new-tab interface, themed websites, and Firefox browser colors. Popup cards also follow saved-theme changes.
- Made Saved Bookmarks and Search History collapsible. Search history stores only submitted terms locally (up to eight recent searches), supports resubmission, and includes a clear-history control.
- Added responsive breakpoints so the side panels stack and the page can scroll at narrow, short, or zoomed viewport sizes rather than overlap.
- Made the machine/network status panel collapsible and more compact; added browser online/offline and connection-type information where supported.

##### 3. Search HUD and interface sound
- Added a small website HUD with the CyberSecurity terminal prompt and current page/search text; the complete floating overlay fades out and is removed after three seconds on every website.
- Added “secured and safe...” and “Connection Secured...” decorative lines. These are visual flavor only: the extension does not inspect or certify website safety.
- Added locally synthesized glitch-style audio for typing in extension interface fields, clicking interface controls, and submitting searches. It uses Web Audio without remote audio files or sound requests; it is enabled by default and can be switched off in **ABOUT → Preferences**.

##### 4. Clocks, network, and machine information
- Added the world-clock rail for the requested locations, with readable country labels, time, and date, positioned in the right column without an internal scrollbar.
- Added an original holographic globe, orbit rings, meridians, and scan treatment.
- Added a daily USD currency reference ticker with the provider’s update timestamp. Rates are not live trading quotes.
- Added optional public-IP lookup via ipify, off until the user opts in and grants the optional host permission. The request IP is sent to ipify; ISP and VPN details are not queried.
- Kept private IP, hostname, CPU, RAM, OS, disk capacity/use, and uptime local to the optional native helper. These machine values require the helper to be installed separately and are not available from the extension alone.
- Added Windows and Unix-like native-helper installers and documented how to update/reinstall the helper for newer metrics.

##### 5. Links, support, and documentation
- Added separate Microsoft Rewards and Hostinger referral links, with an affiliate disclosure for Hostinger; kept **Earn Rewards** available in the footer.
- Added the developer support note and optional PayPal button to the new-tab and popup interfaces. Tips are described as voluntary.
- Added the WhiteHatDev profile to the developer links.
- Expanded installation and store-submission instructions for Firefox AMO and Chromium-based browsers, including the difference between temporary testing and publishing.

##### 6. Firefox and release-package fixes
- Built separate Firefox Manifest V2 and Chromium Manifest V3 ZIPs. The Firefox archive places the Firefox manifest at the ZIP root and uses `background.scripts`; do not load the Chromium service-worker manifest in Firefox.
- Declared Firefox’s “no required data collection” value and the optional public-IP permission in the Firefox manifest. The current Firefox manifest’s minimum version is 140 because of AMO’s data-collection manifest requirements.
- Added a release script that builds both archives and verifies versioned root manifests, the correct browser-specific background fields, and the required theme artwork and sound script.

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
