// ╔═════════════════════════════════════════════════════╗
// ║  THEME FORGE — New Tab Script v1.0.1               ║
// ║  by PinoyUnknown | unidentifiedcyberghost           ║
// ╚═════════════════════════════════════════════════════╝
/* global THEMES, getThemeById, tfColorToRgb, tfStorage */

const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');
let   W = canvas.width  = window.innerWidth;
let   H = canvas.height = window.innerHeight;
let   currentTheme = THEMES[0];
let   animId;
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let   terminalTypingTimer;
let   terminalTypingToken = 0;

function setHudHostname(value) {
  const hostname = /^[a-zA-Z0-9_-]{1,24}$/.test(value || '') ? value : 'PinoyUnknown';
  document.getElementById('terminalHeader').textContent = 'root@' + hostname + ':~$';
  document.getElementById('terminalPrompt').textContent = 'root@' + hostname + ':~$';
}

window.addEventListener('resize', () => {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
});

// ── Apply CSS vars from theme ─────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  const root = document.documentElement.style;
  Object.entries(theme.vars).forEach(([k,v]) => root.setProperty(k.replace('--tf-','--'), v));
  root.setProperty('--ac-rgb', tfColorToRgb(theme.vars['--tf-accent']));
  document.getElementById('tbTheme').textContent = theme.name;
  document.getElementById('hudProfile').textContent = theme.name.toUpperCase();
  cancelAnimationFrame(animId);
  startParticles(theme.particle);
}

// ── Clock & Date ──────────────────────────────────────
function updateClock() {
  const now  = new Date();
  const h    = String(now.getHours()).padStart(2,'0');
  const m    = String(now.getMinutes()).padStart(2,'0');
  const s    = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clock').textContent = h+':'+m+':'+s;

  const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('date').textContent = days[now.getDay()]+', '+months[now.getMonth()]+' '+now.getDate()+', '+now.getFullYear();

  const tzStr = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
  document.getElementById('tz').textContent = tzStr;

  const hr = now.getHours();
  const gr = hr < 5 ? 'Good Night' : hr < 12 ? 'Good Morning' : hr < 17 ? 'Good Afternoon' : hr < 21 ? 'Good Evening' : 'Good Night';
  document.getElementById('greeting').textContent = gr + ', Explorer';
}

const WORLD_CLOCKS = [
  { label:'SOUTH KOREA', zone:'Asia/Seoul' },
  { label:'JAPAN', zone:'Asia/Tokyo' },
  { label:'UAE · DUBAI', zone:'Asia/Dubai' },
  { label:'USA', zone:'America/New_York' },
  { label:'CHINA', zone:'Asia/Shanghai' },
  { label:'MALAYSIA', zone:'Asia/Kuala_Lumpur' },
  { label:'THAILAND', zone:'Asia/Bangkok' },
  { label:'INDONESIA', zone:'Asia/Jakarta' },
  { label:'INDIA', zone:'Asia/Kolkata' },
  { label:'CAMBODIA', zone:'Asia/Phnom_Penh' },
  { label:'COLOMBIA', zone:'America/Bogota' },
  { label:'TAIWAN', zone:'Asia/Taipei' },
  { label:'PHILIPPINES', zone:'Asia/Manila' },
  { label:'AUSTRALIA', zone:'Australia/Sydney' },
  { label:'SPAIN', zone:'Europe/Madrid' },
  { label:'ITALY', zone:'Europe/Rome' },
  { label:'UK · LONDON', zone:'Europe/London' },
];

function initWorldClocks() {
  const list = document.getElementById('worldClockList');
  if (!list) return;

  const entries = WORLD_CLOCKS.map(({ label, zone }) => {
    const row = document.createElement('div');
    row.className = 'world-clock-row';
    row.dataset.zone = zone;

    const city = document.createElement('span');
    city.className = 'world-clock-city';
    city.textContent = label;

    const time = document.createElement('time');
    time.className = 'world-clock-time';
    time.dateTime = '';

    const date = document.createElement('span');
    date.className = 'world-clock-date';

    row.append(city, time, date);
    list.appendChild(row);
    return {
      time,
      date,
      timeFormatter: new Intl.DateTimeFormat('en-GB', {
        timeZone: zone, hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23',
      }),
      dateFormatter: new Intl.DateTimeFormat('en-US', {
        timeZone: zone, weekday:'short', month:'short', day:'numeric',
      }),
    };
  });

  function render() {
    const now = new Date();
    entries.forEach(({ time, date, timeFormatter, dateFormatter }) => {
      time.dateTime = now.toISOString();
      time.textContent = timeFormatter.format(now);
      date.textContent = dateFormatter.format(now);
    });
  }

  render();
  setInterval(render, 1000);
}

initWorldClocks();

function updateHudClock() {
  updateClock();
  const time = document.getElementById('clock').textContent;
  const previousCommand = document.getElementById('terminalQuery').dataset.query || '';
  if (!previousCommand) document.getElementById('terminalQuery').textContent = 'watch -n 1 local_hud';
  document.getElementById('terminalQuery').dataset.time = time;
}
setInterval(updateHudClock, 1000);
updateClock();

function animateTerminalQuery(value) {
  const output = document.getElementById('terminalQuery');
  const query = value.trim().slice(0, 160);
  const token = ++terminalTypingToken;
  clearTimeout(terminalTypingTimer);
  output.dataset.query = query;
  output.textContent = '';

  if (!query) {
    output.textContent = 'watch -n 1 local_hud';
    return;
  }

  let position = 0;
  const typeNextCharacter = () => {
    if (token !== terminalTypingToken) return;
    output.textContent = query.slice(0, ++position);
    if (position < query.length) terminalTypingTimer = setTimeout(typeNextCharacter, 18);
  };
  typeNextCharacter();
}

document.getElementById('searchInput').addEventListener('input', event => {
  animateTerminalQuery(event.currentTarget.value);
});

// ── Currency Ticker ───────────────────────────────────
function initCurrencyTicker() {
  const tickerEl = document.getElementById('currencyTicker');
  if (!tickerEl) return;

  const apiUrl = 'https://open.er-api.com/v6/latest/USD';
  const retryDelayMs = 15 * 60 * 1000;
  const defaultRefreshMs = 6 * 60 * 60 * 1000;
  let refreshTimer;

  function createSequence(rates, updatedAt) {
    const sequence = document.createElement('div');
    sequence.className = 'currency-sequence';

    rates.forEach(([code, rate]) => {
      const pair = document.createElement('span');
      pair.className = 'ticker-pair';
      pair.textContent = `USD/${code} ${new Intl.NumberFormat(undefined, { maximumSignificantDigits: 7 }).format(rate)}`;
      sequence.append(pair);
    });

    const source = document.createElement('span');
    source.className = 'ticker-source';
    source.textContent = `DAILY REFERENCE · SOURCE UPDATED ${updatedAt} · NOT LIVE TRADING DATA`;
    sequence.append(source);
    return sequence;
  }

  function scheduleRefresh(delay) {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(fetchRates, delay);
  }

  async function fetchRates() {
    try {
      const resp = await fetch(apiUrl, { cache: 'no-store' });
      if (!resp.ok) throw new Error(`Rates request failed (${resp.status})`);

      const data = await resp.json();
      if (data.result !== 'success' || data.base_code !== 'USD' || !data.rates || typeof data.rates !== 'object') {
        throw new Error('Currency provider returned an invalid response');
      }

      const rates = Object.entries(data.rates)
        .filter(([code, rate]) => code !== 'USD' && /^[A-Z]{3}$/.test(code) && typeof rate === 'number' && Number.isFinite(rate) && rate > 0)
        .sort(([left], [right]) => left.localeCompare(right));
      if (rates.length === 0) throw new Error('Currency provider returned no valid rates');

      const updateTimestamp = Number(data.time_last_update_unix);
      if (!Number.isFinite(updateTimestamp) || updateTimestamp <= 0) {
        throw new Error('Currency provider did not include a valid update time');
      }
      const updatedAt = new Date(updateTimestamp * 1000).toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC');
      const track = document.createElement('div');
      track.className = 'currency-track';
      const sequence = createSequence(rates, updatedAt);
      track.append(sequence, sequence.cloneNode(true));
      tickerEl.replaceChildren(track);
      track.style.setProperty('--ticker-duration', `${Math.max(45, Math.ceil(sequence.scrollWidth / 45))}s`);

      const nextUpdate = Number(data.time_next_update_unix);
      const nextUpdateDelay = Number.isFinite(nextUpdate) && nextUpdate > 0
        ? Math.max(5 * 60 * 1000, (nextUpdate * 1000) - Date.now() + 30 * 1000)
        : defaultRefreshMs;
      scheduleRefresh(nextUpdateDelay);
    } catch (error) {
      console.warn('[CyberSecurity Theme] Currency rates unavailable:', error);
      tickerEl.textContent = 'Daily currency reference rates unavailable; retrying shortly';
      scheduleRefresh(retryDelayMs);
    }
  }

  fetchRates();
}
initCurrencyTicker();

// ── Saved browser bookmarks ───────────────────────────
function readBookmarkTree() {
  if (typeof browser !== 'undefined') return browser.bookmarks.getTree();

  return new Promise((resolve, reject) => {
    chrome.bookmarks.getTree(tree => {
      const error = chrome.runtime.lastError;
      if (error) reject(new Error(error.message));
      else resolve(tree);
    });
  });
}

function collectBookmarks(nodes, results = []) {
  nodes.forEach(node => {
    if (node.url) {
      try {
        const url = new URL(node.url);
        if (url.protocol === 'https:' || url.protocol === 'http:') {
          results.push({ title: node.title || url.hostname, url: url.href, dateAdded: node.dateAdded || 0 });
        }
      } catch (error) {
        console.warn('[Theme Forge] Skipping invalid bookmark URL.', error);
      }
    }
    if (node.children) collectBookmarks(node.children, results);
  });
  return results;
}

function renderBookmarks(bookmarks) {
  const list = document.getElementById('bookmarksList');
  list.replaceChildren();

  if (bookmarks.length === 0) {
    const empty = document.createElement('span');
    empty.className = 'bookmarks-state';
    empty.textContent = 'No saved website bookmarks found.';
    list.appendChild(empty);
    return;
  }

  bookmarks
    .sort((a, b) => b.dateAdded - a.dateAdded)
    .slice(0, 8)
    .forEach(bookmark => {
      const link = document.createElement('a');
      link.className = 'bookmark-link';
      link.href = bookmark.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = bookmark.title;

      const icon = document.createElement('span');
      icon.className = 'bookmark-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = bookmark.title.trim().charAt(0).toUpperCase() || '•';

      const name = document.createElement('span');
      name.className = 'bookmark-name';
      name.textContent = bookmark.title;

      link.append(icon, name);
      list.appendChild(link);
    });
}

async function loadBookmarks() {
  try {
    const tree = await readBookmarkTree();
    renderBookmarks(collectBookmarks(tree));
  } catch (error) {
    console.error('[Theme Forge] Could not load saved bookmarks.', error);
    const list = document.getElementById('bookmarksList');
    list.replaceChildren();
    const message = document.createElement('span');
    message.className = 'bookmarks-state';
    message.textContent = 'Could not load bookmarks. Check extension permissions.';
    list.appendChild(message);
  }
}
loadBookmarks();

// ── Privacy-safe local network status ──────────────────
function updateNetworkStatus() {
  const status = document.getElementById('networkStatus');
  const type = document.getElementById('networkType');
  const online = navigator.onLine;
  status.textContent = online ? 'ONLINE' : 'OFFLINE';
  status.classList.toggle('is-offline', !online);

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const reportedType = connection && (connection.type || connection.effectiveType);
  type.textContent = reportedType ? reportedType.toUpperCase() : 'NOT REPORTED';
}

window.addEventListener('online', updateNetworkStatus);
let publicIpRequestToken = 0;
let publicIpRefreshRequested = false;
window.addEventListener('offline', () => {
  publicIpRequestToken += 1;
  updateNetworkStatus();
  setPublicIp('OFFLINE');
});
window.addEventListener('online', () => { void updatePublicIp(); });
const networkConnection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (networkConnection && typeof networkConnection.addEventListener === 'function') {
  networkConnection.addEventListener('change', updateNetworkStatus);
}
updateNetworkStatus();

function isValidIpAddress(value) {
  if (typeof value !== 'string') return false;
  const address = value.trim();
  const octets = address.split('.');
  if (octets.length === 4 && octets.every(part => /^\d{1,3}$/.test(part) && Number(part) <= 255)) {
    return true;
  }
  if (!address.includes(':') || !/^[\da-f:.]+$/i.test(address)) return false;
  try {
    new URL(`http://[${address}]/`);
    return true;
  } catch {
    return false;
  }
}

function setPublicIp(value) {
  document.getElementById('publicIp').textContent = value;
  document.getElementById('globePublicIp').textContent = value;
  document.getElementById('publicIp').title = value;
}

async function updatePublicIp() {
  const publicIp = document.getElementById('publicIp');
  if (publicIp.dataset.loading === 'true') {
    publicIpRefreshRequested = true;
    return;
  }
  if (!navigator.onLine) {
    setPublicIp('OFFLINE');
    return;
  }

  publicIp.dataset.loading = 'true';
  publicIpRefreshRequested = false;
  const requestToken = ++publicIpRequestToken;
  try {
    const preferences = await tfStorage.get(['tf_public_ip_lookup_enabled']);
    if (requestToken !== publicIpRequestToken) return;
    if (preferences.tf_public_ip_lookup_enabled !== true) {
      setPublicIp('OPT-IN REQUIRED');
      return;
    }
    const permitted = typeof browser !== 'undefined'
      ? await browser.permissions.contains({ origins: ['https://api.ipify.org/*'] })
      : await new Promise(resolve => chrome.permissions.contains(
        { origins: ['https://api.ipify.org/*'] },
          granted => {
            const error = chrome.runtime.lastError;
            if (error) {
              console.warn('[CyberSecurity Theme] Could not check ipify permission.', error.message);
              resolve(false);
            } else resolve(granted);
          }
        ));
    if (requestToken !== publicIpRequestToken) return;
    if (!permitted) {
      setPublicIp('PERMISSION REQUIRED');
      return;
    }

    const response = await fetch('https://api.ipify.org?format=json', {
      cache: 'no-store',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
    });
    if (!response.ok) throw new Error(`Public IP lookup failed (${response.status})`);
    const data = await response.json();
    if (requestToken !== publicIpRequestToken) return;
    if (!isValidIpAddress(data.ip)) throw new Error('IP lookup returned an invalid address');
    setPublicIp(data.ip.trim());
  } catch (error) {
    if (requestToken !== publicIpRequestToken) return;
    console.warn('[CyberSecurity Theme] Public IP lookup unavailable through ipify.', error);
    setPublicIp('LOOKUP UNAVAILABLE');
  } finally {
    delete publicIp.dataset.loading;
    if (publicIpRefreshRequested) {
      publicIpRefreshRequested = false;
      void updatePublicIp();
    }
  }
}

updatePublicIp();
setInterval(() => { void updatePublicIp(); }, 15 * 60 * 1000);
const storageApi = typeof browser !== 'undefined'
  ? browser.storage
  : (typeof chrome !== 'undefined' ? chrome.storage : null);
storageApi?.onChanged?.addListener((changes, areaName) => {
  if (areaName !== 'local' || !changes.tf_public_ip_lookup_enabled) return;
  publicIpRequestToken += 1;
  if (changes.tf_public_ip_lookup_enabled.newValue === true) void updatePublicIp();
  else setPublicIp('OPT-IN REQUIRED');
});
const permissionApi = typeof browser !== 'undefined'
  ? browser.permissions
  : (typeof chrome !== 'undefined' ? chrome.permissions : null);
permissionApi?.onRemoved?.addListener(permissions => {
  if (!permissions.origins || !permissions.origins.includes('https://api.ipify.org/*')) return;
  publicIpRequestToken += 1;
  tfStorage.set({ tf_public_ip_lookup_enabled: false }).catch(error => {
    console.error('[CyberSecurity Theme] Could not persist revoked ipify permission.', error);
  });
  setPublicIp('PERMISSION REMOVED');
});

const NATIVE_HOST = 'dev.pinoyunknown.cybersecurity_theme';
function requestMachineMetrics() {
  if (typeof browser !== 'undefined') {
    return browser.runtime.sendNativeMessage(NATIVE_HOST, { type:'GET_SYSTEM_METRICS' });
  }
  return new Promise((resolve, reject) => {
    chrome.runtime.sendNativeMessage(NATIVE_HOST, { type:'GET_SYSTEM_METRICS' }, response => {
      const error = chrome.runtime.lastError;
      if (error) reject(new Error(error.message));
      else resolve(response);
    });
  });
}

function updateMachinePanel(metrics) {
  document.getElementById('machineName').textContent = metrics.hostname;
  document.getElementById('machineCpu').textContent = metrics.cpu;
  document.getElementById('machineMemory').textContent = metrics.memory;
  document.getElementById('machineStorage').textContent = metrics.storage;
  document.getElementById('machineOs').textContent = typeof metrics.os === 'string' ? metrics.os : 'UPDATE HELPER';
  document.getElementById('machineName').title = metrics.hostname;
  const localIp = typeof metrics.local_ip === 'string'
    ? (isValidIpAddress(metrics.local_ip) ? metrics.local_ip.trim() : metrics.local_ip)
    : 'UPDATE HELPER';
  document.getElementById('localIp').textContent = localIp;
  document.getElementById('globeLocalIp').textContent = localIp;
  document.getElementById('localIp').title = localIp;
}

async function loadMachineMetrics() {
  try {
    const metrics = await requestMachineMetrics();
    if (!metrics || typeof metrics.hostname !== 'string' || typeof metrics.cpu !== 'string' ||
        typeof metrics.memory !== 'string' || typeof metrics.storage !== 'string') {
      throw new Error('Native helper returned an invalid metrics response.');
    }
    updateMachinePanel(metrics);
    try {
      const data = await tfStorage.get(['tf_hud_hostname']);
      if (!data.tf_hud_hostname) setHudHostname(metrics.hostname);
    } catch (error) {
      console.warn('[CyberSecurity Theme] Could not load the saved HUD hostname.', error);
      setHudHostname(metrics.hostname);
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    const helperStatus = /native messaging|native application|native host/i.test(reason)
      ? 'INSTALL HELPER'
      : 'HELPER ERROR';
    const helperInstructions = `${reason} Follow the native helper installation steps in README.md, then restart the browser.`;
    console.error('[CyberSecurity Theme] Native metrics request failed.', error);
    document.getElementById('machineName').textContent = helperStatus;
    document.getElementById('machineOs').textContent = helperStatus;
    document.getElementById('machineCpu').textContent = 'NOT AVAILABLE';
    document.getElementById('machineMemory').textContent = 'NOT AVAILABLE';
    document.getElementById('machineStorage').textContent = 'NOT AVAILABLE';
    document.getElementById('localIp').textContent = helperStatus;
    document.getElementById('globeLocalIp').textContent = helperStatus;
    for (const id of ['machineName', 'machineOs', 'machineCpu', 'machineMemory', 'machineStorage', 'localIp', 'globeLocalIp']) {
      document.getElementById(id).title = `${helperStatus}: ${helperInstructions}`;
    }
  }
}
loadMachineMetrics();
setInterval(loadMachineMetrics, 30000);

// ── Search ────────────────────────────────────────────
let searchBase = 'https://www.google.com/search?q=';
document.getElementById('engineTabs').addEventListener('click', e => {
  const b = e.target.closest('.eng-btn');
  if (!b) return;
  document.querySelectorAll('.eng-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  searchBase = b.dataset.url;
});
function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) window.location.href = searchBase + encodeURIComponent(q);
}
document.getElementById('searchBtn').addEventListener('click', doSearch);
document.getElementById('searchInput').addEventListener('keydown', e => { if(e.key==='Enter') doSearch(); });

// ══════════════════════════════════════════════════════
// PARTICLE SYSTEMS
// ══════════════════════════════════════════════════════

// ── Grid (Cyberpunk Neon) ─────────────────────────────
function startGrid() {
  const lines = []; const count = 30;
  for (let i = 0; i < count; i++) {
    lines.push({ x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.5, vy:(Math.random()-.5)*.5, a:Math.random() });
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    const ac = getComputedStyle(document.documentElement).getPropertyValue('--ac').trim() || '#00ffff';
    ctx.strokeStyle = ac; ctx.lineWidth = 0.5;
    // Draw grid
    ctx.globalAlpha = 0.06;
    for (let x=0;x<W;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for (let y=0;y<H;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    // Draw moving dots + connections
    lines.forEach(l=>{
      l.x+=l.vx; l.y+=l.vy;
      if(l.x<0||l.x>W)l.vx*=-1;
      if(l.y<0||l.y>H)l.vy*=-1;
      l.a=Math.sin(Date.now()*0.001+l.x)*0.5+0.5;
    });
    lines.forEach((a,i)=>{
      lines.forEach((b,j)=>{
        if(i>=j)return;
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<140){
          ctx.globalAlpha=(1-d/140)*0.25;
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
        }
      });
      ctx.globalAlpha=a.a*0.6;
      ctx.beginPath();ctx.arc(a.x,a.y,2,0,Math.PI*2);ctx.fillStyle=ac;ctx.fill();
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Matrix (Blackhat Hacker) ──────────────────────────
function startMatrix() {
  const cols=Math.floor(W/14); const drops=Array(cols).fill(1);
  const chars='アイウエオカキクケコ01ABCDEF</>{}[];';
  function draw(){
    ctx.fillStyle='rgba(0,0,0,0.08)';ctx.fillRect(0,0,W,H);
    const ac=getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()||'#00ff41';
    ctx.fillStyle=ac;ctx.font='13px "Ubuntu Mono",monospace';
    drops.forEach((y,i)=>{
      ctx.globalAlpha=Math.random()*0.7+0.3;
      ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*14,y*14);
      if(y*14>H&&Math.random()>0.975)drops[i]=0;
      drops[i]++;
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Orbit (Sci-Fi HUD) ────────────────────────────────
function startOrbit() {
  const rings=[{r:W*.2,speed:.0003},{r:W*.32,speed:-.0002},{r:W*.43,speed:.00015}];
  let t=0;
  function draw(){
    ctx.clearRect(0,0,W,H);
    t+=1;
    const ac=getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()||'#00ccff';
    const cx=W/2,cy=H/2;
    rings.forEach(ring=>{
      ctx.globalAlpha=0.15;ctx.strokeStyle=ac;ctx.lineWidth=0.8;
      ctx.beginPath();ctx.arc(cx,cy,ring.r,0,Math.PI*2);ctx.stroke();
      // dot on ring
      const ang=t*ring.speed*60;
      const dx=cx+Math.cos(ang)*ring.r,dy=cy+Math.sin(ang)*ring.r;
      ctx.globalAlpha=0.8;ctx.fillStyle=ac;
      ctx.beginPath();ctx.arc(dx,dy,4,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=0.15;
      ctx.beginPath();ctx.arc(dx,dy,10,0,Math.PI*2);ctx.stroke();
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Bubbles (Glass HUD) ───────────────────────────────
function startBubbles() {
  const bs=Array.from({length:22},()=>({
    x:Math.random()*W, y:H+20, r:Math.random()*18+4,
    vy:Math.random()*0.4+0.15, a:Math.random()*0.15+0.03
  }));
  function draw(){
    ctx.clearRect(0,0,W,H);
    bs.forEach(b=>{
      b.y-=b.vy; if(b.y<-40)b.y=H+40;
      ctx.globalAlpha=b.a;
      ctx.strokeStyle='rgba(255,255,255,0.3)';ctx.lineWidth=0.8;
      ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.stroke();
      const g=ctx.createRadialGradient(b.x-b.r*.3,b.y-b.r*.3,0,b.x,b.y,b.r);
      g.addColorStop(0,'rgba(255,255,255,0.12)');g.addColorStop(1,'rgba(255,255,255,0.01)');
      ctx.fillStyle=g;ctx.fill();
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Hex (Cyberpunk HUD) ───────────────────────────────
function startHex() {
  const S=44; const hexPts=(cx,cy,s)=>Array.from({length:6},(_,i)=>{const a=Math.PI/180*(60*i-30);return[cx+s*Math.cos(a),cy+s*Math.sin(a)];});
  const hexes=[];
  for(let row=-1;row<Math.ceil(H/(S*1.73))+1;row++){
    for(let col=-1;col<Math.ceil(W/(S*2))+1;col++){
      const cx=col*S*2+(row%2?S:0);
      const cy=row*S*1.73;
      hexes.push({cx,cy,phase:Math.random()*Math.PI*2});
    }
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    const ac=getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()||'#ff6b00';
    const t=Date.now()*0.001;
    hexes.forEach(h=>{
      const a=Math.sin(t*0.5+h.phase)*0.5+0.5;
      ctx.globalAlpha=a*0.12; ctx.strokeStyle=ac; ctx.lineWidth=0.6;
      const pts=hexPts(h.cx,h.cy,S-2);
      ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.stroke();
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Stars (PinoyUnknown) ──────────────────────────────
function startStars() {
  const stars=Array.from({length:120},()=>({
    x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.3,
    a:Math.random(),phase:Math.random()*Math.PI*2
  }));
  function draw(){
    ctx.clearRect(0,0,W,H);
    const ac=getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()||'#ff0080';
    const ac2=getComputedStyle(document.documentElement).getPropertyValue('--ac2').trim()||'#00ff88';
    const t=Date.now()*0.001;
    stars.forEach((s,i)=>{
      ctx.globalAlpha=(Math.sin(t*0.8+s.phase)*0.5+0.5)*0.7;
      ctx.fillStyle=i%3===0?ac2:ac;
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Static (Dystopian) ────────────────────────────────
function startStatic() {
  function draw(){
    const id=ctx.createImageData(W,H);
    for(let i=0;i<id.data.length;i+=4){
      const v=Math.random()<0.02?Math.random()*80:0;
      id.data[i]=v*1.2;id.data[i+1]=0;id.data[i+2]=0;id.data[i+3]=v;
    }
    ctx.putImageData(id,0,0);
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Hearts (Pink Candy) ───────────────────────────────
function startHearts() {
  const hs=Array.from({length:18},()=>({
    x:Math.random()*W,y:H+30,vy:Math.random()*.4+.15,
    size:Math.random()*18+8,a:Math.random()*.3+.1
  }));
  function heart(cx,cy,sz){
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.bezierCurveTo(cx,cy-sz*.4,cx+sz*.6,cy-sz*.8,cx+sz*.6,cy-sz*.4);
    ctx.bezierCurveTo(cx+sz*.6,cy,cx,cy+sz*.5,cx,cy+sz*.7);
    ctx.bezierCurveTo(cx,cy+sz*.5,cx-sz*.6,cy,cx-sz*.6,cy-sz*.4);
    ctx.bezierCurveTo(cx-sz*.6,cy-sz*.8,cx,cy-sz*.4,cx,cy);
    ctx.closePath();
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    hs.forEach(h=>{
      h.y-=h.vy; if(h.y<-40)h.y=H+40;
      ctx.globalAlpha=h.a; ctx.fillStyle='#ff69b4';
      heart(h.x,h.y,h.size); ctx.fill();
    });
    ctx.globalAlpha=1;
    animId=requestAnimationFrame(draw);
  }
  draw();
}

// ── Route to correct particle system ──────────────────
function startParticles(type) {
  cancelAnimationFrame(animId);
  ctx.clearRect(0,0,W,H);
  if (motionQuery.matches || document.hidden) return;
  switch(type){
    case 'matrix':  startMatrix();  break;
    case 'orbit':   startOrbit();   break;
    case 'bubbles': startBubbles(); break;
    case 'hex':     startHex();     break;
    case 'stars':   startStars();   break;
    case 'static':  startStatic();  break;
    case 'hearts':  startHearts();  break;
    default:        startGrid();    break;
  }
}

motionQuery.addEventListener('change', () => startParticles(currentTheme.particle));
document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancelAnimationFrame(animId);
  else startParticles(currentTheme.particle);
});

// ── Listen for theme changes from popup ───────────────
const _api = (typeof browser!=='undefined') ? browser : chrome;
_api.runtime.onMessage.addListener(msg => {
  if (msg.type === 'TF_THEME_CHANGED') {
    const t = getThemeById(msg.themeId);
    if (t) applyTheme(t);
  }
  if (msg.type === 'TF_HUD_HOST_CHANGED') setHudHostname(msg.hostname);
});

// ── Boot ──────────────────────────────────────────────
(async () => {
  const data = await tfStorage.get(['tf_active_theme','tf_hud_hostname']);
  setHudHostname(data.tf_hud_hostname || 'PinoyUnknown');
  const t = getThemeById(data.tf_active_theme || 'cyberpunk-neon');
  applyTheme(t);
})();
