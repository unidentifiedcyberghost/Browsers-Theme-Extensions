/* global tfStorage */

(() => {
  const SETTING_KEY = 'tf_glitch_sounds_enabled';
  const AudioContextType = window.AudioContext || window.webkitAudioContext;
  let enabled = true;
  let audioContext;
  let lastTypingSoundAt = 0;

  function getAudioContext() {
    if (!AudioContextType) return null;
    audioContext ??= new AudioContextType();
    if (audioContext.state === 'suspended') void audioContext.resume();
    return audioContext;
  }

  function playTone(context, startAt, startFrequency, endFrequency, duration, volume, type) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(startFrequency, startAt);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(40, endFrequency), startAt + duration);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startAt);
    oscillator.stop(startAt + duration + 0.005);
  }

  function play(kind = 'click') {
    if (!enabled || !AudioContextType) return;

    let context;
    try {
      context = getAudioContext();
    } catch (error) {
      console.warn('[CyberSecurity Theme] Glitch sound could not start.', error);
      return;
    }
    if (!context) return;

    const now = context.currentTime;
    if (kind === 'typing') {
      if (now - lastTypingSoundAt < 0.045) return;
      lastTypingSoundAt = now;
      playTone(context, now, 720 + Math.random() * 240, 150 + Math.random() * 120, 0.045, 0.018, 'square');
      return;
    }
    if (kind === 'search') {
      playTone(context, now, 240, 760, 0.055, 0.028, 'sawtooth');
      playTone(context, now + 0.055, 920, 330, 0.065, 0.024, 'square');
      playTone(context, now + 0.12, 420, 1180, 0.08, 0.022, 'triangle');
      return;
    }
    playTone(context, now, 980 + Math.random() * 420, 180 + Math.random() * 100, 0.065, 0.025, 'square');
  }

  async function setEnabled(value) {
    enabled = Boolean(value);
    await tfStorage.set({ [SETTING_KEY]: enabled });
  }

  async function loadSetting() {
    try {
      const data = await tfStorage.get([SETTING_KEY]);
      enabled = data[SETTING_KEY] !== false;
    } catch (error) {
      console.error('[CyberSecurity Theme] Could not load the glitch sound preference.', error);
    }
  }

  document.addEventListener('click', event => {
    if (event.target.closest('button, a, summary, label, input[type="checkbox"], select, [role="button"]')) {
      play('click');
    }
  }, true);

  document.addEventListener('input', event => {
    if (event.target.matches('input, textarea, [contenteditable="true"]')) play('typing');
  }, true);

  const storageApi = typeof browser !== 'undefined'
    ? browser.storage
    : (typeof chrome !== 'undefined' ? chrome.storage : null);
  storageApi?.onChanged?.addListener((changes, areaName) => {
    if (areaName === 'local' && changes[SETTING_KEY]) {
      enabled = changes[SETTING_KEY].newValue !== false;
    }
  });

  window.GlitchSounds = {
    play,
    setEnabled,
    loadSetting,
    get enabled() {
      return enabled;
    },
  };
  void loadSetting();
})();
