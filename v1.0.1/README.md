# 🔥 CyberSecurity Theme v1.0.1

> **Choose your aesthetic. Forge your browser.**
> Cross-browser theme extension for Chrome, Firefox, Edge, Brave, and all Chromium browsers.

## Current release: v1.0.1

Adds eleven distinct animated themes with bundled artwork, a responsive Linux Conky-style HUD, in-page About/theme controls, optional synthesized glitch sounds, saved-bookmark shortcuts, local search history, live world clocks, a holographic globe HUD, and daily USD reference rates. Public IP lookup is opt-in; private IP and machine metrics require the optional local native helper. Rates include the provider's source timestamp and are not live trading quotes.

Firefox AMO upload: `packages/CyberSecurityTheme-v1.0.1-firefox.zip`. If the add-on is absent from your public profile, check its review state and public/on-site distribution in the AMO Developer Hub.

Public IP lookup is off by default. A first-run consent page explains that api.ipify.org sees the request IP, and the user must opt in and grant the optional host permission before the address is displayed. The value is not sent to the extension developer. The optional native helper reads the private interface IP locally. ISP and VPN details are not requested. Public lookup can be disabled in the popup.

After the first-run privacy choice is successfully saved, the consent page opens the new tab. If permission is declined by the browser or the choice cannot be saved, it remains open and displays the status/error.

The popup and new-tab footer thank users for supporting this independent project and offer an optional [PayPal tip](https://www.paypal.com/paypalme/facebookgamer). Support is appreciated but never expected.

In the popup, find the “Love this app?” support card near the bottom. In the new-tab page, “A Note From the Developer” and its smaller explanatory message are cyan floating text without a border or background; “SHOW YOUR SUPPORT VIA PAYPAL” is a cyan button. The “Support a solo dev” tagline uses a slightly larger font. Both messages clearly state that tips are optional.

For actual machine hostname, private interface IP, CPU, RAM, and home-disk values, install the optional local native helper in `native-host/`. It supports Windows, Linux, and macOS, communicates only with the extension over native messaging, and sends no metrics over the network. Without the helper, local system metrics are clearly marked unavailable.

The terminal echoes text typed into the new-tab search box with a typing animation and shows the current website/search host after navigation. Browser address-bar text is not accessible to extensions. An editable display name is available in the popup; the optional helper can supply the actual OS hostname.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **11 Premium Themes** | Cyberpunk Neon, Blackhat Hacker, Sci-Fi HUD, Glass HUD, Cyberpunk HUD, PinoyUnknown, Dystopian, Pink Candy, CyberSecurity Dark, Glitch, HackTheBox |
| 🖥️ **New Tab Override** | Fully themed new tab with animated backgrounds, digital clock, and search bar |
| 🌍 **Holographic Globe HUD** | Original animated wireframe globe with theme-colored orbit rings, meridians, and scan sweep at the upper-left of the new-tab background; honors reduced-motion settings |
| 💱 **Currency Reference Ticker** | All valid currencies in the public USD reference-rate response; shows the upstream update time, refreshes at the provider's next update, and labels rates as daily/indicative rather than live trading quotes |
| 🔐 **IP Address HUD** | Public IP lookup is opt-in and uses ipify; private interface IP is read locally through the optional helper. ISP/VPN are not queried |
| 🌐 **World Clock Rail** | Live clock and date in 17 requested locations, using their IANA time zones |
| 💉 **Website CSS Injection** | Injects theme CSS variables (scrollbar, selection color) into every website |
| 🦊 **Firefox Browser Theme** | Dynamically updates Firefox browser UI colors via the theme API |
| 🔄 **Persistent Settings** | Remembers your chosen theme across browser sessions |
| 🔍 **Multi-Engine Search** | Google, Bing, DuckDuckGo, YouTube — switch engines from new tab |
| 🔊 **Glitch Sound Effects** | Local synthesized typing, click, and search sounds; enabled by default and switchable in About → Preferences |
| 📱 **Cross-Browser** | Chrome MV3, Firefox MV2, Edge, Brave |

The world-clock rail sits high in the right column and shows all 17 locations at once without a scrollbar; country names are bold white and have no glow. The greeting, search-engine selector, and search input appear before the main clock panel. The center clock is compact with reduced visual effects, while the search field has a stronger accent border, background, and focus state.

The gear button in the top bar expands/collapses the in-page HUD theme selector. The **ABOUT** dialog embeds the popup, including its SELECT THEME cards and preferences. Choosing a theme persists it and updates the HUD, website styling, and Firefox browser colors. The search-results terminal's “secured and safe” text is decorative only; the extension does not scan or certify website security.

Each of the eleven themes has its own bundled background artwork and motion treatment. Pink Candy uses a light pastel background with darker text and accents for readability. Glitch adds multicolor cyberpunk interference and HackTheBox uses an original green cyber-lab aesthetic. Saved Bookmarks and Search History are keyboard-accessible expandable panels; only submitted searches are stored locally on this device, up to eight recent terms, and users can clear the history. At narrow/zoomed viewport sizes, side panels stack into a scrollable layout to avoid covering one another. The entire floating website HUD fades away and is removed after three seconds on every page, not just search results. Glitch effects are synthesized locally with Web Audio; there are no sound assets or audio network requests, and the setting can be disabled in About → Preferences.

The collapsible machine panel reports browser online/offline and connection type where available. It starts expanded; use its heading to collapse or reopen it. With the updated optional helper it also reports CPU, RAM, OS, local IP, disk used/free capacity (total capacity on hover), and system uptime. Rerun the native-helper installer after updating the extension to add uptime and detailed disk data.

---

## 🎨 Themes

| # | Theme | Style | Vibe |
|---|---|---|---|
| 1 | ⚡ **Cyberpunk Neon** | Cyan, Magenta, Purple | Neon streets, rain, holographic |
| 2 | ⌨ **Blackhat Hacker** | Matrix Green, Black | Terminal, hacker, code |
| 3 | ◈ **Sci-Fi HUD** | Electric Blue, White | JARVIS, starship interface |
| 4 | ◇ **Glass HUD** | Black + White Glass | Transparent glassmorphism HUD |
| 5 | ⬡ **Cyberpunk HUD** | Orange, Yellow, Red | Night City, dystopian neon |
| 6 | ◉ **PinoyUnknown** | Hot Pink, Neon Green, Purple | Filipino brand identity |
| 7 | ☢ **Dystopian** | Dark Red, Gray | Post-apocalyptic, grim survival |
| 8 | ♡ **Pink Candy** | Light Pink, White, Dark Berry | Soft, kawaii, higher-contrast text |
| 9 | 🔐 **CyberSecurity Dark** | Neon Green, Navy | Fortress, secure hacker aesthetic |
| 10 | ▧ **Glitch** | Magenta, Cyan, Red, Green, Yellow, Orange, Purple | Multicolor cyberpunk interference |
| 11 | ⬢ **HackTheBox** | Lime Green, Black, White | Original cyber-lab terminal aesthetic |

---

## 🚀 Installation

### Chrome / Edge / Brave
**Local testing:** Open `chrome://extensions`, `edge://extensions`, or `brave://extensions`, enable Developer mode, choose **Load unpacked**, and select the `v1.0.1/` folder.

**Chrome Web Store:** Register through the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole), choose **Add new item**, upload `packages/CyberSecurityTheme-v1.0.1-chromium.zip`, complete listing/privacy/permission disclosures, and submit for review.

**Microsoft Edge Add-ons:** Sign in to the [Microsoft Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/overview), upload the Chromium ZIP in the Edge Add-ons dashboard, complete listing/privacy disclosures, and submit for certification.

**Brave / Opera:** For testing, load the unpacked folder from `brave://extensions` or `opera://extensions`. For distribution, use a compatible Chromium Web Store listing where supported or submit the Chromium ZIP through the browser's official extension developer portal.

### Firefox
**Temporary testing:** Extract `packages/CyberSecurityTheme-v1.0.1-firefox.zip`, open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on…**, and select the extracted package's root `manifest.json`. Do not select this source folder's `v1.0.1/manifest.json`: that is the Chromium Manifest V3 file with `background.service_worker`. The Firefox package manifest is v2 and declares `background.scripts`. Firefox removes temporary add-ons on restart.

The Firefox manifest declares Firefox 140 as its minimum version because AMO requires a non-empty `data_collection_permissions.required` list. It declares required collection as `none`; optional `locationInfo` covers only the public-IP lookup after opt-in.

The extension already includes a Firefox toolbar action for theme settings. Open Firefox's Extensions (puzzle-piece) menu and pin **CyberSecurity Theme** to the toolbar. This is a browser-toolbar button, not a Windows taskbar shortcut; browser extensions cannot add themselves to the Windows taskbar.

**AMO submission/update:** Sign in to the [AMO Developer Hub](https://addons.mozilla.org/developers/), choose **Submit a New Add-on** and **On this site** for a new listing, or open the existing listing to submit an update. Upload the Firefox ZIP, pass AMO validation, finish the listing and privacy/data-use questionnaire, and provide source code if AMO requests it. Submit for review and track signing/review status in the Developer Hub. Public distribution starts only after approval.

The Firefox package contains the Firefox manifest as root `manifest.json`. Use the separate Chromium package for Chrome/Edge and other Chromium-based store submissions. Rebuild both archives from the repository root with `.\v1.0.1\package_release.ps1`.

> 🦊 **Firefox Add-ons Profile:** [PinoyUnknown on AMO](https://addons.mozilla.org/en-US/firefox/user/20195701/)

### Optional: Install Native Metrics Helper (Windows/Linux/macOS)

The local helper supplies hostname, private IP, CPU, RAM, and disk data to the HUD. Python 3.8+ is required; metrics stay on the device. On Windows, run this from the repository root in PowerShell:

```powershell
.\v1.0.1\native-host\install_windows.ps1
```

The installer registers the helper for the current Windows user (no administrator access is needed). Restart Firefox afterward. If PowerShell blocks the script, run `Set-ExecutionPolicy -Scope Process Bypass` in that PowerShell window and rerun the installer. Until installation, local metrics/private IP are unavailable; public-IP lookup is separate and opt-in.

For Linux/macOS, run `bash v1.0.1/native-host/install_unix.sh` from the repository root, then restart the browser. If native metrics fail, hover the affected value in the HUD for the reported native-messaging error and install guidance.

---

## 📁 Project Structure

```
Browser-Theme-Extensions/
├── v1.0.1/                      ← Current release source
│   ├── assets/
│   │   └── cyber-city.svg        ← Original bundled new-tab artwork
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

#### `v1.0.1` — CyberSecurity Theme
- Renamed the browser extension to **CyberSecurity Theme v1.0.1**.
- Added original bundled cyber-city SVG wallpaper with theme-colored lighting overlays.
- Added subtle page entrance and ambient wallpaper animations.
- Added animated Conky-style terminal scanlines, accent glow, prompt, and cursor; the selected theme's accent color is used across the HUD.
- Added an original animated wireframe globe with theme-colored orbit rings, meridians, and a scan sweep in the upper-left background.
- Simplified the search-engine buttons to minimal G/B/D/YT labels and updated the developer footer with icon-free links and the support line.
- Moved saved browser bookmarks into a compact, vertically scrolling left-side panel.
- Updated the popup with icon-free theme cards and developer links, site-theme controls, a terminal display alias, and clear local-metrics privacy guidance.
- Added first-run disclosure and opt-in for public IP lookup through ipify; added a separately revocable popup switch and optional Firefox `locationInfo` declaration.
- Added the Bing Rewards referral beside the Bing search selector and the disclosed Hostinger affiliate link to the support links.
- Moved search-engine selection above the live clock and added the right-side world clock rail and referral card. Added “Earn Rewards” to the footer.
- Added responsive new-tab styling and reduced-motion support; canvas effects pause when the tab is hidden or motion is reduced.
- Added a theme-colored Conky-inspired live clock/date HUD and shortcuts to up to 8 recently saved browser bookmarks.
- Added local online/offline and browser-reported connection-type status. Public IP, ISP, and VPN details are not collected or sent to external services.
- Added an optional cross-platform native helper for the real machine hostname, CPU, RAM, and home-disk space, plus an editable terminal display alias.
- Added a theme-colored animated mini-HUD to normal web pages while leaving site controls clickable; it shows the visited host, not full URLs or page contents.
- Added a collapsible top-bar gear selector for all eleven themes; selections persist and update the new-tab HUD, themed websites, and Firefox browser colors.
- Added readable light Pink Candy styling plus original Glitch and HackTheBox-inspired themes, each with its own artwork and animation.
- Added the WhiteHatDev X account to the developer links.
- Updated the search-results HUD prompt and added a decorative “secured and safe...” line; it does not scan or certify site security.
- Reduced machine-panel spacing and added helper-reported uptime, visible disk used/free capacity, and total capacity in the value tooltip.
- Increased the world-clock country, time, and date text for readability.
- Added the Firefox AMO upload package at `packages/CyberSecurityTheme-v1.0.1-firefox.zip`.

#### `v1.0.0` — Initial Release
**Released:** September 28, 2024
**Author:** PinoyUnknown | unidentifiedcyberghost

##### ✅ Added
- 8 fully designed browser themes:
  - ⚡ Cyberpunk Neon (Orbitron · Cyan/Magenta/Purple)
  - ⌨ Blackhat Hacker (Ubuntu Mono · Matrix Green)
  - ◈ Sci-Fi HUD (Orbitron · Electric Blue)
  - ◇ Glass HUD (Orbitron · Black Glassmorphism)
  - ⬡ Cyberpunk HUD (Orbitron · Orange/Yellow Night City)
  - ◉ PinoyUnknown (Orbitron · Pink/Green/Purple Brand)
  - ☢ Dystopian (Ubuntu · Dark Red/Gray)
  - ♡ Pink Candy (Ubuntu · Hot Pink/White Kawaii)
- Chrome MV3 manifest (`manifest.json`)
- Firefox MV2 manifest (`manifest_firefox.json`) with Firefox AMO profile link
- Custom animated new tab page with:
  - Digital HUD clock (live)
  - Theme-specific canvas animations (8 unique particle systems)
  - Multi-engine search bar (Google, Bing, DuckDuckGo, YouTube)
  - Developer footer links
- Popup theme selector with 2-column card grid + canvas previews
- Content script for website CSS injection (scrollbar, text selection)
- Firefox browser toolbar theming via `browser.theme.update()` API
- Persistent theme storage across sessions
- Toggle: apply theme to websites (on/off)
- Toggle: enable/disable custom new tab
- Developer links in popup and new tab:
  - Google Play Store
  - Firefox Add-ons (AMO)
  - GitHub (unidentifiedcyberghost)
  - GitHub (pinoyUnknown)
  - Instagram (@pinoyunknown)
  - YouTube
- Cross-browser support: Chrome, Firefox, Edge, Brave
- Versioned folder structure (`v1.0.0/`)

---

> *Future updates will be logged above in descending version order.*
> *Each version will have its own folder (e.g., `v1.1.0/`, `v2.0.0/`).*

---

## 📄 License

MIT License — Free to use, modify, and distribute.
© 2024 PinoyUnknown | unidentifiedcyberghost

---

*Built with ❤️ by [PinoyUnknown](https://github.com/pinoyUnknown) & [unidentifiedcyberghost](https://github.com/unidentifiedcyberghost)*
