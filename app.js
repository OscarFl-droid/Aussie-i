import { generateResponse, PERSONAS, LOADING_MESSAGES } from "./engine.js";

const $ = selector => document.querySelector(selector);
const state = JSON.parse(localStorage.getItem("australian-intelligence-state") || "{}");
state.questionCount ??= 0;
state.achievements ??= [];
state.personality ??= "tradie";
state.autoSpeak ??= false;
state.soundEffects ??= true;
state.voiceRate ??= 1;

const achievements = [
  { id: "first", icon: "🏆", name: "First Stubby", description: "Ask your first question.", test: s => s.questionCount >= 1 },
  { id: "ten", icon: "🦘", name: "Regular Customer", description: "Process 10 enquiries.", test: s => s.questionCount >= 10 },
  { id: "vegemite", icon: "🍞", name: "National Treasure", description: "Ask about Vegemite.", test: (_, q) => /vegemite/i.test(q) },
  { id: "bunnings", icon: "🔨", name: "Bunnings Expert", description: "Invoke the sacred hardware warehouse.", test: (_, q) => /bunnings/i.test(q) },
  { id: "emu", icon: "🪶", name: "Classified Historian", description: "Ask about the Emu War.", test: (_, q) => /emu war/i.test(q) },
  { id: "dropbear", icon: "🐨", name: "Drop Bear Survivor", description: "Receive critical wildlife advice.", test: (_, q) => /drop bear/i.test(q) },
  { id: "allPersonas", icon: "🎭", name: "Department Hopper", description: "Use every personality mode.", test: s => Object.keys(PERSONAS).every(p => (s.personasUsed || []).includes(p)) }
];

const questionForm = $("#questionForm");
const question = $("#question");
const answer = $("#answer");
const answerContent = $("#answerContent");
const loading = $("#loading");
const loadingText = $("#loadingText");
const personality = $("#personality");
const modeStatus = $("#modeStatus");
const micButton = $("#micButton");
const settingsDialog = $("#settingsDialog");
const achievementsDialog = $("#achievementsDialog");
const toast = $("#toast");

let currentAnswer = answer.textContent;
let deferredInstallPrompt = null;
let recognition = null;

function saveState() {
  localStorage.setItem("australian-intelligence-state", JSON.stringify(state));
}

function updateUI() {
  personality.value = state.personality;
  modeStatus.textContent = `Personality: ${PERSONAS[state.personality].label}`;
  $("#questionCount").textContent = state.questionCount;
  $("#achievementCount").textContent = state.achievements.length;
  $("#autoSpeak").checked = state.autoSpeak;
  $("#soundEffects").checked = state.soundEffects;
  $("#voiceRate").value = state.voiceRate;
  renderAchievements();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2600);
}

function renderAchievements() {
  const list = $("#achievementList");
  list.replaceChildren();
  for (const item of achievements) {
    const unlocked = state.achievements.includes(item.id);
    const row = document.createElement("div");
    row.className = `achievement${unlocked ? "" : " locked"}`;
    row.innerHTML = `
      <span class="achievement-icon">${unlocked ? item.icon : "🔒"}</span>
      <span><strong>${item.name}</strong><small>${item.description}</small></span>`;
    list.append(row);
  }
}

function unlockAchievements(q) {
  state.personasUsed ??= [];
  if (!state.personasUsed.includes(state.personality)) state.personasUsed.push(state.personality);

  const newlyUnlocked = achievements.filter(item =>
    !state.achievements.includes(item.id) && item.test(state, q)
  );

  for (const item of newlyUnlocked) {
    state.achievements.push(item.id);
    showToast(`Achievement unlocked: ${item.name}`);
  }
}

function playDepartmentPing() {
  if (!state.soundEffects) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 523.25;
  gain.gain.setValueAtTime(.045, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .16);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + .17);
}

function selectAustralianVoice() {
  const voices = speechSynthesis.getVoices();
  return voices.find(v => /^en-AU$/i.test(v.lang))
      || voices.find(v => /austral/i.test(v.name))
      || voices.find(v => /^en-/i.test(v.lang))
      || voices[0];
}

function speak(text = currentAnswer) {
  if (!("speechSynthesis" in window)) {
    showToast("Speech synthesis is not supported in this browser.");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-AU";
  utterance.rate = Number(state.voiceRate);
  const voice = selectAustralianVoice();
  if (voice) utterance.voice = voice;
  speechSynthesis.speak(utterance);
}

async function processQuestion(text) {
  const clean = text.trim();
  if (!clean) {
    question.reportValidity();
    return;
  }

  answerContent.classList.add("hidden");
  loading.classList.remove("hidden");
  loadingText.textContent = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];

  await new Promise(resolve => setTimeout(resolve, 650 + Math.random() * 850));

  const result = generateResponse(clean, state.personality);
  currentAnswer = result.text;
  answer.textContent = result.text;
  $("#categoryBadge").textContent = `Category: ${result.category}`;
  $("#confidenceBadge").textContent = `Confidence: ${result.confidence}`;

  state.questionCount += 1;
  unlockAchievements(clean);
  saveState();
  updateUI();

  loading.classList.add("hidden");
  answerContent.classList.remove("hidden");
  playDepartmentPing();

  if (result.effect === "shake") {
    document.body.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }],
      { duration: 380, iterations: 2 }
    );
  }
  if (result.effect === "classified") {
    answer.animate([{ filter: "blur(5px)" }, { filter: "blur(0)" }], { duration: 700 });
  }

  if (state.autoSpeak && !result.serious) speak();
}

questionForm.addEventListener("submit", event => {
  event.preventDefault();
  processQuestion(question.value);
});

$("#randomButton").addEventListener("click", () => {
  const samples = [
    "How many boxes of goon do I bring to a dinner party?",
    "What's the best car for a burnout?",
    "Should I send this email to my boss?",
    "How much Vegemite is too much?",
    "Tell me about the Emu War.",
    "There's a spider in the house.",
    "How do I fix the wifi?"
  ];
  question.value = samples[Math.floor(Math.random() * samples.length)];
  processQuestion(question.value);
});

personality.addEventListener("change", () => {
  state.personality = personality.value;
  state.personasUsed ??= [];
  if (!state.personasUsed.includes(state.personality)) state.personasUsed.push(state.personality);
  unlockAchievements("");
  saveState();
  updateUI();
});

$("#speakButton").addEventListener("click", () => speak());
$("#copyButton").addEventListener("click", async () => {
  await navigator.clipboard.writeText(currentAnswer);
  showToast("Copied to clipboard.");
});
$("#shareButton").addEventListener("click", async () => {
  const payload = { title: "Australian Intelligence", text: currentAnswer };
  if (navigator.share) await navigator.share(payload);
  else {
    await navigator.clipboard.writeText(currentAnswer);
    showToast("Sharing unavailable; copied instead.");
  }
});

$("#settingsButton").addEventListener("click", () => settingsDialog.showModal());
$("#achievementsButton").addEventListener("click", () => achievementsDialog.showModal());

$("#autoSpeak").addEventListener("change", e => { state.autoSpeak = e.target.checked; saveState(); });
$("#soundEffects").addEventListener("change", e => { state.soundEffects = e.target.checked; saveState(); });
$("#voiceRate").addEventListener("input", e => { state.voiceRate = Number(e.target.value); saveState(); });
$("#resetButton").addEventListener("click", () => {
  localStorage.removeItem("australian-intelligence-state");
  location.reload();
});

function setupRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    micButton.disabled = true;
    micButton.title = "Voice input is unavailable in this browser";
    return;
  }

  recognition = new Recognition();
  recognition.lang = "en-AU";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    micButton.classList.add("listening");
    micButton.setAttribute("aria-label", "Stop voice input");
    showToast("Listening...");
  };
  recognition.onend = () => {
    micButton.classList.remove("listening");
    micButton.setAttribute("aria-label", "Start voice input");
  };
  recognition.onerror = event => showToast(`Voice input error: ${event.error}`);
  recognition.onresult = event => {
    const transcript = Array.from(event.results).map(r => r[0].transcript).join("");
    question.value = transcript;
    if (event.results[event.results.length - 1].isFinal) processQuestion(transcript);
  };

  micButton.addEventListener("click", () => {
    if (micButton.classList.contains("listening")) recognition.stop();
    else recognition.start();
  });
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $("#installButton").classList.remove("hidden");
});
$("#installButton").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  $("#installButton").classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

speechSynthesis?.addEventListener?.("voiceschanged", () => {});
setupRecognition();
updateUI();
