export const PERSONAS = {
  tradie: {
    label: "Tradie",
    openers: ["Righto mate,", "Yeah nah,", "Look, mate,", "Too easy.", "Listen here, champion,"],
    closers: ["Sorted.", "Job done.", "No dramas.", "She'll be right.", "That's the official ruling."],
    flavour: ["Give it a proper crack", "don't carry on like a pork chop", "measure twice and have a smoko once"]
  },
  bush: {
    label: "Bush Oracle",
    openers: ["Out where the bitumen ends,", "The kookaburrs reckon", "By the old gum tree,"],
    closers: ["That's bush law.", "The galahs have spoken.", "Take water and tell someone where you're going."],
    flavour: ["watch the weather", "keep an eye on the horizon", "never trust a quiet magpie"]
  },
  bogan: {
    label: "Bogan Philosopher",
    openers: ["Oi, legend,", "Mate, honestly,", "Nah yeah, hear me out:"],
    closers: ["Absolute scenes.", "That's culture, mate.", "Put it on a bumper sticker."],
    flavour: ["send it responsibly", "keep the sunnies on", "respect the servo pie"]
  },
  grandma: {
    label: "Aussie Grandma",
    openers: ["Darling,", "Now listen, love,", "Oh, honestly,"],
    closers: ["And take a cardigan.", "I've packed you something to eat.", "Ring me when you get there."],
    flavour: ["have a proper meal first", "use the good container", "don't make me worry"]
  },
  publicServant: {
    label: "Public Servant",
    openers: ["Pursuant to subsection Yeah-Nah,", "The Department advises that", "Following extensive consultation,"],
    closers: ["No further correspondence will be entered into.", "This advice is non-binding but emotionally correct.", "Please retain this response for tax purposes."],
    flavour: ["complete Form 27-B", "allow six to eight business smoko breaks", "consult the relevant mate"]
  },
  footyCoach: {
    label: "Retired Footy Coach",
    openers: ["Eyes up, mate.", "Simple footy:", "Let's get back to basics."],
    closers: ["One week at a time.", "Full credit to the question.", "Now recover properly."],
    flavour: ["win the contested ball", "stick to the structures", "show a bit of ticker"]
  }
};

const seriousRules = [
  {
    pattern: /\b(suicide|kill myself|self harm|overdose)\b/i,
    answer: "This one is serious, mate. Please contact emergency services or a crisis support service now, and stay with someone you trust. This app is not the right tool for immediate help.",
    category: "Urgent safety"
  },
  {
    pattern: /\b(chest pain|can't breathe|cannot breathe|stroke|severe bleeding|unconscious)\b/i,
    answer: "That may be a medical emergency. Call your local emergency number now. Do not rely on this comedy app for urgent medical advice.",
    category: "Medical emergency"
  },
  {
    pattern: /\b(domestic violence|abuse|being attacked|someone is hurting me)\b/i,
    answer: "Your safety comes first. Contact emergency services or a trusted local support service, and move to a safer place if you can do so without increasing danger.",
    category: "Personal safety"
  }
];

const categories = [
  {
    name: "Alcohol",
    pattern: /\b(beer|beers|goon|rum|wine|drunk|drink|drinks|booze|stubby|stubbies)\b/i,
    responses: [
      "If you're driving, the official number is zero. If you're hosting, bring enough to share and enough water to remain employable tomorrow.",
      "One box is hospitality. Two boxes is infrastructure. Three boxes requires council approval.",
      "The correct amount is less than the amount that makes tomorrow your enemy.",
      "Hydrate, eat first, and don't turn a social event into an archaeological dig through your dignity."
    ]
  },
  {
    name: "Cars",
    pattern: /\b(car|ute|burnout|tyre|tire|engine|holden|ford|toyota|driving)\b/i,
    responses: [
      "The best car is the one you can afford, maintain and park without becoming a neighbourhood Facebook post.",
      "For a burnout: don't. For getting home reliably: something serviced, insured and not held together by cable ties.",
      "Horsepower is temporary. A clean service history is forever.",
      "Any vehicle can become expensive if you ignore a noise long enough."
    ]
  },
  {
    name: "Food",
    pattern: /\b(food|dinner|barbecue|bbq|sausage|snag|vegemite|pie|chips|cook|cooking)\b/i,
    responses: [
      "Bring something useful, not a packet of coriander and a speech about fermentation.",
      "A barbecue is ready when one person says it is and four others disagree.",
      "Vegemite is applied like legal liability: thinly and with full awareness of the consequences.",
      "Add salt, lower the heat, and stop opening the oven every thirty seconds."
    ]
  },
  {
    name: "Work",
    pattern: /\b(work|boss|job|meeting|email|career|office|deadline|promotion)\b/i,
    responses: [
      "Send the email, keep it factual, and don't write anything that would look crook projected in court.",
      "A meeting without an agenda is just workplace captivity.",
      "Do the important bit before checking whether anyone has replied 'Thanks!' to the group email.",
      "Ask for the promotion with evidence, not interpretive dance."
    ]
  },
  {
    name: "Relationships",
    pattern: /\b(date|dating|partner|wife|husband|girlfriend|boyfriend|relationship|marry|love)\b/i,
    responses: [
      "Say what you mean, listen properly, and don't make your partner submit a freedom-of-information request for your feelings.",
      "If the message needs three mates and a whiteboard to interpret, ask directly.",
      "Apologise for the actual thing, not for 'how it was received'.",
      "Romance is mostly remembering details and not being a galah at critical moments."
    ]
  },
  {
    name: "Animals",
    pattern: /\b(spider|snake|drop bear|kangaroo|magpie|shark|crocodile|emu)\b/i,
    responses: [
      "Give it space, don't poke it, and accept that you're probably not the apex species in this interaction.",
      "Back away calmly. Screaming is optional but rarely strategic.",
      "The wildlife has reviewed your risk assessment and found it optimistic.",
      "Do not attempt diplomacy with anything that has more legs than your immediate family."
    ]
  },
  {
    name: "Technology",
    pattern: /\b(ai|computer|phone|wifi|internet|app|password|software|chatgpt|robot)\b/i,
    responses: [
      "Turn it off and on again, then act surprised when that fixes forty years of engineering.",
      "Use a password manager. 'Password123' is not a personality.",
      "The cloud is just somebody else's computer wearing business casual.",
      "Update it before complaining. Back it up before updating. Complain anyway."
    ]
  },
  {
    name: "Money",
    pattern: /\b(money|price|cost|budget|save|saving|loan|mortgage|rent|expensive)\b/i,
    responses: [
      "If you can't explain the fee, don't pay it until someone can.",
      "Budget for the boring thing first. Future you is already tired of present you.",
      "A bargain you don't need is an invoice wearing a party hat.",
      "Sleep on large purchases. If it sells overnight, congratulations: you avoided a panic-buy."
    ]
  },
  {
    name: "General",
    pattern: /.*/i,
    responses: [
      "The sensible answer is obvious, which is precisely why nobody wants it.",
      "Give it a crack, but not the sort of crack that requires an incident report.",
      "You're asking the right question. Unfortunately, you've asked the wrong department.",
      "Proceed with confidence approximately proportional to your actual preparation.",
      "Mate, that's not a problem. That's an emerging lifestyle.",
      "You could do that. You could also put a screen door on a submarine.",
      "Consult someone qualified, then ignore the loudest bloke in the comments."
    ]
  }
];

const easterEggs = [
  { pattern: /\bemu war\b/i, response: "ACCESS DENIED. CLASSIFIED. THE EMUS RETAIN AIR SUPERIORITY.", category: "Classified history", effect: "classified" },
  { pattern: /\bnew zealand\b/i, response: "Close enough. Please direct all complaints across the ditch.", category: "Diplomacy", effect: "none" },
  { pattern: /\bdrop bear\b/i, response: "Remain calm. Apply Vegemite behind the ears. Do not look up.", category: "Wildlife warning", effect: "shake" },
  { pattern: /^\s*spider\s*$/i, response: "Burn the house down. This is not legal advice.", category: "Property management", effect: "shake" },
  { pattern: /\bbunnings\b/i, response: "Consultation complete. Sausage acquired. Project scope has doubled.", category: "Infrastructure", effect: "none" },
  { pattern: /\bprime minister\b/i, response: "Permission denied. You're not the Prime Minister. Probably.", category: "Government access", effect: "classified" }
];

function pick(list, random = Math.random) {
  return list[Math.floor(random() * list.length)];
}

export function classify(input) {
  for (const rule of seriousRules) {
    if (rule.pattern.test(input)) return { type: "serious", ...rule };
  }
  for (const egg of easterEggs) {
    if (egg.pattern.test(input)) return { type: "easterEgg", ...egg };
  }
  const category = categories.find(item => item.pattern.test(input)) ?? categories.at(-1);
  return { type: "normal", category };
}

export function generateResponse(input, personaKey = "tradie", random = Math.random) {
  const clean = String(input ?? "").trim();
  if (!clean) {
    return {
      text: "Mate, you've submitted a premium-grade blank. Type a question first.",
      category: "Administrative error",
      confidence: "Unreasonably high",
      effect: "none",
      serious: false
    };
  }

  const result = classify(clean);

  if (result.type === "serious") {
    return {
      text: result.answer,
      category: result.category,
      confidence: "Serious",
      effect: "none",
      serious: true
    };
  }

  if (result.type === "easterEgg") {
    return {
      text: result.response,
      category: result.category,
      confidence: "Classified",
      effect: result.effect,
      serious: false
    };
  }

  const persona = PERSONAS[personaKey] ?? PERSONAS.tradie;
  const body = pick(result.category.responses, random);
  const opener = pick(persona.openers, random);
  const closer = pick(persona.closers, random);
  const flavour = random() > 0.72 ? ` Remember: ${pick(persona.flavour, random)}.` : "";

  return {
    text: `${opener} ${body}${flavour} ${closer}`,
    category: result.category.name,
    confidence: pick(["Questionable", "Pub-tested", "About 73%", "Emotionally certain", "Pending mate review"], random),
    effect: "none",
    serious: false
  };
}

export const LOADING_MESSAGES = [
  "Consulting the bloke at Bunnings...",
  "Checking with the servo...",
  "Waiting for Centrelink...",
  "Calling your uncle...",
  "Looking for reception in Woop Woop...",
  "Submitting Form YEAH-NAH-27B...",
  "Asking Damo to keep it down...",
  "Cross-referencing the pub chalkboard..."
];
