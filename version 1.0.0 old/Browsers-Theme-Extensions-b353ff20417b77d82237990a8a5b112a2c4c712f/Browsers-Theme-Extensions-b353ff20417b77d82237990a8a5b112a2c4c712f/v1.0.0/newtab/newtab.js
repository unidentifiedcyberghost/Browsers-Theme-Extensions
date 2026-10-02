// ╔═════════════════════════════════════════════════════╗
// ║  THEME FORGE — New Tab Script v1.0.0               ║
// ║  by PinoyUnknown | unidentifiedcyberghost           ║
// ╚═════════════════════════════════════════════════════╝
/* global THEMES, getThemeById, tfColorToRgb, tfStorage */

const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');
let   W = canvas.width  = window.innerWidth;
let   H = canvas.height = window.innerHeight;
let   currentTheme = THEMES[0];
let   animId;

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
setInterval(updateClock, 1000);
updateClock();

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

// ── Listen for theme changes from popup ───────────────
const _api = (typeof browser!=='undefined') ? browser : chrome;
_api.runtime.onMessage.addListener(msg => {
  if (msg.type === 'TF_THEME_CHANGED') {
    const t = getThemeById(msg.themeId);
    if (t) applyTheme(t);
  }
});

// ── Boot ──────────────────────────────────────────────
(async () => {
  const data = await tfStorage.get(['tf_active_theme']);
  const t = getThemeById(data.tf_active_theme || 'cyberpunk-neon');
  applyTheme(t);
})();
