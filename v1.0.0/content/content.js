// ╔═════════════════════════════════════════════════════╗
// ║  THEME FORGE — Content Script v1.0.0               ║
// ║  by PinoyUnknown | unidentifiedcyberghost           ║
// ╚═════════════════════════════════════════════════════╝
/* global THEMES, getThemeById, tfColorToRgb, tfStorage */

const STYLE_ID = 'tf-injected-theme';

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
`;
}

function removeTheme() {
  const el = document.getElementById(STYLE_ID);
  if (el) el.remove();
}

// Listen for messages from popup/background
const _rt = (typeof browser !== 'undefined') ? browser.runtime : chrome.runtime;
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
});

// Auto-apply on page load
tfStorage.get(['tf_active_theme','tf_inject_sites']).then(data => {
  if (data.tf_inject_sites !== false) {
    const t = getThemeById(data.tf_active_theme || 'cyberpunk-neon');
    if (t) injectTheme(t);
  }
});
