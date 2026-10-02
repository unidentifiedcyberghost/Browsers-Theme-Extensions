// ╔═════════════════════════════════════════════════════╗
// ║  THEME FORGE — Popup Script v1.0.1                 ║
// ║  by PinoyUnknown | unidentifiedcyberghost           ║
// ╚═════════════════════════════════════════════════════╝
/* global THEMES, tfColorToRgb, tfStorage */

let activeId = 'cyberpunk-neon';

// ── Apply accent color to popup chrome ────────────────
function setPopupAccent(theme) {
  const ac  = theme.vars['--tf-accent'];
  const rgb = tfColorToRgb(ac);
  document.documentElement.style.setProperty('--ac', ac);
  document.documentElement.style.setProperty('--ac-rgb', rgb);
}

// ── Draw mini-preview on a canvas ─────────────────────
function drawPreview(canvas, theme) {
  const ctx = canvas.getContext('2d');
  const [c1, c2, c3, c4] = theme.preview;
  const W = canvas.width, H = canvas.height;

  // Background
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, c1); g.addColorStop(0.6, c4 || c1); g.addColorStop(1, c1);
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

  if (theme.particle === 'matrix') {
    ctx.fillStyle = c2; ctx.font = '7px monospace'; ctx.globalAlpha = 0.55;
    const ch = '10';
    for (let x = 4; x < W; x += 13)
      for (let y = 10; y < H; y += 13)
        ctx.fillText(ch[Math.floor(Math.random()*2)], x, y);
  } else if (theme.particle === 'hearts') {
    ctx.globalAlpha = 0.4;
    [c2, c3].forEach((col, i) => {
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(30 + i*60, H/2, 10, 0, Math.PI * 2);
      ctx.fill();
    });
  } else {
    // HUD grid
    ctx.globalAlpha = 0.25; ctx.strokeStyle = c2; ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += 18) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = 0; y < H; y += 13) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    // Accent bar
    ctx.globalAlpha = 0.18; ctx.fillStyle = c2;
    ctx.fillRect(W - 28, 0, 28, H);
    // Diagonal accent line
    ctx.globalAlpha = 0.6; ctx.strokeStyle = c3 || c2; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(W - 28, 0); ctx.lineTo(W, H); ctx.stroke();
  }

  // Color swatches bottom-left
  ctx.globalAlpha = 1;
  theme.preview.forEach((col, i) => {
    ctx.beginPath();
    ctx.arc(9 + i * 14, H - 8, 4, 0, Math.PI * 2);
    ctx.fillStyle = col.startsWith('rgba') ? '#00ffff' : col;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 0.5; ctx.stroke();
  });
}

// ── Render all theme cards ────────────────────────────
function renderGrid(currentId) {
  const grid = document.getElementById('themesGrid');
  while (grid.firstChild) grid.removeChild(grid.firstChild);

  THEMES.forEach(theme => {
    const isActive = theme.id === currentId;
    const ac  = theme.vars['--tf-accent'];
    const rgb = tfColorToRgb(ac);

    const card = document.createElement('div');
    card.className = 'theme-card' + (isActive ? ' is-active' : '');
    card.style.setProperty('--card-ac',  ac);
    card.style.setProperty('--card-rgb', rgb);

    // Safe DOM construction — no innerHTML
    if (isActive) {
      const badge = document.createElement('div');
      badge.className = 'active-badge-card';
      badge.textContent = 'ACTIVE';
      card.appendChild(badge);
    }
    const preview = document.createElement('div');
    preview.className = 'card-preview';
    const canvas = document.createElement('canvas');
    canvas.className = 'card-canvas';
    canvas.width = 180; canvas.height = 58;
    preview.appendChild(canvas);
    card.appendChild(preview);

    const body = document.createElement('div');
    body.className = 'card-body';

    const nameEl = document.createElement('div');
    nameEl.className = 'card-name';
    nameEl.textContent = theme.name;
    body.appendChild(nameEl);

    const descEl = document.createElement('div');
    descEl.className = 'card-desc';
    descEl.textContent = theme.description;
    body.appendChild(descEl);

    const tagsEl = document.createElement('div');
    tagsEl.className = 'card-tags';
    theme.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      tagsEl.appendChild(span);
    });
    body.appendChild(tagsEl);

    const btn = document.createElement('button');
    btn.className = 'card-btn' + (isActive ? ' btn-active' : '');
    btn.dataset.id = theme.id;
    btn.textContent = isActive ? 'ACTIVE' : 'APPLY';
    body.appendChild(btn);
    card.appendChild(body);

    grid.appendChild(card);
    drawPreview(card.querySelector('.card-canvas'), theme);

    card.querySelector('.card-btn').addEventListener('click', e => {
      e.stopPropagation();
      applyTheme(theme.id);
    });
  });

  // Update header badge
  const t = THEMES.find(x => x.id === currentId);
  if (t) {
    document.getElementById('activeName').textContent = t.name;
    setPopupAccent(t);
  }
}

// ── Apply a theme ─────────────────────────────────────
async function applyTheme(id) {
  activeId = id;
  await tfStorage.set({ tf_active_theme: id });

  // Notify content scripts
  try {
    const api = (typeof browser !== 'undefined') ? browser : chrome;
    const tabs = await new Promise(res => api.tabs.query({}, res));
    tabs.forEach(tab => {
      try { api.tabs.sendMessage(tab.id, { type:'TF_THEME_CHANGED', themeId:id }); } catch(_){}
    });
  } catch(_){}

  // Firefox browser UI theme
  if (typeof browser !== 'undefined' && browser.theme) {
    const t = THEMES.find(x => x.id === id);
    if (t && t.firefox) browser.theme.update({ colors: t.firefox.colors });
  }

  renderGrid(id);
}

// ── Toggles ───────────────────────────────────────────
async function setupToggles() {
  const data = await tfStorage.get(['tf_inject_sites','tf_hud_hostname']);
  const iT = document.getElementById('injectToggle');
  const ipToggle = document.getElementById('publicIpToggle');
  const ipStatus = document.getElementById('publicIpStatus');
  const hostInput = document.getElementById('hudHostInput');
  const hostSave = document.getElementById('hudHostSave');
  const hostStatus = document.getElementById('hudHostStatus');

  iT.checked = data.tf_inject_sites  !== false;
  ipToggle.checked = false;
  hostInput.value = data.tf_hud_hostname || 'PinoyUnknown';
  const ipData = await tfStorage.get(['tf_public_ip_lookup_enabled']);
  ipToggle.checked = ipData.tf_public_ip_lookup_enabled === true;
  if (ipToggle.checked) ipStatus.textContent = 'Public IP lookup is enabled; api.ipify.org receives the request IP.';

  iT.addEventListener('change', () => {
    tfStorage.set({ tf_inject_sites: iT.checked });
    try {
      const api = (typeof browser!=='undefined') ? browser : chrome;
      api.tabs.query({}, tabs => tabs.forEach(tab => {
        try { api.tabs.sendMessage(tab.id,{type:'TF_TOGGLE_INJECT',enabled:iT.checked}); } catch(_){}
      }));
    } catch(_){}
  });
  ipToggle.addEventListener('change', async () => {
    const enabled = ipToggle.checked;
    const api = (typeof browser !== 'undefined') ? browser : chrome;
    ipToggle.disabled = true;
    try {
      if (enabled) {
        const granted = typeof browser !== 'undefined'
          ? await browser.permissions.request({ origins: ['https://api.ipify.org/*'] })
          : await new Promise((resolve, reject) => chrome.permissions.request(
            { origins: ['https://api.ipify.org/*'] },
            result => {
              const error = chrome.runtime.lastError;
              if (error) reject(new Error(error.message));
              else resolve(result);
            }
          ));
        if (!granted) throw new Error('The ipify permission was not granted.');
        await tfStorage.set({ tf_public_ip_lookup_enabled: true });
        ipStatus.textContent = 'Enabled. api.ipify.org receives your public IP request.';
      } else {
        await tfStorage.set({ tf_public_ip_lookup_enabled: false });
        try {
          const removed = typeof browser !== 'undefined'
            ? await browser.permissions.remove({ origins: ['https://api.ipify.org/*'] })
            : await new Promise((resolve, reject) => chrome.permissions.remove(
              { origins: ['https://api.ipify.org/*'] },
              result => {
                const error = chrome.runtime.lastError;
                if (error) reject(new Error(error.message));
                else resolve(result);
              }
            ));
          ipStatus.textContent = removed
            ? 'Disabled. The optional ipify permission was removed.'
            : 'Disabled. Public IP lookup is off.';
        } catch (error) {
          console.warn('[CyberSecurity Theme] Could not remove the optional ipify permission.', error);
          ipStatus.textContent = 'Disabled. Public lookup is off, but the browser permission remains granted.';
        }
      }
    } catch (error) {
      ipToggle.checked = !enabled;
      ipStatus.textContent = enabled ? 'Not enabled. Grant the optional ipify permission to show the public IP.' : 'Could not update the public IP setting.';
      if (enabled) console.warn('[CyberSecurity Theme] Public IP lookup was not enabled.', error);
    } finally {
      ipToggle.disabled = false;
    }
  });
  hostSave.addEventListener('click', async () => {
    const hostname = hostInput.value.trim();
    if (!/^[a-zA-Z0-9_-]{1,24}$/.test(hostname)) {
      hostStatus.textContent = 'Use 1–24 letters, numbers, hyphens, or underscores.';
      return;
    }
    await tfStorage.set({ tf_hud_hostname: hostname });
    hostStatus.textContent = 'Display name saved.';
    const api = (typeof browser !== 'undefined') ? browser : chrome;
    api.tabs.query({}, tabs => tabs.forEach(tab => {
      try { api.tabs.sendMessage(tab.id, { type:'TF_HUD_HOST_CHANGED', hostname }); } catch(_) {}
    }));
  });
}

// ── Init ──────────────────────────────────────────────
(async () => {
  const data = await tfStorage.get(['tf_active_theme']);
  activeId = data.tf_active_theme || 'cyberpunk-neon';
  renderGrid(activeId);
  setupToggles();
})();
