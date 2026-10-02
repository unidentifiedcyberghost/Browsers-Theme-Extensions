# 🔥 CyberSecurity Theme v1.0.1

> **Choose your aesthetic. Forge your browser.**
> Cross-browser theme extension for Chrome, Firefox, Edge, Brave, and all Chromium browsers.

## Current release: v1.0.1

Adds an original bundled cyber-city wallpaper, an animated Linux terminal/Conky-style HUD, saved-bookmark shortcuts, privacy-safe local network status, and reduced-motion support. The HUD animation and colors stay consistent across all eight themes.

Firefox AMO upload: `packages/CyberSecurityTheme-v1.0.1-firefox.zip`. If the add-on is absent from your public profile, check its review state and public/on-site distribution in the AMO Developer Hub.

The network panel displays online/offline status and connection type only when the browser reports it. It does not read public IP, ISP, or VPN details or contact lookup services.

For actual machine hostname, CPU, RAM, and home-disk values, install the optional local native helper in `native-host/`. It supports Windows, Linux, and macOS, communicates only with the extension over native messaging, and sends no metrics over the network. Without the helper, system metrics are clearly marked unavailable.

The terminal echoes text typed into the new-tab search box with a typing animation and shows the current website/search host after navigation. Browser address-bar text is not accessible to extensions. An editable display name is available in the popup; the optional helper can supply the actual OS hostname.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **8 Premium Themes** | Cyberpunk Neon, Blackhat Hacker, Sci-Fi HUD, Glass HUD, Cyberpunk HUD, PinoyUnknown, Dystopian, Pink Candy |
| 🖥️ **New Tab Override** | Fully themed new tab with animated backgrounds, digital clock, and search bar |
| 💉 **Website CSS Injection** | Injects theme CSS variables (scrollbar, selection color) into every website |
| 🦊 **Firefox Browser Theme** | Dynamically updates Firefox browser UI colors via the theme API |
| 🔄 **Persistent Settings** | Remembers your chosen theme across browser sessions |
| 🔍 **Multi-Engine Search** | Google, Bing, DuckDuckGo, YouTube — switch engines from new tab |
| 📱 **Cross-Browser** | Chrome MV3, Firefox MV2, Edge, Brave |

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
| 8 | ♡ **Pink Candy** | Pink, White | Soft, kawaii, sweet aesthetic |

---

## 🚀 Installation

### Chrome / Edge / Brave
1. Download or clone this repo
2. Navigate into the `v1.0.1/` folder
3. Open browser → `chrome://extensions/` (or `edge://extensions/`)
4. Enable **Developer Mode** (top right toggle)
5. Click **"Load unpacked"** → select the `v1.0.1/` folder
6. Click the 🔥 Theme Forge icon in your toolbar

### Firefox
1. Download and extract `packages/CyberSecurityTheme-v1.0.1-firefox.zip`
2. Open Firefox → `about:debugging`
3. Click **"This Firefox"** → **"Load Temporary Add-on"**
4. Select the `manifest.json` file inside the extracted folder
5. Temporary installs are removed when Firefox restarts. For a permanent install, submit the ZIP to AMO and wait for public approval/signing.

> 🦊 **Firefox Add-ons Profile:** [PinoyUnknown on AMO](https://addons.mozilla.org/en-US/firefox/user/20195701/)

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
| 🐙 GitHub (CyberHost) | [unidentifiedcyberghost](https://github.com/unidentifiedcyberghost) |
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
- Added responsive new-tab styling and reduced-motion support; canvas effects pause when the tab is hidden or motion is reduced.
- Added a theme-colored Conky-inspired live clock/date HUD and shortcuts to up to 8 recently saved browser bookmarks.
- Added local online/offline and browser-reported connection-type status. Public IP, ISP, and VPN details are not collected or sent to external services.
- Added an optional cross-platform native helper for the real machine hostname, CPU, RAM, and home-disk space, plus an editable terminal display alias.
- Added a theme-colored animated mini-HUD to normal web pages while leaving site controls clickable; it shows the visited host, not full URLs or page contents.
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
