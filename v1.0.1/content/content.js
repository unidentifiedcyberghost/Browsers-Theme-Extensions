// ╔═════════════════════════════════════════════════════╗
// ║  THEME FORGE — Content Script v1.0.1               ║
// ║  by PinoyUnknown | unidentifiedcyberghost           ║
// ╚═════════════════════════════════════════════════════╝
/* global THEMES, getThemeById, tfColorToRgb, tfStorage */

const STYLE_ID = 'tf-injected-theme';
const HUD_ID = 'tf-cyber-hud';
const _rt = (typeof browser !== 'undefined') ? browser.runtime : chrome.runtime;
let hudHostname = 'PinoyUnknown';
let hudRoot;
let hudExpiresAt = 0;
let searchHudRemovalTimer = 0;

// Inject CSS variables into the page :root
function injectTheme(theme) {
  let el = document.getElementById(STYLE_ID);
  if (!el) { el = document.createElement('style'); el.id = STYLE_ID; (document.head||document.documentElement).appendChild(el); }
  const vars = Object.entries(theme.vars).map(([k,v]) => k + ':' + v + ';').join('\n  ');
  const ac   = theme.vars['--tf-accent'];
  const rgb  = tfColorToRgb(ac);
  el.textContent = `
:root {
  ${vars}
  --tf-ac-rgb: ${rgb};
}
/* Themed scrollbar */
::-webkit-scrollbar         { width:6px; height:6px; }
::-webkit-scrollbar-track   { background:var(--tf-bg,#0d0d0d); }
::-webkit-scrollbar-thumb   { background:var(--tf-accent,#00ffff); border-radius:3px; }
::-webkit-scrollbar-thumb:hover { background:var(--tf-accent2,#ff00ff); }
::selection { background:rgba(var(--tf-ac-rgb),0.35); color:var(--tf-text,#fff); }

/* Search Results Themed Styling */
body, html { background:var(--tf-bg,#0d0d0d) !important; color:var(--tf-text,#e0e0ff) !important; }

/* Google Search Results */
.g, .Gd5eun, .yuRUbf { background:rgba(0,0,0,0.15) !important; }
.g { border:1px solid var(--tf-border,rgba(0,255,255,0.25)) !important; border-radius:4px !important; padding:8px !important; }
.yuRUbf>a { color:var(--tf-accent,#00ffff) !important; }
.yuRUbf>a:visited { color:var(--tf-accent2,#ff00ff) !important; }
.VwiC3b { color:var(--tf-text2,#6666aa) !important; }
.s { color:var(--tf-text,#e0e0ff) !important; }

/* Bing Search Results */
.b_algo { background:rgba(0,0,0,0.15) !important; border:1px solid var(--tf-border,rgba(0,255,255,0.25)) !important; padding:12px !important; border-radius:4px !important; }
.b_algo h2 { color:var(--tf-accent,#00ffff) !important; }
.b_algo h2 a { color:var(--tf-accent,#00ffff) !important; }
.b_algo p { color:var(--tf-text,#e0e0ff) !important; }
.b_adurl { color:var(--tf-text2,#6666aa) !important; }

/* DuckDuckGo Results */
.results .result { background:rgba(0,0,0,0.15) !important; border:1px solid var(--tf-border,rgba(0,255,255,0.25)) !important; padding:10px !important; border-radius:4px !important; }
.results .result .result__title { color:var(--tf-accent,#00ffff) !important; }
.results .result .result__url { color:var(--tf-text2,#6666aa) !important; }
.results .result .result__snippet { color:var(--tf-text,#e0e0ff) !important; }

/* YouTube Results */
ytd-video-renderer, ytd-grid-video-renderer { background:rgba(0,0,0,0.15) !important; border:1px solid var(--tf-border,rgba(0,255,255,0.25)) !important; padding:8px !important; border-radius:4px !important; }
yt-formatted-string#video-title { color:var(--tf-accent,#00ffff) !important; }
`;
  renderSiteHud(theme);
}

function renderSiteHud(theme) {
  let host = document.getElementById(HUD_ID);
  if (!host) {
    host = document.createElement('div');
    host.id = HUD_ID;
    host.setAttribute('aria-hidden', 'true');
    hudRoot = host.attachShadow({ mode:'closed' });
    document.documentElement.appendChild(host);
  }

  const pageHost = location.hostname || 'local-page';
  const searchParams = new URL(location.href).searchParams;
  const searchText = /(^|\.)google\.|(^|\.)bing\.|duckduckgo\.|youtube\.com$/i.test(pageHost)
    ? (searchParams.get('q') || searchParams.get('search_query') || '')
    : '';
  const terminalLine = searchText
    ? 'search "' + searchText.slice(0, 120) + '"'
    : 'view ' + pageHost;
  const accent = theme.vars['--tf-accent'];
  const accent2 = theme.vars['--tf-accent2'];
  const wallpaperUrl = _rt.getURL(theme.wallpaper || 'assets/cyber-city.svg');
  if (!hudExpiresAt) hudExpiresAt = Date.now() + 3000;
  const remaining = hudExpiresAt - Date.now();
  if (remaining <= 0) {
    clearTimeout(searchHudRemovalTimer);
    document.getElementById(HUD_ID)?.remove();
    return;
  }
  clearTimeout(searchHudRemovalTimer);
  searchHudRemovalTimer = setTimeout(() => {
    document.getElementById(HUD_ID)?.remove();
    hudRoot = undefined;
  }, remaining);
  host.style.opacity = '1';
  host.style.transition = `opacity ${remaining}ms linear`;
  hudRoot.innerHTML = `
    <style>
      :host { all:initial; position:fixed; inset:0; z-index:2147483647; display:block; pointer-events:none; }
      .ambient {
        position:fixed; inset:0; opacity:.055; mix-blend-mode:screen;
        background:linear-gradient(180deg,${accent} 0%,transparent 28%,transparent 75%,${accent2} 100%),url("${wallpaperUrl}") center/cover;
        animation:ambient-drift 36s ease-in-out infinite alternate;
      }
      .terminal {
        position:fixed; top:10px; right:12px; max-width:min(420px,calc(100vw - 24px));
        overflow:hidden; padding:8px 11px;
        border:1px solid ${accent}; border-radius:6px;
        background:rgba(4,8,18,.82); box-shadow:0 0 18px ${accent};
        color:${accent}; font:11px/1.5 "Ubuntu Mono",Consolas,monospace;
        letter-spacing:.35px; backdrop-filter:blur(8px);
        animation:terminal-glow 3.4s ease-in-out infinite;
      }
      .status { display:flex; justify-content:space-between; gap:12px; color:${accent2}; font-size:9px; }
      .prompt { color:${accent}; }
      .page { width:0; max-width:calc(100vw - 48px); overflow:hidden; white-space:nowrap; }
      .secure { margin-top:2px; color:${accent}; opacity:.82; }
      .cursor { display:inline-block; width:6px; height:11px; margin-left:4px; vertical-align:-2px; background:${accent}; animation:cursor-blink 1s steps(2,start) infinite; }
      @keyframes cursor-blink { to { visibility:hidden; } }
      @keyframes terminal-glow { 50% { box-shadow:0 0 26px ${accent}; border-color:${accent2}; } }
      @keyframes ambient-drift { from { transform:scale(1.02) translateX(-.3%); } to { transform:scale(1.06) translateX(.3%); } }
      @media (prefers-reduced-motion:reduce) { *,*::before,*::after { animation-duration:.01ms !important; animation-iteration-count:1 !important; } }
    </style>
    <div class="ambient"></div>
    <div class="terminal">
      <div class="status"><span>ACCESS MODE // HUD CYBERSECURITY THEME -</span><span>SESSION ACTIVE</span></div>
      <div class="page"><span class="prompt">root@CyberSecurity:~$</span> ${escapeText(terminalLine)}<span class="cursor"></span></div>
      ${searchText ? '<div class="secure">root@CyberSecurity:~$ secured and safe...</div>' : ''}
      ${searchText ? '<div class="secure">root@CyberSecurity:~$ Connection Secured...</div>' : ''}
    </div>`;
  const terminal = hudRoot.querySelector('.terminal');
  terminal.style.opacity = String(Math.min(1, remaining / 3000));
  terminal.style.transition = `opacity ${remaining}ms linear`;
  requestAnimationFrame(() => { host.style.opacity = '0'; });
  const command = hudRoot.querySelector('.page');
  const targetWidth = command.scrollWidth;
  command.style.transition = `width ${Math.min(1800, Math.max(350, targetWidth * 12))}ms steps(${Math.max(1, terminalLine.length)},end)`;
  requestAnimationFrame(() => { command.style.width = targetWidth + 'px'; });
}

function escapeText(value) {
  return value.replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
}

function updateHudHostname(value) {
  if (!/^[a-zA-Z0-9_-]{1,24}$/.test(value || '')) return;
  hudHostname = value;
  const active = THEMES.find(theme => document.documentElement.style.getPropertyValue('--tf-accent') === theme.vars['--tf-accent']);
  if (active) renderSiteHud(active);
}

function removeTheme() {
  const el = document.getElementById(STYLE_ID);
  if (el) el.remove();
  document.getElementById(HUD_ID)?.remove();
  hudRoot = undefined;
}

// Listen for messages from popup/background
_rt.onMessage.addListener((msg) => {
  if (msg.type === 'TF_THEME_CHANGED') {
    tfStorage.get(['tf_inject_sites']).then(d => {
      if (d.tf_inject_sites !== false) {
        const t = getThemeById(msg.themeId);
        if (t) injectTheme(t);
      }
    });
  }
  if (msg.type === 'TF_TOGGLE_INJECT') {
    if (msg.enabled) {
      tfStorage.get(['tf_active_theme']).then(d => {
        const t = getThemeById(d.tf_active_theme || 'cyberpunk-neon');
        injectTheme(t);
      });
    } else {
      removeTheme();
    }
  }
  if (msg.type === 'TF_HUD_HOST_CHANGED') updateHudHostname(msg.hostname);
});

const storageApi = typeof browser !== 'undefined' ? browser.storage : chrome.storage;
storageApi.onChanged.addListener((changes, areaName) => {
  if (areaName !== 'local' || !changes.tf_active_theme) return;
  const theme = getThemeById(changes.tf_active_theme.newValue);
  tfStorage.get(['tf_inject_sites']).then(data => {
    if (data.tf_inject_sites !== false) injectTheme(theme);
  }).catch(error => {
    console.error('[CyberSecurity Theme] Could not apply the updated site theme.', error);
  });
});

// Auto-apply on page load
tfStorage.get(['tf_active_theme','tf_inject_sites','tf_hud_hostname']).then(data => {
  hudHostname = data.tf_hud_hostname || 'PinoyUnknown';
  if (data.tf_inject_sites !== false) {
    const t = getThemeById(data.tf_active_theme || 'cyberpunk-neon');
    if (t) injectTheme(t);
  }
});
