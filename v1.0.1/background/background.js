// ╔═════════════════════════════════════════════════════╗
// ║  THEME FORGE — Background / Service Worker v1.0.1  ║
// ║  by PinoyUnknown | unidentifiedcyberghost           ║
// ╚═════════════════════════════════════════════════════╝

const isFirefox = typeof browser !== 'undefined';
const _api      = isFirefox ? browser : chrome;

// On install: set defaults
_api.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    const store = isFirefox ? browser.storage.local : chrome.storage.local;
    store.set({
      tf_active_theme:  'cyberpunk-neon',
      tf_inject_sites:  true,
      tf_custom_newtab: true,
    });
    console.log('[Theme Forge] Installed. Default theme: cyberpunk-neon');
  }
});

// Broadcast theme change to all tabs
_api.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'TF_BROADCAST_THEME') {
    _api.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        if (tab.id !== sender.tab?.id) {
          try { _api.tabs.sendMessage(tab.id, { type:'TF_THEME_CHANGED', themeId: msg.themeId }); }
          catch (_) {}
        }
      });
    });
  }
  return false;
});
