/* global browser, chrome */

const IPIFY_ORIGIN = 'https://api.ipify.org/*';
const isFirefox = typeof browser !== 'undefined';
const api = isFirefox ? browser : chrome;
const enableButton = document.getElementById('enableLookup');
const declineButton = document.getElementById('declineLookup');
const status = document.getElementById('consentStatus');
let navigationTimer;

function requestIpifyPermission() {
  if (isFirefox) return browser.permissions.request({ origins: [IPIFY_ORIGIN] });

  return new Promise((resolve, reject) => {
    chrome.permissions.request({ origins: [IPIFY_ORIGIN] }, granted => {
      const error = chrome.runtime.lastError;
      if (error) reject(new Error(error.message));
      else resolve(granted);
    });
  });
}

async function saveChoice(enabled) {
  clearTimeout(navigationTimer);
  enableButton.disabled = true;
  declineButton.disabled = true;

  try {
    if (enabled) {
      const granted = await requestIpifyPermission();
      if (!granted) {
        status.textContent = 'Permission was not granted. Public IP lookup remains off.';
        return;
      }
    } else {
      const hasPermission = await api.permissions.contains({ origins: [IPIFY_ORIGIN] });
      if (hasPermission) await api.permissions.remove({ origins: [IPIFY_ORIGIN] });
    }

    await api.storage.local.set({ tf_public_ip_lookup_enabled: enabled });
    status.textContent = enabled
      ? 'Public IP lookup enabled. Opening your new tab…'
      : 'Public IP lookup declined. Opening your new tab…';
    navigationTimer = setTimeout(() => {
      window.location.assign(api.runtime.getURL('newtab/newtab.html'));
    }, 1200);
  } catch (error) {
    console.error('[CyberSecurity Theme] Could not save public IP consent.', error);
    status.textContent = 'Could not save this choice. Please retry or close this tab to keep lookup off.';
  } finally {
    enableButton.disabled = false;
    declineButton.disabled = false;
  }
}

enableButton.addEventListener('click', () => { void saveChoice(true); });
declineButton.addEventListener('click', () => { void saveChoice(false); });

api.storage.local.get(['tf_public_ip_lookup_enabled']).then(data => {
  if (data.tf_public_ip_lookup_enabled === true) {
    status.textContent = 'Public IP lookup is currently enabled. Choose decline to turn it off.';
  }
}).catch(error => {
  console.error('[CyberSecurity Theme] Could not read IP lookup preference.', error);
  status.textContent = 'Could not read the current setting. You can still decline public lookup.';
});
