# 📖 Theme Forge — Complete User & Publishing Guide

> **Author:** PinoyUnknown | unidentifiedcyberghost  
> **Version:** v1.0.0  
> **Firefox Add-ons Profile:** https://addons.mozilla.org/en-US/firefox/user/20195701/

> **Current release:** v1.0.1 is in `v1.0.1/`; its Firefox-ready upload package is `packages/ThemeForge-v1.0.1-firefox.zip`. It adds a Conky-inspired clock HUD, saved-bookmark shortcuts, and local-only network status. The package/installation examples below are for v1.0.0—use the v1.0.1 archive when testing or submitting the new release.
>
> If Theme Forge is absent from the public profile, check AMO Developer Hub → **My Add-ons** for the submission/review status and verify public (“On this site”) distribution. Uploading a file or choosing self-distribution does not create a public profile listing.

---

## 📋 Table of Contents

1. [Install on Chrome / Edge / Brave](#-install-on-chrome--edge--brave)
2. [Install on Firefox (Temporary Dev Load)](#-install-on-firefox-temporary)
3. [How to Use the Extension](#-how-to-use-the-extension)
4. [Package the Extension for AMO](#-package-the-extension-for-firefox-amo)
5. [Submit to Firefox Add-ons (AMO)](#-submit-to-firefox-add-ons-amo)
6. [Submit to Chrome Web Store](#-submit-to-chrome-web-store)
7. [Troubleshooting](#-troubleshooting)
8. [Developer Links](#-developer-links)

---

## 🟡 Install on Chrome / Edge / Brave

> Supports **Google Chrome**, **Microsoft Edge**, **Brave**, and all Chromium browsers.

**Steps:**

```
1. Download or clone this repo:
   https://github.com/unidentifiedcyberghost/Browsers-Theme-Extensions

2. Open your browser Extensions page:
   Chrome  →  chrome://extensions/
   Edge    →  edge://extensions/
   Brave   →  brave://extensions/

3. Enable "Developer Mode" (toggle in the TOP-RIGHT corner)

4. Click "Load unpacked"

5. Select the folder:  Browser-Theme-Extensions/v1.0.0/

6. Theme Forge appears in your toolbar — click ◈ to open it!
```

> ✅ Open a new tab to see the animated Theme Forge new tab page!

---

## 💻 Install on YOUR Firefox Browser (Local Computer)

> This is the **easiest way** to use the extension on your own Firefox right now.
> No developer account needed. Uses the ready-made `.xpi` file.

---

## 💻 Install on YOUR Firefox Browser (Local Computer)

> This is the **easiest way** to use the extension on your own Firefox right now.
> No developer account needed. Uses the ready-made `.xpi` file.

### 📥 Method 1 — Install via .xpi File (Recommended)

```
1. Download the .xpi file from this repo:
   packages/ThemeForge-v1.0.0-firefox.xpi

   Direct GitHub link:
   https://github.com/unidentifiedcyberghost/Browsers-Theme-Extensions
   → Go to  packages/  folder → click ThemeForge-v1.0.0-firefox.xpi
   → Click the download button (⬇ Raw / Download)

2. Open Firefox

3. DRAG AND DROP the .xpi file directly into Firefox
   (drag it from your Downloads folder into the Firefox window)

   OR go to:  about:addons
   → Click the gear icon ⚙ (top right)
   → Select "Install Add-on From File..."
   → Browse to and select:  ThemeForge-v1.0.0-firefox.xpi

4. Firefox shows a permission dialog:
   → Click "Add"  to install

5. Done! Theme Forge icon (◈) appears in your Firefox toolbar.
   Click it to choose your theme!
```

> ⚠️ NOTE: Firefox may warn "this add-on could not be verified".
> This is normal for unsigned extensions loaded locally.
> Click "Add Anyway" to proceed.
> To remove this warning permanently → submit to AMO (see guide below).

---

### 📥 Method 2 — Install via about:debugging (Developer Mode)

```
This method loads the extension WITHOUT needing the .xpi file.
It loads directly from the source folder.

1. Open Firefox → go to:
   about:debugging

2. Click "This Firefox" in the left sidebar

3. Click "Load Temporary Add-on..."

4. Browse to:
   C:/Project-PinoyUnknown/Browser-Theme-Extensions/v1.0.0/
   Select:  manifest_firefox.json
   (rename it to manifest.json first if Firefox does not accept it)

5. Theme Forge loads immediately!
   Click the ◈ icon in the toolbar.

NOTE: Temporary add-ons are removed when Firefox restarts.
      Use Method 1 (.xpi) for a persistent installation.
```

---

### 📥 Method 3 — Enable Unsigned Extensions (Firefox Developer/Nightly)

```
If you want to permanently install without AMO review,
use Firefox Developer Edition or Firefox Nightly:

1. Download Firefox Developer Edition:
   https://www.mozilla.org/en-US/firefox/developer/

2. Open Firefox Developer Edition → go to:
   about:config

3. Search for:
   xpinstall.signatures.required

4. Double-click it to set value to:  false

5. Now install the .xpi file (Method 1 above).
   Firefox Developer Edition will NOT show the warning.
   The extension persists after restart.

NOTE: This option is NOT available in regular Firefox (stable).
      Regular Firefox REQUIRES AMO signing for permanent installs.
```

---

### 🔔 Make it Permanent — Submit to AMO

```
For a permanent, always-on installation in regular Firefox
(not Developer Edition), the extension must be signed by Mozilla.

The easiest way: submit to your AMO profile (see guide below).
Once approved, users install it with one click and it never
disappears on restart.

Your AMO developer profile:
https://addons.mozilla.org/en-US/firefox/user/20195701/
```


## 🦊 Install on Firefox (Temporary)

> This loads the extension temporarily — it disappears when Firefox restarts.
> For a **permanent public install**, see the [AMO submission guide](#-submit-to-firefox-add-ons-amo).

**Steps:**

```
1. Prepare the Firefox manifest:
   Go to: Browser-Theme-Extensions/v1.0.0/

   Windows (CMD/PowerShell):
     copy manifest_firefox.json manifest.json /Y

   Mac / Linux:
     cp manifest_firefox.json manifest.json

2. Open Firefox → go to:
   about:debugging

3. Click "This Firefox" (left sidebar)

4. Click "Load Temporary Add-on..."

5. Navigate to: Browser-Theme-Extensions/v1.0.0/
   Select: manifest.json

6. Click the Theme Forge icon (◈) in the Firefox toolbar!
```

> ⚠️ Temporary add-ons are removed when Firefox closes.
> Submit to AMO for a permanent, always-on installation.

---

## 🎨 How to Use the Extension

### Opening the Theme Selector

```
Click the ◈ Theme Forge icon in your browser toolbar.
The popup opens showing all 8 themes as preview cards.
```

### Selecting a Theme

```
1. Browse the 8 theme cards in the 2-column grid:

   ⚡ Cyberpunk Neon    Cyan + Magenta + Purple — Orbitron font
   ⌨  Blackhat Hacker   Matrix Green — Ubuntu Mono terminal
   ◈  Sci-Fi HUD        Electric Blue — Starship JARVIS UI
   ◇  Glass HUD         Black Transparent Glassmorphism
   ⬡  Cyberpunk HUD     Orange + Yellow — Night City neon
   ◉  PinoyUnknown      Hot Pink + Neon Green — Filipino brand
   ☢  Dystopian         Dark Red + Gray — Post-apocalyptic
   ♡  Pink Candy         White + Hot Pink — Kawaii aesthetic

2. Click any card or its "APPLY" button
3. Theme activates instantly — shows "✓ ACTIVE" badge
```

### Toggles

```
[Apply theme to websites]
  ON  → Injects theme scrollbar + text selection colors into every site
  OFF → Website styling is left untouched

[Custom New Tab page]
  ON  → Replaces new tab with the animated Theme Forge page
  OFF → Browser uses default new tab
```

### New Tab Page Features

```
🕐  LIVE DIGITAL CLOCK      Updates every second — HUD styled
📅  DATE & TIMEZONE         Day, month, year, local timezone
👋  GREETING                Good Morning / Afternoon / Evening
🔍  MULTI-ENGINE SEARCH     Switch between:
                              [G]  Google
                              [B]  Bing
                              [🦆] DuckDuckGo
                              [▶]  YouTube
🎨  ANIMATED BACKGROUND     Each theme has a unique animation:
      Cyberpunk Neon  → Neon particle grid + connecting lines
      Blackhat Hacker → Falling Matrix characters (binary rain)
      Sci-Fi HUD      → Rotating orbital rings with dot tracers
      Glass HUD       → Floating glass bubble particles
      Cyberpunk HUD   → Pulsing hexagonal grid
      PinoyUnknown    → Twinkling pink/green star field
      Dystopian       → Red static noise / glitch effect
      Pink Candy      → Floating heart particles
🔗  DEVELOPER FOOTER        Quick links to all developer profiles
```

### Firefox Browser UI Theming

```
On Firefox, selecting a theme also changes the BROWSER interface:
  ✓ Toolbar background color
  ✓ Tab text and icon colors
  ✓ Active tab underline color
  ✓ Extension popup background/text

This uses the official Firefox browser.theme API.
Chrome does not support dynamic browser UI theming.
```

---

## 📦 Package the Extension for Firefox AMO

> Before submitting to AMO you need a .zip file of your extension.

### Prerequisites

```
Node.js installed  →  https://nodejs.org/
web-ext tool       →  npm install -g web-ext
```

### Step 1 — Use the Firefox Manifest

```bash
# Go to the v1.0.0 folder:
cd Browser-Theme-Extensions/v1.0.0

# Windows — backup Chrome manifest, swap in Firefox manifest:
copy manifest.json manifest_chrome_backup.json /Y
copy manifest_firefox.json manifest.json /Y

# Mac / Linux:
cp manifest.json manifest_chrome_backup.json
cp manifest_firefox.json manifest.json
```

### Step 2 — Validate with web-ext

```bash
# From inside v1.0.0/ folder:
web-ext lint

# You should see: "Your add-on passed validation!" with no errors.
# Fix any errors shown before proceeding.
```

### Step 3 — Create the .zip Package

```bash
# Windows PowerShell — run from INSIDE v1.0.0/:
Compress-Archive -Path * -DestinationPath ../ThemeForge-v1.0.0-firefox.zip

# OR use web-ext to build (recommended — auto excludes junk files):
web-ext build --source-dir . --artifacts-dir ../packages/
# This creates: packages/theme_forge-1.0.0.zip

# Mac / Linux:
zip -r ../ThemeForge-v1.0.0-firefox.zip . --exclude "*.DS_Store" --exclude "manifest_chrome_backup.json"
```

> ✅ You now have **ThemeForge-v1.0.0-firefox.zip** ready for AMO.

---

## 🦊 Submit to Firefox Add-ons (AMO)

> This makes your extension **publicly visible** at:
> https://addons.mozilla.org/en-US/firefox/user/20195701/

---

### Step 1 — Log in to AMO Developer Hub

```
1. Go to:
   https://addons.mozilla.org/en-US/developers/

2. Click "Log in" (top right corner)

3. Sign in with your Mozilla/Firefox Account
   (linked to profile: addons.mozilla.org/en-US/firefox/user/20195701/)

4. You are now in the AMO Developer Hub.
```

---

### Step 2 — Create a New Add-on Submission

```
1. In the Developer Hub, click:
   "Submit a New Add-on"

   Direct URL:
   https://addons.mozilla.org/en-US/developers/addon/submit/

2. On "Distribution" page — choose:
   ● "On this site"  ← SELECT THIS
     (Public listing on AMO — visible on your profile)

   (The other option "Self Distribution" creates a signed .xpi
    for manual installs, but will NOT appear on your AMO profile)

3. Click "Continue"
```

---

### Step 3 — Upload Your .zip File

```
1. Click "Select a file..."
   Upload: ThemeForge-v1.0.0-firefox.zip

2. AMO auto-validates the zip (~30 seconds)

3. If PASSED ✅  → "Your add-on passed validation!" → click Continue
   If FAILED ❌  → read the error messages, fix issues, re-zip, re-upload

4. Select compatible Firefox versions:
   Minimum Firefox version: 109.0
   Maximum: leave blank (auto)

5. Click "Continue"
```

---

### Step 4 — Fill in Listing Details

```
NAME:
  Theme Forge — Browser Theme Selector

SLUG (URL identifier — auto-filled, or set your own):
  theme-forge-browser-theme

SUMMARY (max 250 characters):
  8 premium browser themes: Cyberpunk Neon, Blackhat Hacker,
  Sci-Fi HUD, Glass HUD, Night City, PinoyUnknown, Dystopian
  & Pink Candy. Animated new tab + Firefox UI theming.

DESCRIPTION (paste this):
  Theme Forge gives you full control over your browser aesthetic.
  Choose from 8 stunning themes — each with a unique animated
  new tab page, custom scrollbars, text selection colors, and
  full Firefox browser UI theming via the official theme API.

  THEMES INCLUDED:
  ⚡ Cyberpunk Neon   — Neon-lit streets. Orbitron font. Cyan/Magenta.
  ⌨  Blackhat Hacker  — Terminal matrix. Ubuntu Mono. Green on Black.
  ◈  Sci-Fi HUD       — Starship interface. JARVIS mode. Electric Blue.
  ◇  Glass HUD        — Black transparent glassmorphism.
  ⬡  Cyberpunk HUD    — Night City neon. Orange/Yellow/Red.
  ◉  PinoyUnknown     — Filipino brand. Hot Pink / Neon Green.
  ☢  Dystopian        — Post-apocalyptic. Dark Red / Gray.
  ♡  Pink Candy        — Kawaii aesthetic. White / Hot Pink.

  FEATURES:
  • Animated new tab page (8 unique particle/canvas animations)
  • Live digital HUD clock + multi-engine search bar
  • Firefox browser toolbar/tab color theming (theme API)
  • Website CSS injection (scrollbar + text selection colors)
  • Persistent theme memory across sessions
  • Toggle: apply to websites on/off
  • Toggle: custom new tab on/off

CATEGORIES:
  ✓ Appearance

TAGS:
  theme, dark mode, cyberpunk, hacker, sci-fi, new tab,
  custom theme, night city, kawaii, pink, futuristic, orbitron

HOMEPAGE URL:
  https://github.com/unidentifiedcyberghost/Browsers-Theme-Extensions

SUPPORT EMAIL:
  (your contact email)

SUPPORT SITE:
  https://github.com/unidentifiedcyberghost/Browsers-Theme-Extensions/issues

LICENSE:
  MIT License
```

---

### Step 5 — Upload Screenshots

```
AMO requires at least 1 screenshot (recommended: 3-5).
Minimum size: 200x150px  |  Recommended: 1280x800px

RECOMMENDED SCREENSHOTS:
  1. Popup open — theme selector with all 8 cards visible
  2. Cyberpunk Neon new tab (particle grid + clock)
  3. Blackhat Hacker new tab (matrix rain)
  4. PinoyUnknown new tab (star field)
  5. Pink Candy new tab (floating hearts)

HOW TO TAKE SCREENSHOTS OF THE EXTENSION:
  Method A — Browser screenshot:
    1. Open new tab (Theme Forge active)
    2. Press F12 → DevTools
    3. Ctrl+Shift+P → type "screenshot"
    4. Select "Capture full size screenshot"
    5. Save the PNG

  Method B — Windows Snipping Tool:
    Press Win+Shift+S → select area → save as PNG
```

---

### Step 6 — Submit for Review

```
1. Review all your listing details carefully
2. Click "Submit Version for Review"
3. AMO sends you an email confirmation

REVIEW TIMELINE:
  Automatic review:  1–3 days   (most extensions)
  Manual review:     Up to 2 weeks (first-time submissions)

You will receive an email from Mozilla:
  ✅ APPROVED  → Extension is live on AMO!
  ⚠️ CHANGES NEEDED → Read feedback, fix, resubmit
```

---

### Step 7 — Extension is Live! 🎉

```
After approval, your extension will be visible at:

  YOUR PROFILE PAGE:
  https://addons.mozilla.org/en-US/firefox/user/20195701/

  DIRECT EXTENSION PAGE (auto-generated):
  https://addons.mozilla.org/en-US/firefox/addon/theme-forge/
  (exact slug = what you set in Step 4)

  USERS CAN NOW:
  ✓ Find your extension via AMO search
  ✓ See it on your public developer profile
  ✓ Install it with one click (no .zip needed)
  ✓ Auto-update when you publish new versions
```

---

## 🌐 Submit to Chrome Web Store

> Optional — distribute on the Chrome Web Store.

### Step 1 — Restore Chrome Manifest

```bash
# Windows:
copy manifest_chrome_backup.json manifest.json /Y

# Mac / Linux:
cp manifest_chrome_backup.json manifest.json
```

### Step 2 — Create Chrome .zip

```bash
# Windows PowerShell (from inside v1.0.0/):
Compress-Archive -Path * -DestinationPath ../ThemeForge-v1.0.0-chrome.zip

# Mac / Linux:
zip -r ../ThemeForge-v1.0.0-chrome.zip . --exclude "*.DS_Store" --exclude "manifest_firefox.json"
```

### Step 3 — Submit to Chrome Web Store

```
1. Go to: https://chrome.google.com/webstore/devconsole/
2. Sign in with your Google account
3. Click "New Item" (top right)
4. Upload: ThemeForge-v1.0.0-chrome.zip
5. Fill in listing details (same as AMO)
6. Add screenshots (same ones work)
7. Pay one-time developer fee: $5 USD
8. Click "Submit for Review"
9. Review: 1–3 business days
```

---

## 🔧 Troubleshooting

| Issue | Fix |
|---|---|
| Extension icon not showing in toolbar | Click 🧩 (puzzle icon) in Chrome → click the pin icon next to Theme Forge |
| New tab not changing | Make sure "Custom New Tab page" toggle is **ON** in popup |
| Firefox theme colors not applying | Ensure you're using `manifest_firefox.json` renamed to `manifest.json` |
| Fonts look wrong (not Orbitron/Ubuntu) | Requires internet connection — fonts load from Google Fonts CDN |
| AMO zip validation fails | Run `web-ext lint` first and fix all reported errors |
| Chrome rejects the manifest | Use `manifest.json` (Chrome MV3) — not the Firefox version |
| Extension disappears after Firefox restart | Expected — temporary load. Submit to AMO for permanent install |
| "Content Security Policy" error in console | Normal for extension pages — the CSP in manifest.json handles this |
| Animations not playing on new tab | Allow the page to fully load — animations start after 100ms |

---

## 🔗 Developer Links

| Platform | Link |
|---|---|
| 🎮 Google Play Store | https://play.google.com/store/apps/dev?id=7374638355121114347 |
| 🦊 Firefox Add-ons (AMO) | https://addons.mozilla.org/en-US/firefox/user/20195701/ |
| 🐙 GitHub — CyberHost | https://github.com/unidentifiedcyberghost |
| 🐙 GitHub — Brand | https://github.com/pinoyUnknown |
| 📸 Instagram | https://instagram.com/pinoyunknown |
| ▶ YouTube | https://www.youtube.com/watch?v=zrF1EoEh1-w |

---

## 📄 License

MIT License — Free to use, modify, and distribute.
© 2024 PinoyUnknown | unidentifiedcyberghost

---

*Built with ❤️ by [PinoyUnknown](https://github.com/pinoyUnknown) & [unidentifiedcyberghost](https://github.com/unidentifiedcyberghost)*