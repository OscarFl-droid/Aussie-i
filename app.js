import{answerQuestion,anotherAnswer,loading}from"./engine.js";
const $=s=>document.querySelector(s);
const state=JSON.parse(localStorage.getItem("aussie-ai-v13")||"{}");
state.voiceURI??="";state.voiceRate??=.9;state.voicePitch??=.9;
let voices=[],recognition=null,current={joke:"Go on then.",plain:""};

function save(){localStorage.setItem("aussie-ai-v13",JSON.stringify(state))}
function toast(t){const e=$("#toast");e.textContent=t;e.classList.remove("hidden");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.add("hidden"),2200)}
function populateVoices(){
  if(!("speechSynthesis"in window))return;
  voices=speechSynthesis.getVoices();
  const s=$("#voiceSelect");s.replaceChildren();
  const rank=v=>(v.lang==="en-AU"?0:/^en-/.test(v.lang)?1:2)+(/male|daniel|lee|gordon|aaron/i.test(v.name)?-.25:0);
  const list=[...voices].sort((a,b)=>rank(a)-rank(b)||a.name.localeCompare(b.name));
  for(const v of list){const o=document.createElement("option");o.value=v.voiceURI;o.textContent=`${v.name} — ${v.lang}${v.default?" (default)":""}`;s.append(o)}
  if(state.voiceURI&&voices.some(v=>v.voiceURI===state.voiceURI))s.value=state.voiceURI;
  else{const v=list.find(v=>v.lang==="en-AU"&&/male|daniel|lee|gordon|aaron/i.test(v.name))||list.find(v=>v.lang==="en-AU")||list.find(v=>/^en-/.test(v.lang))||list[0];if(v){state.voiceURI=v.voiceURI;s.value=v.voiceURI;save()}}
}
function selectedVoice(){return voices.find(v=>v.voiceURI===state.voiceURI)||voices.find(v=>v.lang==="en-AU")||voices[0]}
function speak(text=current.joke){
  if(!("speechSynthesis"in window)){toast("Speech is unavailable.");return}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text),v=selectedVoice();
  if(v){u.voice=v;u.lang=v.lang}else u.lang="en-AU";
  u.rate=+state.voiceRate;u.pitch=+state.voicePitch;speechSynthesis.speak(u)
}
function render(r){current=r;$("#answer").textContent=r.joke;$("#plainAnswer").textContent=r.plain?`Actual answer: ${r.plain}`:""}
async function ask(){
  const q=$("#question").value.trim();
  if(!q){toast("Ask something first.");return}
  $("#answerContent").classList.add("hidden");$("#loading").classList.remove("hidden");
  $("#loadingText").textContent=loading[Math.floor(Math.random()*loading.length)];
  await new Promise(r=>setTimeout(r,380+Math.random()*420));
  render(answerQuestion(q));
  $("#loading").classList.add("hidden");$("#answerContent").classList.remove("hidden")
}
$("#askButton").onclick=ask;
$("#againButton").onclick=()=>render(anotherAnswer());
$("#speakButton").onclick=()=>speak();
$("#question").addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key==="Enter")ask()});
$("#settingsButton").onclick=()=>{populateVoices();$("#settingsDialog").showModal()};
$("#voiceSelect").onchange=e=>{state.voiceURI=e.target.value;save()};
$("#voiceRate").value=state.voiceRate;$("#voicePitch").value=state.voicePitch;
$("#voiceRate").oninput=e=>{state.voiceRate=+e.target.value;save()};
$("#voicePitch").oninput=e=>{state.voicePitch=+e.target.value;save()};
$("#testVoiceButton").onclick=()=>speak("G'day. This is the best voice your device has made available.");
function setupRecognition(){
  const R=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!R){$("#micButton").disabled=true;$("#micButton").textContent="Voice unavailable";return}
  recognition=new R;recognition.lang="en-AU";recognition.interimResults=true;
  recognition.onstart=()=>$("#micButton").textContent="■ Stop";
  recognition.onend=()=>$("#micButton").textContent="🎙 Speak";
  recognition.onerror=e=>toast(`Voice input: ${e.error}`);
  recognition.onresult=e=>{const t=[...e.results].map(r=>r[0].transcript).join("");$("#question").value=t;if(e.results[e.results.length-1].isFinal)ask()};
  $("#micButton").onclick=()=>$("#micButton").textContent.includes("Stop")?recognition.stop():recognition.start()
}
if("speechSynthesis"in window){speechSynthesis.onvoiceschanged=populateVoices;populateVoices()}
setupRecognition();
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
