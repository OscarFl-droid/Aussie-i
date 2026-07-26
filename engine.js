const serious = [
  {pattern:/\b(suicide|kill myself|self harm|overdose)\b/i,joke:"This one is not a joke. Contact emergency services or a crisis support service now, and stay with someone you trust.",plain:"Get immediate help now.",serious:true},
  {pattern:/\b(chest pain|can't breathe|cannot breathe|stroke|severe bleeding|unconscious)\b/i,joke:"That may be a medical emergency. Call emergency services now. Do not wait for a bloke on the internet to finish his sentence.",plain:"Call emergency services now.",serious:true}
];

const topics = {
  funeral:/\b(funeral|wake|memorial|cremation|burial)\b/i,
  alcohol:/\b(goon|beer|wine|booze|drink|slab|carton|stubby|rum)\b/i,
  bbq:/\b(bbq|barbecue|barbeque|snag|sausage)\b/i,
  work:/\b(work|boss|job|office|meeting|email|deadline|promotion|colleague)\b/i,
  relationship:/\b(date|dating|partner|wife|husband|girlfriend|boyfriend|relationship|love|argument|break up|marry)\b/i,
  money:/\b(money|price|cost|budget|save|loan|mortgage|rent|expensive|buy|purchase)\b/i,
  tech:/\b(ai|computer|phone|wifi|internet|app|password|software|laptop|printer)\b/i,
  wildlife:/\b(spider|snake|kangaroo|magpie|shark|crocodile|emu|drop bear)\b/i,
  food:/\b(food|cook|dinner|lunch|breakfast|recipe|eat|vegemite|pie|chips)\b/i
};

const combos = [
  {
    match:t=>t.funeral&&t.alcohol,
    answers:[
      ["None, unless the deceased specifically requested a cask-shaped guard of honour.","Bring no alcohol unless the family has clearly asked for it."],
      ["One bottle of something decent, if invited. A box of goon turns grief into logistics.","Bring a modest, appropriate drink only if alcohol is expected."],
      ["A funeral is not Schoolies with flowers. Bring condolences, not volume.","Prioritise support for the family rather than alcohol."],
      ["Zero boxes. You are attending a funeral, not supplying a regional cricket final.","Do not bring bulk alcohol unless explicitly requested by the organisers."],
      ["Take food, flowers or yourself. Goon is not a sympathy arrangement.","Bring something supportive and appropriate instead."],
      ["If the wake has a bar, use that. Do not arrive like Dan Murphy’s has sent a field team.","Use the venue’s arrangements rather than bringing bulk alcohol."]
    ]
  },
  {
    match:t=>t.bbq&&t.alcohol,
    answers:[
      ["One carton if you were asked. Two bags of ice if you want to be remembered as useful.","Bring a moderate amount and include ice."],
      ["Bring less grog than your confidence suggests and more ice than the host claims to own.","Keep alcohol moderate and bring practical supplies."],
      ["A slab says guest. Three says the neighbourhood is about to learn your middle name.","Bring a reasonable amount, not bulk alcohol."]
    ]
  },
  {
    match:t=>t.work&&t.alcohol,
    answers:[
      ["If this involves the work Christmas party, stop one drink before you become honest about management.","Drink moderately and avoid discussing grievances while drinking."],
      ["Do not network after the point where everyone becomes ‘mate’.","Keep alcohol intake low at work events."],
      ["Your career does not need a karaoke-based stress test.","Avoid behaviour at work events that could affect your reputation."]
    ]
  }
];

const single = {
  funeral:[
    ["Show up, be useful and do not make the day about your relationship with grief.","Offer quiet practical support to the family."],
    ["Say something simple and kind. Nobody needs a twelve-minute origin story about how you met the deceased.","Keep condolences brief and sincere."],
    ["Food is useful. Opinions about funeral arrangements are not.","Bring practical support and avoid unsolicited criticism."],
    ["Wear something respectful and arrive early enough not to become part of the ceremony.","Dress appropriately and arrive on time."]
  ],
  alcohol:[
    ["If you are driving, the number is zero. That is not moralising; that is avoiding a very expensive walk home.","Do not drink if you are driving."],
    ["One carton says guest. Three says the neighbours will learn your middle name.","Keep the amount moderate."],
    ["Water between drinks. Your future head has lodged a formal request.","Alternate alcoholic drinks with water."],
    ["You can send it or remember it. Pick one.","Drink moderately if you want to stay in control."]
  ],
  bbq:[
    ["Bring ice. Meat gets remembered. Ice is discovered missing when everyone is already holding warm beer.","Bring ice; it is usually the most useful contribution."],
    ["‘Bring a plate’ means food, not one lonely ceramic plate like you’ve misunderstood the nation.","Take a prepared dish to share."],
    ["Two bags of ice and no guitar. You’ll be invited back.","Bring practical supplies and avoid dominating the event."],
    ["Offer to clean up before everyone develops sudden lower-back trouble.","Help with cleanup at the end."]
  ],
  work:[
    ["Send it tomorrow. Tonight-you is brave, but tomorrow-you has to walk past their desk.","Reread it in the morning before sending."],
    ["A meeting with no decision is just a hostage situation with biscuits.","Ask what decision is needed, who owns it and by when."],
    ["Reply-all is not communication. It is a flare gun used indoors.","Send only to people who need the message."],
    ["Your boss saying ‘quick chat’ has the same energy as a pilot saying ‘small technical issue’.","Prepare the facts and stay calm."]
  ],
  relationship:[
    ["Say the actual thing. Hinting is just communication with the warranty removed.","Speak directly and clearly."],
    ["If they only text after midnight, you are not in a romance. You are in a late trading arrangement.","Look for consistent effort."],
    ["You do not need to win the argument. You need to still like each other after it.","Resolve the issue rather than scoring points."],
    ["An apology with ‘if’ in it is just a complaint wearing a cardigan.","Acknowledge what you did and its impact."]
  ],
  money:[
    ["A bargain you do not need is just clutter that beat you in an argument.","Do not buy it merely because it is discounted."],
    ["Sleep on it. If the urge survives breakfast, at least it has done some paperwork.","Delay major purchases and reassess tomorrow."],
    ["Ask what it costs to own, not what it costs to leave the shop smiling.","Include maintenance and running costs."],
    ["If buying it empties the emergency fund, the emergency is now the thing you bought.","Keep an emergency buffer intact."]
  ],
  tech:[
    ["Turn it off and on again. Forty years of engineering and this is still the national anthem.","Restart the device first."],
    ["The printer can smell urgency. Approach without fear.","Check paper, connection, queue and restart it."],
    ["The cloud is just someone else’s computer wearing a lanyard.","Keep backups."],
    ["Use a password manager. Your dog’s name plus 1 is not cybersecurity; it is a confession.","Use unique passwords."]
  ],
  wildlife:[
    ["Give it space. Wildlife does not recognise confidence as a qualification.","Back away and avoid provoking it."],
    ["Do not square up to a kangaroo. It has been training legs since birth.","Keep your distance."],
    ["If the spider has vanished behind the cupboard, the cupboard has changed ownership.","Close off the area or call someone competent."],
    ["The emu has already defeated organised government. Adjust your tone.","Keep a respectful distance."]
  ],
  food:[
    ["Use less Vegemite than your heart suggests and more butter than your doctor suggests.","Spread Vegemite thinly over buttered toast."],
    ["If dinner needs three specialty shops and a blowtorch, that is a project, not a Tuesday.","Choose a simpler recipe."],
    ["A meat pie is not a handheld soup. Let it cool.","Wait before eating very hot filled pastries."],
    ["Salt the food, not your family.","Season gradually and taste as you go."]
  ],
  general:[
    ["That sounds like a good idea right up until the part where it happens.","Pause and examine the practical risks."],
    ["You already know the answer. You are just shopping for a witness.","Trust the sensible conclusion you have already reached."],
    ["Give it a crack, but leave enough dignity in reserve to stop.","Set a clear stopping point."],
    ["Start with the smallest version that can fail without becoming family folklore.","Test the idea on a small scale first."]
  ]
};

export const loading = [
  "Checking whether that is socially survivable...",
  "Running it past one sensible adult...",
  "Removing unnecessary enthusiasm...",
  "Consulting the barbecue committee...",
  "Checking whether this is a question or an insurance claim...",
  "Asking someone’s uncle..."
];

let recent = [];
let lastAnswers = single.general;

function pick(list, random=Math.random){
  let available = list.filter(([j])=>!recent.includes(j));
  if(!available.length) available = list;
  const item = available[Math.floor(random()*available.length)];
  recent.push(item[0]);
  if(recent.length>12) recent.shift();
  return item;
}

function detect(q){
  const found={};
  for(const [k,p] of Object.entries(topics)) found[k]=p.test(q);
  return found;
}

export function answerQuestion(input, random=Math.random){
  const q=String(input??"").trim();
  if(!q) return {joke:"You have submitted absolutely nothing. Efficient, but difficult to advise on.",plain:"Enter a question first.",serious:false};

  for(const r of serious) if(r.pattern.test(q)) return r;

  const t=detect(q);
  const combo=combos.find(c=>c.match(t));
  if(combo){
    lastAnswers=combo.answers;
    const [joke,plain]=pick(combo.answers,random);
    return {joke,plain,serious:false};
  }

  const key=Object.keys(single).find(k=>k!=="general"&&t[k])||"general";
  lastAnswers=single[key];
  const [joke,plain]=pick(lastAnswers,random);
  return {joke,plain,serious:false};
}

export function anotherAnswer(random=Math.random){
  const [joke,plain]=pick(lastAnswers,random);
  return {joke,plain,serious:false};
}
