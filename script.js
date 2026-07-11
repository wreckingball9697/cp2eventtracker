// 1 in-game second equivalent to .70 real seconds
const GAME_SEC_PER_REAL_SEC = 1 / 0.7;

// game clock starts at 20 seconds as the game starts at that time. Delay is fix event time fire
const PERIODIC_EVENTS = [
  {
    id: "PeriodicSquadRaptors",
    name: "Raptors",
    period: 630,
    delay: 20,
    desc: "",
  },
  {
    id: "S1PeriodicPlasmaChaserssoftenrage",
    name: "Plasma Chasers",
    period: 900,
    delay: 20,
    desc: "",
  },
  { id: "DropSpinePeriodicd", name: "Spine", period: 1987, delay: 0, desc: "" },
  {
    id: "DropZerglingsPeriodic",
    name: "Zergling",
    period: 780,
    delay: 20,
    desc: "",
  },
  {
    id: "DropAberrationPeriodic",
    name: "Aberration",
    period: 840,
    delay: 20,
    desc: "",
  },
  {
    id: "DropRoachesPeriodic",
    name: "Roaches",
    period: 550,
    delay: 20,
    desc: "",
  },
  {
    id: "PeriodicSquadHiveGuardians",
    name: "Hive Guardians",
    period: 2900,
    delay: 20,
    desc: "",
  },
  {
    id: "PeriodicSquadBroodLords",
    name: "Squad Brood/Bane Lords",
    period: 695,
    delay: 20,
    desc: "",
  },
  {
    id: "OldschoolPeriodicBroodlords",
    name: "Oldschool Brood Lords",
    period: 635,
    delay: 20,
    desc: "Guardian Primal Guardian, Guardian, Primal Guardian, Brood Lord, Bane Lord, Primal Guardian, Brood Lord, Shredder Lord",
  },
];

const ULTRA_ID = "DropUltraPeriodic";
const ULTRA_PERIOD = 840;

const INITIAL_GAME_CLOCK = 20;

// Portal List
const PORTAL_EVENTS = [
  { id: 1, name: "(100)Yagdra" },
  { id: 2, name: "Roaches" },
  { id: 3, name: "60, Small 3xZerglings" },
  { id: 4, name: "#Plasma" },
  { id: 5, name: "Small Zerglings" },
  { id: 6, name: "Spine@Previous" },
  { id: 7, name: "Roaches" },
  { id: 8, name: "Small Zerglings+Previous" },
  { id: 9, name: "70, #Plasma@Triple+Previous" },
  { id: 10, name: "95, 2xRoaches" },
  { id: 11, name: "50, SplitterlingNydus" },
  { id: 12, name: "75, Swarm Host" },
  { id: 13, name: "Hunterling Squad" },
  { id: 14, name: "SplitterlingNydus" },
  { id: 15, name: "Small Zerglings+Previous" },
  { id: 16, name: "#Plasma" },
  { id: 17, name: "Small Zerglings+Previous" },
  { id: 18, name: "100, #Hybrids" },
  { id: 19, name: "110, #Yagdra" },
  { id: 20, name: "100, SpineCircle" },
  { id: 21, name: "Hunterling Squad" },
  { id: 22, name: "75, #Plasma@Previous" },
  { id: 23, name: "Creep" },
  { id: 24, name: "2xRoaches" },
  { id: 25, name: "60, 3xRaptorlings" },
  { id: 26, name: "UltraliskNydus" },
  { id: 27, name: "2xRoaches" },
  { id: 28, name: "SporeFountain" },
  { id: 29, name: "75, MassNukes" },
  { id: 30, name: "#Plasma@Previous" },
  { id: 31, name: "Swarm Host" },
  { id: 32, name: "Hunterling Squad" },
  { id: 33, name: "SpawningPool" },
  { id: 34, name: "3xRaptorlings" },
  { id: 35, name: "100, #Hybrids" },
  { id: 36, name: "SporeFountain" },
  { id: 37, name: "#Plasma" },
  { id: 38, name: "SplitterlingNydus" },
  { id: 39, name: "75, #Plasma@Previous" },
  { id: 40, name: "90, Yagdra" },
  { id: 41, name: "2xRoaches" },
  { id: 42, name: "50, Brimstone" },
  { id: 43, name: "120, MassNukes" },
  { id: 44, name: "UltraliskNydus" },
  { id: 45, name: "#Hybrids" },
  { id: 46, name: "SpineCircle" },
  { id: 47, name: "SporeFountain" },
  { id: 48, name: "3xRaptorlings" },
  { id: 49, name: "UltraliskNydus" },
  { id: 50, name: "Swarm Host" },
  { id: 51, name: "200, SpineCircle" },
  { id: 52, name: "3xRaptorlings" },
  { id: 53, name: "UltraliskNydus" },
  { id: 54, name: "Yagdra" },
  { id: 55, name: "200, SpineCircle" },
  { id: 56, name: "#Hybrids" },
  { id: 57, name: "Swarm Host" },
  { id: 58, name: "SpawningPool" },
  { id: 59, name: "#Plasma@Previous" },
  { id: 60, name: "200, SpineCircle" },
  { id: 61, name: "3xRaptorlings" },
  { id: 62, name: "#Plasma@Previous" },
  { id: 63, name: "SpawningPool" },
  { id: 64, name: "#Hybrids" },
  { id: 65, name: "#Plasma@Previous" },
  { id: 66, name: "SporeFountain" },
  { id: 67, name: "#Plasma@Previous" },
  { id: 68, name: "Swarm Host" },
  { id: 69, name: "SplitterlingNydus" },
  { id: 70, name: "[P200], SpineCircle" },
  { id: 71, name: "[P120], MassNukes" },
  { id: 72, name: "#Hybrids" },
  { id: 73, name: "UltraliskNydus" },
  { id: 74, name: "Yagdra" },
  { id: 75, name: "[P200], SpineCircle" },
];

let gameStartReal = Date.now();
let manualOffset = INITIAL_GAME_CLOCK;
let ultra = null;
let isPaused = false;
let pausedElapsed = 0;

const HIDDEN_IDS_KEY = "cp2timer_hiddenEventIds";
let hiddenIds = new Set(
  JSON.parse(localStorage.getItem(HIDDEN_IDS_KEY) || "[]"),
);

function saveHiddenIds() {
  localStorage.setItem(HIDDEN_IDS_KEY, JSON.stringify([...hiddenIds]));
}

// ~~~~~ Sound alerts ~~~~~
const SOUND_PRESETS = [
  {
    id: "ding",
    label: "Soft Ding",
    notes: [{ type: "sine", freq: 880, start: 0, dur: 0.15, gain: 0.3 }],
  },
  {
    id: "double",
    label: "Double Beep",
    notes: [
      { type: "square", freq: 660, start: 0, dur: 0.08, gain: 0.25 },
      { type: "square", freq: 660, start: 0.12, dur: 0.08, gain: 0.25 },
    ],
  },
  {
    id: "chirp",
    label: "Rising Chirp",
    sweep: { type: "triangle", from: 440, to: 880, dur: 0.2, gain: 0.3 },
  },
  {
    id: "alert",
    label: "Alert (Triple)",
    notes: [
      { type: "sawtooth", freq: 550, start: 0, dur: 0.07, gain: 0.25 },
      { type: "sawtooth", freq: 550, start: 0.1, dur: 0.07, gain: 0.25 },
      { type: "sawtooth", freq: 550, start: 0.2, dur: 0.07, gain: 0.25 },
    ],
  },
];
const OFFSET_OPTIONS = [5, 10, 15, 20, 30];

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
// Browsers block audio until a user gesture; unlock on the first click anywhere.
document.addEventListener("click", () => getAudioCtx(), { once: true });

function playOsc(ctx, startTime, type, freqFrom, freqTo, dur, gainVal) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freqFrom, startTime);
  if (freqTo !== freqFrom)
    osc.frequency.linearRampToValueAtTime(freqTo, startTime + dur);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(gainVal, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + dur + 0.02);
}

function playTone(soundId) {
  const preset = SOUND_PRESETS.find((p) => p.id === soundId);
  if (!preset) return;
  const ctx = getAudioCtx();
  const now = ctx.currentTime;
  if (preset.sweep) {
    const sw = preset.sweep;
    playOsc(ctx, now, sw.type, sw.from, sw.to, sw.dur, sw.gain);
  } else {
    preset.notes.forEach((n) =>
      playOsc(ctx, now + n.start, n.type, n.freq, n.freq, n.dur, n.gain),
    );
  }
}

const SOUND_SETTINGS_KEY = "cp2timer_soundSettings";
let soundSettings = JSON.parse(
  localStorage.getItem(SOUND_SETTINGS_KEY) || "{}",
);

function saveSoundSettings() {
  localStorage.setItem(SOUND_SETTINGS_KEY, JSON.stringify(soundSettings));
}

// Tracks the last event occurrence (by its nextGameTime) we've already alerted for,
// so each occurrence only fires its sound once even though render() polls every 250ms.
const notifiedOccurrence = {};

function getGameElapsed() {
  if (isPaused) return pausedElapsed;
  const realElapsedSec = (Date.now() - gameStartReal) / 1000;
  return realElapsedSec * GAME_SEC_PER_REAL_SEC + manualOffset;
}

function nextOccurrence(delay, period, elapsed) {
  let n = Math.floor((elapsed - delay) / period) + 1;
  if (n < 1) n = 1;
  return delay + n * period;
}

function fmtHMS(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

const eventRowEls = new Map();

function createEventRow() {
  const row = document.createElement("div");
  row.className = "event-row";
  row.innerHTML = `
      <div class="left">
        <div class="name"></div>
        <div class="desc"></div>
      </div>
      <div class="timer">
        <span class="gametime"></span>
        <span class="countdown"></span>
      </div>
    `;
  return {
    row,
    nameEl: row.querySelector(".name"),
    descEl: row.querySelector(".desc"),
    gametimeEl: row.querySelector(".gametime"),
    countdownEl: row.querySelector(".countdown"),
  };
}

function render() {
  const elapsed = getGameElapsed();

  document.getElementById("gameClockVal").textContent = fmtHMS(elapsed);

  const rows = PERIODIC_EVENTS.map((ev) => {
    const nextGameTime = nextOccurrence(ev.delay, ev.period, elapsed);
    const gameSecRemaining = nextGameTime - elapsed;
    return {
      id: ev.id,
      name: ev.name,
      desc: ev.desc,
      nextGameTime,
      gameSecRemaining,
      ultra: false,
    };
  });

  if (ultra) {
    const nextGameTime = nextOccurrence(ultra.delay, ULTRA_PERIOD, elapsed);
    const gameSecRemaining = nextGameTime - elapsed;
    rows.push({
      id: ULTRA_ID,
      name: "Ultra",
      desc: "",
      nextGameTime,
      gameSecRemaining,
      ultra: true,
    });
  }

  rows.forEach((r) => {
    const cfg = soundSettings[r.id];
    if (!cfg || !cfg.enabled) return;
    const alreadyNotified = notifiedOccurrence[r.id] === r.nextGameTime;
    if (
      !alreadyNotified &&
      r.gameSecRemaining > 0 &&
      r.gameSecRemaining <= cfg.offsetSec
    ) {
      playTone(cfg.soundId);
      notifiedOccurrence[r.id] = r.nextGameTime;
    }
  });

  const visibleRows = rows.filter((r) => !hiddenIds.has(r.id));
  visibleRows.sort((a, b) => a.gameSecRemaining - b.gameSecRemaining);

  const listEl = document.getElementById("eventList");

  for (const id of eventRowEls.keys()) {
    if (!visibleRows.some((r) => r.id === id)) {
      eventRowEls.get(id).row.remove();
      eventRowEls.delete(id);
    }
  }

  visibleRows.forEach((r, i) => {
    let entry = eventRowEls.get(r.id);
    if (!entry) {
      entry = createEventRow();
      eventRowEls.set(r.id, entry);
    }

    const isImminent = i === 0 && r.gameSecRemaining <= 15;
    const wantedClass =
      `event-row ${i === 0 ? "next" : ""} ${isImminent ? "imminent" : ""} ${r.ultra ? "ultra" : ""}`.trim();
    if (entry.row.className !== wantedClass) entry.row.className = wantedClass;
    entry.nameEl.textContent = r.name;
    entry.descEl.textContent = r.desc;
    entry.gametimeEl.textContent = fmtHMS(r.nextGameTime);
    entry.countdownEl.textContent = `in ${fmtHMS(r.gameSecRemaining)}`;

    const wantedNode = listEl.children[i];
    if (wantedNode !== entry.row) {
      listEl.insertBefore(entry.row, wantedNode || null);
    }
  });
}

function escapeHtml(str) {
  return str.replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[ch],
  );
}

function highlightPlasma(str) {
  return str.replace(
    /plasma/gi,
    (match) => `<span class="plasma-highlight">${match}</span>`,
  );
}

function renderStatic() {
  const el = document.getElementById("staticList");
  if (PORTAL_EVENTS.length === 0) {
    el.innerHTML = `<div style="opacity:.6">(no data loaded yet)</div>`;
    return;
  }
  el.innerHTML = PORTAL_EVENTS.map(
    (e) =>
      `<div><span class="idx">${e.id}.</span>${highlightPlasma(escapeHtml(e.name))}</div>`,
  ).join("");
}

document.getElementById("ffBtn").addEventListener("click", () => {
  const minInput = document.getElementById("ffMin");
  const secInput = document.getElementById("ffSec");
  const min = parseFloat(minInput.value) || 0;
  const sec = parseFloat(secInput.value) || 0;
  const val = min * 60 + sec;
  if (val >= 0) {
    if (isPaused) {
      pausedElapsed = val;
    } else {
      const currentElapsed = getGameElapsed();
      manualOffset += val - currentElapsed;
    }
    render();
  }
});

function adjustGameClock(deltaSeconds) {
  if (isPaused) {
    pausedElapsed = Math.max(0, pausedElapsed + deltaSeconds);
  } else {
    const currentElapsed = getGameElapsed();
    const newVal = Math.max(0, currentElapsed + deltaSeconds);
    manualOffset += newVal - currentElapsed;
  }
  render();
}
document
  .getElementById("clockMinUp")
  .addEventListener("click", () => adjustGameClock(60));
document
  .getElementById("clockMinDown")
  .addEventListener("click", () => adjustGameClock(-60));
document
  .getElementById("clockSecUp")
  .addEventListener("click", () => adjustGameClock(1));
document
  .getElementById("clockSecDown")
  .addEventListener("click", () => adjustGameClock(-1));

document.getElementById("pauseBtn").addEventListener("click", () => {
  const btn = document.getElementById("pauseBtn");
  if (isPaused) {
    gameStartReal = Date.now();
    manualOffset = pausedElapsed;
    isPaused = false;
    btn.textContent = "Pause Clock";
  } else {
    pausedElapsed = getGameElapsed();
    isPaused = true;
    btn.textContent = "Resume Clock";
  }
  render();
});

document.getElementById("ultraBtn").addEventListener("click", () => {
  const minInput = document.getElementById("ultraInputMin");
  const secInput = document.getElementById("ultraInputSec");
  const min = parseFloat(minInput.value) || 0;
  const sec = parseFloat(secInput.value) || 0;
  const val = min * 60 + sec;
  if (!isNaN(val) && val >= 0) {
    ultra = { delay: val };
    render();
  }
});

function onEnterClick(inputId, buttonId) {
  document.getElementById(inputId).addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById(buttonId).click();
  });
}
onEnterClick("ffMin", "ffBtn");
onEnterClick("ffSec", "ffBtn");
onEnterClick("ultraInputMin", "ultraBtn");
onEnterClick("ultraInputSec", "ultraBtn");

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Sure to reset game clock?")) return;
  gameStartReal = Date.now();
  manualOffset = INITIAL_GAME_CLOCK;
  ultra = null;
  isPaused = false;
  pausedElapsed = 0;
  document.getElementById("pauseBtn").textContent = "Pause Clock";
  document.getElementById("ultraInputMin").value = "";
  document.getElementById("ultraInputSec").value = "";
  document.getElementById("ffMin").value = "";
  document.getElementById("ffSec").value = "20";
  render();
});

function updateFilterBadge() {
  const btn = document.getElementById("filterBtn");
  btn.textContent =
    hiddenIds.size > 0
      ? `Filter Events (${hiddenIds.size} hidden) ▾`
      : "Filter Events ▾";
}

function buildFilterMenu() {
  const menu = document.getElementById("filterMenu");
  const items = PERIODIC_EVENTS.map((ev) => ({ id: ev.id, name: ev.name }));
  items.push({ id: ULTRA_ID, name: "Ultra" });

  items.forEach((item) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !hiddenIds.has(item.id);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) hiddenIds.delete(item.id);
      else hiddenIds.add(item.id);
      saveHiddenIds();
      updateFilterBadge();
      render();
    });
    label.appendChild(checkbox);
    label.append(item.name);
    menu.appendChild(label);
  });
}

document.getElementById("filterBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("filterMenu").classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (!document.getElementById("filterWrap").contains(e.target)) {
    document.getElementById("filterMenu").classList.remove("open");
  }
});

function buildSoundMenu() {
  const menu = document.getElementById("soundMenu");
  menu.innerHTML = "";

  const previewRow = document.createElement("div");
  previewRow.className = "preview-row";
  SOUND_PRESETS.forEach((preset) => {
    const btn = document.createElement("button");
    btn.textContent = "▶ " + preset.label;
    btn.addEventListener("click", () => playTone(preset.id));
    previewRow.appendChild(btn);
  });
  menu.appendChild(previewRow);

  const items = PERIODIC_EVENTS.map((ev) => ({ id: ev.id, name: ev.name }));
  items.push({ id: ULTRA_ID, name: "Ultra" });

  const actionsRow = document.createElement("div");
  actionsRow.className = "sound-actions";
  const allOnBtn = document.createElement("button");
  allOnBtn.textContent = "All On";
  allOnBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    items.forEach((item) => {
      if (!soundSettings[item.id]) {
        soundSettings[item.id] = {
          enabled: true,
          offsetSec: 10,
          soundId: SOUND_PRESETS[0].id,
        };
      } else {
        soundSettings[item.id].enabled = true;
      }
    });
    saveSoundSettings();
    buildSoundMenu();
  });
  const allOffBtn = document.createElement("button");
  allOffBtn.textContent = "All Off";
  allOffBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    items.forEach((item) => {
      if (soundSettings[item.id]) soundSettings[item.id].enabled = false;
    });
    saveSoundSettings();
    buildSoundMenu();
  });
  actionsRow.append(allOnBtn, allOffBtn);
  menu.appendChild(actionsRow);

  items.forEach((item) => {
    if (!soundSettings[item.id]) {
      soundSettings[item.id] = {
        enabled: false,
        offsetSec: 10,
        soundId: SOUND_PRESETS[0].id,
      };
    }
    const cfg = soundSettings[item.id];

    const row = document.createElement("div");
    row.className = "sound-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = cfg.enabled;

    const name = document.createElement("span");
    name.className = "ev-name";
    name.textContent = item.name;

    const offsetSelect = document.createElement("select");
    OFFSET_OPTIONS.forEach((sec) => {
      const opt = document.createElement("option");
      opt.value = sec;
      opt.textContent = sec + "s before";
      offsetSelect.appendChild(opt);
    });
    offsetSelect.value = cfg.offsetSec;

    const soundSelect = document.createElement("select");
    SOUND_PRESETS.forEach((preset) => {
      const opt = document.createElement("option");
      opt.value = preset.id;
      opt.textContent = preset.label;
      soundSelect.appendChild(opt);
    });
    soundSelect.value = cfg.soundId;

    const previewBtn = document.createElement("button");
    previewBtn.className = "preview-btn";
    previewBtn.textContent = "▶";
    previewBtn.addEventListener("click", () => playTone(soundSelect.value));

    checkbox.addEventListener("change", () => {
      cfg.enabled = checkbox.checked;
      saveSoundSettings();
    });
    offsetSelect.addEventListener("change", () => {
      cfg.offsetSec = parseInt(offsetSelect.value, 10);
      saveSoundSettings();
    });
    soundSelect.addEventListener("change", () => {
      cfg.soundId = soundSelect.value;
      saveSoundSettings();
    });

    row.append(checkbox, name, offsetSelect, soundSelect, previewBtn);
    menu.appendChild(row);
  });
}

document.getElementById("soundBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("soundMenu").classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (!document.getElementById("soundWrap").contains(e.target)) {
    document.getElementById("soundMenu").classList.remove("open");
  }
});

document.getElementById("filterAllBtn").addEventListener("click", () => {
  hiddenIds.clear();
  document
    .querySelectorAll("#filterMenu input[type=checkbox]")
    .forEach((cb) => (cb.checked = true));
  saveHiddenIds();
  updateFilterBadge();
  render();
});
document.getElementById("filterNoneBtn").addEventListener("click", () => {
  const items = PERIODIC_EVENTS.map((ev) => ev.id).concat([ULTRA_ID]);
  items.forEach((id) => hiddenIds.add(id));
  document
    .querySelectorAll("#filterMenu input[type=checkbox]")
    .forEach((cb) => (cb.checked = false));
  saveHiddenIds();
  updateFilterBadge();
  render();
});
buildFilterMenu();
updateFilterBadge();
buildSoundMenu();
renderStatic();
render();
setInterval(render, 250);
