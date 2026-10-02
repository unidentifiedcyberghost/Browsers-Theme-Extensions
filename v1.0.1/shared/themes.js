// ╔══════════════════════════════════════════════════════════════╗
// ║  THEME FORGE — Theme Definitions v1.0.1                     ║
// ║  by PinoyUnknown | unidentifiedcyberghost                    ║
// ║  https://github.com/unidentifiedcyberghost/Browsers-Theme-Extensions ║
// ╚══════════════════════════════════════════════════════════════╝

const THEMES = [

  // ── 1. CYBERPUNK NEON ──────────────────────────────────────────
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    description: 'Neon-lit streets of the digital future',
    icon: '⚡',
    tags: ['Dark','Neon','Orbitron','Cyberpunk'],
    preview: ['#0d0d0d','#00ffff','#ff00ff','#7b00ff'],
    particle: 'grid',
    vars: {
      '--tf-bg':      '#0d0d0d',
      '--tf-bg2':     '#0a0020',
      '--tf-surface': '#12002a',
      '--tf-accent':  '#00ffff',
      '--tf-accent2': '#ff00ff',
      '--tf-accent3': '#7b00ff',
      '--tf-text':    '#e0e0ff',
      '--tf-text2':   '#6666aa',
      '--tf-border':  'rgba(0,255,255,0.25)',
      '--tf-glow':    '0 0 20px rgba(0,255,255,0.5)',
      '--tf-font':    'Orbitron, Ubuntu, sans-serif',
      '--tf-grad':    'linear-gradient(135deg,#0d0d0d 0%,#0a0020 50%,#001a33 100%)',
    },
    firefox: { colors: {
      frame:'#0a0020', tab_background_text:'#00ffff', toolbar:'#0d0d0d',
      toolbar_text:'#00ffff', tab_line:'#ff00ff', popup:'#0d0d0d',
      popup_text:'#00ffff', popup_border:'#7b00ff', icons:'#00ffff', icons_attention:'#ff00ff',
    }}
  },

  // ── 2. BLACKHAT HACKER ─────────────────────────────────────────
  {
    id: 'blackhat-hacker',
    name: 'Blackhat Hacker',
    description: 'Terminal darkness. Code is power.',
    icon: '⌨',
    tags: ['Terminal','Matrix','Ubuntu Mono','Hacker'],
    preview: ['#000000','#00ff41','#003300','#111111'],
    particle: 'matrix',
    vars: {
      '--tf-bg':      '#000000',
      '--tf-bg2':     '#020802',
      '--tf-surface': '#0a120a',
      '--tf-accent':  '#00ff41',
      '--tf-accent2': '#00cc33',
      '--tf-accent3': '#007a1e',
      '--tf-text':    '#00ff41',
      '--tf-text2':   '#00882a',
      '--tf-border':  'rgba(0,255,65,0.25)',
      '--tf-glow':    '0 0 18px rgba(0,255,65,0.6)',
      '--tf-font':    'Ubuntu Mono, Courier New, monospace',
      '--tf-grad':    'linear-gradient(180deg,#000000 0%,#001200 100%)',
    },
    firefox: { colors: {
      frame:'#000000', tab_background_text:'#00ff41', toolbar:'#020802',
      toolbar_text:'#00ff41', tab_line:'#00ff41', popup:'#000000',
      popup_text:'#00ff41', popup_border:'#00882a', icons:'#00ff41', icons_attention:'#00cc33',
    }}
  },

  // ── 3. SCI-FI HUD ──────────────────────────────────────────────
  {
    id: 'scifi-hud',
    name: 'Sci-Fi HUD',
    description: 'Starship interface. JARVIS mode activated.',
    icon: '◈',
    tags: ['Sci-Fi','Blue','Futuristic','Orbitron'],
    preview: ['#000510','#00ccff','#0055ff','#001a44'],
    particle: 'orbit',
    vars: {
      '--tf-bg':      '#000510',
      '--tf-bg2':     '#000d22',
      '--tf-surface': '#001133',
      '--tf-accent':  '#00ccff',
      '--tf-accent2': '#0055ff',
      '--tf-accent3': '#003388',
      '--tf-text':    '#c8e6ff',
      '--tf-text2':   '#4477aa',
      '--tf-border':  'rgba(0,204,255,0.25)',
      '--tf-glow':    '0 0 20px rgba(0,204,255,0.5)',
      '--tf-font':    'Orbitron, sans-serif',
      '--tf-grad':    'linear-gradient(135deg,#000510 0%,#000d22 60%,#001133 100%)',
    },
    firefox: { colors: {
      frame:'#000d22', tab_background_text:'#00ccff', toolbar:'#000510',
      toolbar_text:'#00ccff', tab_line:'#0055ff', popup:'#000510',
      popup_text:'#c8e6ff', popup_border:'#0055ff', icons:'#00ccff', icons_attention:'#0055ff',
    }}
  },

  // ── 4. GLASS HUD ───────────────────────────────────────────────
  {
    id: 'glass-hud',
    name: 'Glass HUD',
    description: 'Black transparent glass. Pure infinite clarity.',
    icon: '◇',
    tags: ['Glass','Transparent','Minimal','Glassmorphism'],
    preview: ['#080810','#ffffff','rgba(0,255,255,0.7)','#1a1a2e'],
    particle: 'bubbles',
    vars: {
      '--tf-bg':      '#080810',
      '--tf-bg2':     '#0f0f1a',
      '--tf-surface': 'rgba(255,255,255,0.04)',
      '--tf-accent':  'rgba(0,255,255,0.9)',
      '--tf-accent2': 'rgba(255,255,255,0.7)',
      '--tf-accent3': 'rgba(80,120,255,0.7)',
      '--tf-text':    '#ffffff',
      '--tf-text2':   'rgba(255,255,255,0.5)',
      '--tf-border':  'rgba(255,255,255,0.12)',
      '--tf-glow':    '0 8px 32px rgba(0,0,0,0.8)',
      '--tf-font':    'Orbitron, sans-serif',
      '--tf-grad':    'linear-gradient(135deg,#080810 0%,#0f0f1a 100%)',
    },
    firefox: { colors: {
      frame:'#0f0f1a', tab_background_text:'#ffffff', toolbar:'#080810',
      toolbar_text:'#ffffff', tab_line:'rgba(0,255,255,0.9)', popup:'#080810',
      popup_text:'#ffffff', popup_border:'rgba(255,255,255,0.2)', icons:'#ffffff', icons_attention:'rgba(0,255,255,0.9)',
    }}
  },

  // ── 5. CYBERPUNK HUD ───────────────────────────────────────────
  {
    id: 'cyberpunk-hud',
    name: 'Cyberpunk HUD',
    description: 'Night City. No rules. All power unleashed.',
    icon: '⬡',
    tags: ['Orange','Night City','HUD Layout','Orbitron'],
    preview: ['#0a0200','#ff6b00','#ffcc00','#ff0040'],
    particle: 'hex',
    vars: {
      '--tf-bg':      '#0a0200',
      '--tf-bg2':     '#1a0500',
      '--tf-surface': '#1f0800',
      '--tf-accent':  '#ff6b00',
      '--tf-accent2': '#ffcc00',
      '--tf-accent3': '#ff0040',
      '--tf-text':    '#ffd0a0',
      '--tf-text2':   '#aa6633',
      '--tf-border':  'rgba(255,107,0,0.35)',
      '--tf-glow':    '0 0 22px rgba(255,107,0,0.6)',
      '--tf-font':    'Orbitron, sans-serif',
      '--tf-grad':    'linear-gradient(135deg,#0a0200 0%,#1a0500 50%,#0a0000 100%)',
    },
    firefox: { colors: {
      frame:'#1a0500', tab_background_text:'#ff6b00', toolbar:'#0a0200',
      toolbar_text:'#ffcc00', tab_line:'#ff6b00', popup:'#0a0200',
      popup_text:'#ffd0a0', popup_border:'#ff6b00', icons:'#ff6b00', icons_attention:'#ffcc00',
    }}
  },

  // ── 6. PINOYUNKNOWN BRAND ──────────────────────────────────────
  {
    id: 'pinoyunknown',
    name: 'PinoyUnknown',
    description: 'Filipino spirit. Unknown power unleashed.',
    icon: '◉',
    tags: ['Purple','Pink','Brand','PinoyUnknown'],
    preview: ['#0d0020','#ff0080','#00ff88','#aa00ff'],
    particle: 'stars',
    vars: {
      '--tf-bg':      '#0d0020',
      '--tf-bg2':     '#1a0040',
      '--tf-surface': '#220055',
      '--tf-accent':  '#ff0080',
      '--tf-accent2': '#00ff88',
      '--tf-accent3': '#aa00ff',
      '--tf-text':    '#ffaadd',
      '--tf-text2':   '#8855aa',
      '--tf-border':  'rgba(255,0,128,0.3)',
      '--tf-glow':    '0 0 22px rgba(255,0,128,0.55)',
      '--tf-font':    'Orbitron, sans-serif',
      '--tf-grad':    'linear-gradient(135deg,#0d0020 0%,#1a0040 50%,#0d0033 100%)',
    },
    firefox: { colors: {
      frame:'#1a0040', tab_background_text:'#ff0080', toolbar:'#0d0020',
      toolbar_text:'#ff0080', tab_line:'#00ff88', popup:'#0d0020',
      popup_text:'#ffaadd', popup_border:'#ff0080', icons:'#ff0080', icons_attention:'#00ff88',
    }}
  },

  // ── 7. DYSTOPIAN ───────────────────────────────────────────────
  {
    id: 'dystopian',
    name: 'Dystopian',
    description: 'Post-collapse world. Survive the dark.',
    icon: '☢',
    tags: ['Dark Red','Grim','Ubuntu','Post-Apocalyptic'],
    preview: ['#0d0000','#cc2200','#8b0000','#3a3a3a'],
    particle: 'static',
    vars: {
      '--tf-bg':      '#0d0000',
      '--tf-bg2':     '#1a0000',
      '--tf-surface': '#220500',
      '--tf-accent':  '#cc2200',
      '--tf-accent2': '#8b0000',
      '--tf-accent3': '#4a4a4a',
      '--tf-text':    '#ddbbaa',
      '--tf-text2':   '#775544',
      '--tf-border':  'rgba(204,34,0,0.3)',
      '--tf-glow':    '0 0 18px rgba(204,34,0,0.45)',
      '--tf-font':    'Ubuntu, sans-serif',
      '--tf-grad':    'linear-gradient(135deg,#0d0000 0%,#1a0000 50%,#0d0300 100%)',
    },
    firefox: { colors: {
      frame:'#1a0000', tab_background_text:'#cc2200', toolbar:'#0d0000',
      toolbar_text:'#ddbbaa', tab_line:'#cc2200', popup:'#0d0000',
      popup_text:'#ddbbaa', popup_border:'#8b0000', icons:'#cc2200', icons_attention:'#8b0000',
    }}
  },

  // ── 8. PINK CANDY ──────────────────────────────────────────────
  {
    id: 'candy-pink',
    name: 'Pink Candy',
    description: 'Sweet. Soft. Irresistibly adorable.',
    icon: '♡',
    tags: ['Pink','White','Kawaii','Ubuntu'],
    preview: ['#fff0f5','#ff69b4','#ff1493','#ffb3d9'],
    particle: 'hearts',
    vars: {
      '--tf-bg':      '#fff0f5',
      '--tf-bg2':     '#ffe6f0',
      '--tf-surface': '#ffffff',
      '--tf-accent':  '#ff69b4',
      '--tf-accent2': '#ff1493',
      '--tf-accent3': '#ffb3d9',
      '--tf-text':    '#440022',
      '--tf-text2':   '#996688',
      '--tf-border':  'rgba(255,105,180,0.3)',
      '--tf-glow':    '0 4px 15px rgba(255,105,180,0.35)',
      '--tf-font':    'Ubuntu, sans-serif',
      '--tf-grad':    'linear-gradient(135deg,#fff0f5 0%,#ffe6f0 100%)',
    },
    firefox: { colors: {
      frame:'#ffe6f0', tab_background_text:'#ff1493', toolbar:'#fff0f5',
      toolbar_text:'#440022', tab_line:'#ff1493', popup:'#ffffff',
      popup_text:'#440022', popup_border:'#ff69b4', icons:'#ff69b4', icons_attention:'#ff1493',
    }}
  },

  // ── 9. CYBERSECURITY THEME ────────────────────────────────────
  {
    id: 'cybersecurity-dark',
    name: 'CyberSecurity Dark',
    description: 'Deep navy with neon green. Fortress of the digital realm.',
    icon: '🔐',
    tags: ['Dark','Hacker','Secure','Green','Navy'],
    preview: ['#0a1428','#00ff00','#00cc00','#1a1a2e'],
    particle: 'grid',
    vars: {
      '--tf-bg':      '#0a1428',
      '--tf-bg2':     '#0d1b2a',
      '--tf-surface': '#16213e',
      '--tf-accent':  '#00ff00',
      '--tf-accent2': '#00cc00',
      '--tf-accent3': '#008800',
      '--tf-text':    '#c0ff00',
      '--tf-text2':   '#668800',
      '--tf-border':  'rgba(0,255,0,0.28)',
      '--tf-glow':    '0 0 22px rgba(0,255,0,0.55)',
      '--tf-font':    'Ubuntu Mono, Courier New, monospace',
      '--tf-grad':    'linear-gradient(135deg,#0a1428 0%,#0d1b2a 50%,#16213e 100%)',
    },
    firefox: { colors: {
      frame:'#0d1b2a', tab_background_text:'#00ff00', toolbar:'#0a1428',
      toolbar_text:'#00ff00', tab_line:'#00cc00', popup:'#0a1428',
      popup_text:'#c0ff00', popup_border:'#00cc00', icons:'#00ff00', icons_attention:'#00cc00',
    }}
  }
];

// ── Utilities ──────────────────────────────────────────────────
function tfColorToRgb(c) {
  if (!c) return '0,255,255';
  if (c.startsWith('#') && c.length === 7) {
    return parseInt(c.slice(1,3),16)+','+parseInt(c.slice(3,5),16)+','+parseInt(c.slice(5,7),16);
  }
  const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return m ? m[1]+','+m[2]+','+m[3] : '0,255,255';
}

function getThemeById(id) { return THEMES.find(t => t.id === id) || THEMES[0]; }

const tfStorage = {
  get: keys => new Promise(res => {
    const a = (typeof browser!=='undefined') ? browser.storage.local : chrome.storage.local;
    a.get(keys, res);
  }),
  set: data => new Promise(res => {
    const a = (typeof browser!=='undefined') ? browser.storage.local : chrome.storage.local;
    a.set(data, res);
  })
};

if (typeof module !== 'undefined') module.exports = { THEMES, getThemeById, tfColorToRgb };
