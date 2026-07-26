export const PERSONAS = {
  tradie: {label:"Practical Works Division",description:"Practical, dry and mildly suspicious of anything requiring a subscription."},
  bush: {label:"Regional Wisdom Unit",description:"Measured bush logic, weather awareness and occasional hostility from local fauna."},
  bogan: {label:"Lifestyle Compliance Branch",description:"Confident social analysis delivered from beside a questionable outdoor setting."},
  grandma: {label:"Family Standards Authority",description:"Affectionate judgement, food, cardigans and flawless memory for your mistakes."},
  publicServant: {label:"Administrative Response Office",description:"Procedural absurdity, forms, determinations and delays of national significance."},
  footyCoach: {label:"Performance and Ticker Commission",description:"Blunt performance coaching with structures, recovery and full credit to everyone involved."}
};

const seriousRules=[
 {pattern:/\b(suicide|kill myself|self harm|overdose)\b/i,text:"This is serious. Contact emergency services or a crisis support service now, and stay with someone you trust. This comedy service is not appropriate for immediate help.",category:"Urgent safety"},
 {pattern:/\b(chest pain|can't breathe|cannot breathe|stroke|severe bleeding|unconscious)\b/i,text:"This may be a medical emergency. Call your local emergency number now. Do not rely on this comedy service for urgent medical advice.",category:"Medical emergency"},
 {pattern:/\b(domestic violence|being attacked|someone is hurting me|abuse at home)\b/i,text:"Your safety comes first. Contact emergency services or a trusted local support service, and move to a safer place if you can do so safely.",category:"Personal safety"}
];

const intents=[
 {
  id:"barbecue",pattern:/\b(bbq|barbecue|barbeque|snag|sausage|bring.*dinner|bring.*party)\b/i,
  replies:{
    tradie:["Bring ice. Everyone remembers meat after they've already bought it; nobody remembers ice until the esky is a warm plastic coffin.","Take bread, onions and something cold. Do not arrive with one boutique mustard and call yourself logistics.","Bring enough to be useful, not enough to make the host rearrange the shed."],
    bush:["Bring water as well as beer. A hot afternoon turns bravado into a headache with remarkable efficiency.","Take food that survives the drive, shade if there isn't any, and never assume the host has enough ice.","Bring what travels well. A salad that arrives as soup has failed its civic duty."],
    bogan:["A slab, ice and no acoustic guitar. That's how you become welcome twice.","Bring something everyone eats. This is not the moment to debut beetroot foam.","Take two bags of ice and act casual. You'll be treated like emergency services."],
    grandma:["Bring a proper salad, love. Not leaves in a bowl—something people can actually serve.","Take a plate, and make enough that the host can keep some. Also write your name under the container.","Bring dessert. People forgive almost anything when you arrive with pavlova."],
    publicServant:["Approved contributions are ice, bread, onions or a dessert capable of surviving transport. Interpretive salads require prior consultation.","Your attendance is conditionally approved subject to one practical contribution and zero unsolicited barbecue supervision.","Submit one useful item. Bringing only opinions may trigger a cost-recovery process."],
    footyCoach:["Play your role: ice, bread or dessert. We don't need six blokes all bringing sausages and calling it depth.","Win the one-percenters. Turn up on time, bring ice and help clean up.","Good barbecue sides create structure. Fancy garnish does not win contested possession."]
  }
 },
 {
  id:"alcohol",pattern:/\b(beer|beers|goon|wine|rum|drink|drunk|booze|stubby|slab)\b/i,
  replies:{
    tradie:["If you're driving, the number is zero. That's not nanny-state advice; that's avoiding a very expensive walk home.","Enough to share, not enough to begin explaining cryptocurrency to strangers.","The correct amount is the amount that leaves tomorrow as a functioning weekday."],
    bush:["Heat, distance and alcohol are a poor committee. Take water and decide who is driving before the first tin opens.","Out bush, dehydration arrives before good judgement does. Alternate with water and keep your keys out of the debate.","Drink slowly enough to notice the weather change."],
    bogan:["One carton says guest. Two says committee chair. Three says the neighbours will learn your middle name.","Have a feed first and nominate a driver before everyone becomes a transport expert.","You can send it or remember it. Pick one."],
    grandma:["Have something to eat first, darling, and leave the car where it is.","You do not need another drink merely because somebody has opened one near you.","Take water between drinks. I would prefer not to hear the story from your aunt."],
    publicServant:["Consumption is authorised only where transport arrangements have been documented before judgement deteriorates.","The Department recommends a zero-alcohol driving policy and a one-glass-at-a-time procurement model.","Any plan beginning with 'we'll work it out later' has failed preliminary assessment."],
    footyCoach:["Hydration, discipline, recovery. You can't perform Monday if Sunday is a missing persons inquiry.","Set the driver before bounce-down. Structures matter when fatigue enters the contest.","Don't chase the game. Pace yourself and finish with something left in the tank."]
  }
 },
 {
  id:"work",pattern:/\b(work|boss|job|meeting|email|career|office|deadline|promotion)\b/i,
  replies:{
    tradie:["Send the email once it says what happened, what you need and by when. Delete the paragraph written purely to prove you're annoyed.","A meeting without an agenda is just paid loitering.","Ask for the promotion with evidence. Enthusiasm is useful; invoices and outcomes are better."],
    bush:["Do the hard job while the day is cool. Administrative scrub grows back if you leave it.","Watch who stays calm when plans change. That's usually where the real competence is hiding.","Don't mistake noise for weather. The loudest person in the meeting may still be wrong."],
    bogan:["Reply-all is a weapon. Store it safely.","Never send an angry email at night. Draft it, sleep, then remove the paragraph that would become a screenshot.","If they want 'initiative', ask whether that includes authority or just unpaid panic."],
    grandma:["Be polite, be clear and keep a copy. People become forgetful when responsibility appears.","Ask directly, love. Waiting to be noticed is not a career strategy.","Take notes. You cannot rely on Darren remembering the part where he agreed."],
    publicServant:["The proposed meeting is declined pending evidence that an email would not have solved it.","Your request should identify the decision required, the responsible officer and the date by which everyone plans to pretend it was already understood.","Promotion applications supported only by 'working very hard' will be returned for measurable particulars."],
    footyCoach:["Control what you can: preparation, delivery and follow-up. Office politics is weather; your work is possession.","Go in with three outcomes and leave with owners and dates. Otherwise you've just held a team séance.","Don't wait for selection. Put runs on the board and make the conversation unavoidable."]
  }
 },
 {
  id:"relationship",pattern:/\b(date|dating|partner|wife|husband|girlfriend|boyfriend|relationship|marry|love|argument)\b/i,
  replies:{
    tradie:["Say the actual thing. Hinting is just subcontracting communication to someone without the plans.","Apologise for what you did, not for the other person's ability to notice it.","If every conversation needs three mates and a diagram, ask them directly."],
    bush:["A quiet patch is not always peace. Check whether you're listening or merely waiting for your turn.","Trust grows like a fence line: one straight post at a time, and everyone notices where you cut corners.","Don't make a permanent decision in temporary weather."],
    bogan:["If they only text after midnight, that's not mystery; that's rostered availability.","You cannot win an argument by collecting witnesses at the pub.","Romance is remembering the detail they assumed you ignored."],
    grandma:["Use your words, darling. Sulking is not a language the rest of us are required to study.","A good person can still be wrong for you. Finish kindly, not theatrically.","Listen without preparing your defence. It is very revealing."],
    publicServant:["The relationship remains viable subject to direct communication and withdrawal of passive-aggressive annexures.","An apology must identify the conduct, acknowledge impact and avoid the phrase 'if you felt'.","Repeated ambiguity constitutes an adverse service standard."],
    footyCoach:["Stay in the contest, own your mistake and stop appealing to the crowd.","You don't need to win every moment. You need the partnership functioning at full-time.","Clear call, clean hands, no hospital passes. Communication is a team skill."]
  }
 },
 {
  id:"technology",pattern:/\b(ai|computer|phone|wifi|internet|app|password|software|robot|laptop)\b/i,
  replies:{
    tradie:["Restart it, update it, then check the cable everyone swore was connected.","Use a password manager. 'Password123' is not simplicity; it's leaving the ute running at the shops.","Back it up before touching anything described online as 'easy'."],
    bush:["When the signal drops, move uphill before inventing a conspiracy.","Technology is reliable right up until weather, dust or a relative presses every button.","Keep a paper copy of anything you may need after the battery gives up."],
    bogan:["The cloud is someone else's computer charging rent.","If the app needs your contacts, microphone, photos and first-born child to show weather, absolutely not.","Turn it off and on again. Forty years of engineering cannot defeat this ritual."],
    grandma:["Write the important password somewhere safe, not on a note called PASSWORDS sitting beside the computer.","Do not click the message saying your parcel is emotionally distressed.","Update it while you still remember where the charger is."],
    publicServant:["The fault has been assigned priority level 'have you restarted it'.","Access is denied because your password fails the minimum requirement of not being your dog's name followed by one.","The platform is undergoing scheduled maintenance that nobody scheduled."],
    footyCoach:["Reset, simplify, execute. Stop changing five settings at once and wondering which one fixed it.","Backups are preseason. Nobody enjoys them until the season goes wrong.","Don't chase miracle apps. Get the basic system doing its job every week."]
  }
 },
 {
  id:"money",pattern:/\b(money|price|cost|budget|save|saving|loan|mortgage|rent|expensive|buy)\b/i,
  replies:{
    tradie:["A bargain you don't need is just clutter with a receipt.","Get three quotes and distrust the one that says the job is easy before looking at it.","Budget for maintenance. Everything owns a small future invoice."],
    bush:["Leave margin for weather, distance and the thing that breaks on a Sunday.","Cheap gear becomes expensive when the nearest replacement is three hours away.","Spend on reliability where failure leaves you stranded."],
    bogan:["Sleep on the big purchase. If the urge survives breakfast, at least it's committed.","Buying it because it's on sale is how the sale wins.","Finance makes today's toy tomorrow's direct debit."],
    grandma:["Keep something aside before you start spending, love. Leftovers are not a savings plan.","Ask what it costs to own, not merely what it costs to buy.","Do not lend money you cannot afford to turn into a family story."],
    publicServant:["The purchase is not approved merely because the discount banner is red.","Whole-of-life cost includes maintenance, fees and the emotional toll of calling customer support.","Please distinguish 'affordable' from 'the payment technically went through'."],
    footyCoach:["Build the buffer first. You can't attack if one bad bounce ends the season.","Know your cap, hold your structure and don't recruit on highlights alone.","Consistency beats one heroic month followed by financial soft-tissue damage."]
  }
 },
 {
  id:"animal",pattern:/\b(spider|snake|drop bear|kangaroo|magpie|shark|crocodile|emu)\b/i,
  replies:{
    tradie:["Give it space, shut the door and stop appointing yourself wildlife management because you own a broom.","If the spider has moved behind the cupboard, congratulations: the cupboard belongs to the spider.","Do not poke wildlife to improve the story."],
    bush:["Back away calmly and give it a path out. Most trouble starts when someone decides the animal needs a closer photograph.","Watch where you step, not where your mate is filming.","Wildlife does not recognise confidence as a qualification."],
    bogan:["If it has eight legs and rent-free access to the bedroom, the tenancy agreement has failed.","Do not square up to a kangaroo. It has been training legs since birth.","The emu has seen governments come and go. Show respect."],
    grandma:["Leave it alone and call someone sensible. Not your cousin with the cricket bat.","Close the door, put a towel underneath and stop shrieking long enough to make a plan.","You are larger than the spider. Behave as though this remains an advantage."],
    publicServant:["The animal has not completed a visitor induction and should be escorted off-site by a competent authority.","Direct engagement is not authorised. Establish distance and refer the matter to wildlife services where required.","The Department rejects all proposals involving poking, filming or naming the snake."],
    footyCoach:["Hold your shape, create space and don't dive in.","No hero plays. Get everyone clear and bring in the specialist.","The animal owns the corridor. Reset and use the other exit."]
  }
 },
 {
  id:"general",pattern:/.*/i,
  replies:{
    tradie:["You can do it that way, but you'll spend twice as long explaining why it went wrong.","Start with the simple fix before ordering a specialist tool from Germany.","Give it a proper crack, but keep enough dignity in reserve to change course."],
    bush:["Watch the conditions before blaming the plan. Good judgement includes knowing when the ground has changed.","Move early, carry water and leave pride out of anything involving distance.","The sensible option rarely arrives making the most noise."],
    bogan:["That is either a bold plan or the opening sentence of an insurance claim.","You haven't solved the problem; you've merely given it a louder exhaust.","Proceed, but perhaps don't livestream the learning phase."],
    grandma:["You already know the answer, love. You are shopping for permission.","Do the kind thing first. It saves paperwork later.","Have something to eat and reconsider before turning a mood into a decision."],
    publicServant:["The proposal is approved in principle and rejected in every practical respect.","Further consultation is unlikely to improve a decision nobody is willing to own.","Your enquiry has been escalated to a person who is currently in another meeting about escalation."],
    footyCoach:["Keep it simple, execute the basics and stop trying to win the whole match in one possession.","Make the next good decision. Heroics are usually poor structure wearing confidence.","You don't need more motivation. You need a clear first action and a start time."]
  }
 }
];

const eggs=[
 {pattern:/\bemu war\b/i,text:"Access denied. The file remains sealed under the National Avian Humiliation Act.",category:"Classified history",effect:"classified"},
 {pattern:/\bnew zealand\b/i,text:"A valued regional partner and highly successful supplier of Australians.",category:"Diplomatic affairs",effect:"none"},
 {pattern:/\bdrop bear\b/i,text:"Remain calm. Apply Vegemite behind the ears and avoid standing beneath trees occupied by suspiciously muscular koalas.",category:"Wildlife advisory",effect:"shake"},
 {pattern:/^\s*spider\s*$/i,text:"Property title transferred. You may collect essential belongings during daylight hours.",category:"Housing",effect:"shake"},
 {pattern:/\bbunnings\b/i,text:"Consultation complete. One sausage acquired, three unrelated tools purchased and the original task has expanded into a deck.",category:"Infrastructure",effect:"none"},
 {pattern:/\bprime minister\b/i,text:"Permission denied. Prime ministerial credentials could not be verified. Nice try.",category:"Protected access",effect:"classified"}
];

const recent=[];
function pickFresh(list,random=Math.random){
  const candidates=list.filter(x=>!recent.includes(x));
  const pool=candidates.length?candidates:list;
  const value=pool[Math.floor(random()*pool.length)];
  recent.push(value);if(recent.length>12)recent.shift();
  return value;
}
export function classify(input){
  for(const r of seriousRules)if(r.pattern.test(input))return{type:"serious",...r};
  for(const e of eggs)if(e.pattern.test(input))return{type:"egg",...e};
  const intent=intents.find(x=>x.pattern.test(input))||intents.at(-1);
  return{type:"normal",intent};
}
export function generateResponse(input,persona="tradie",random=Math.random){
  const clean=String(input??"").trim();
  if(!clean)return{text:"Your submission contains no question. This is efficient but not actionable.",category:"Administrative error",confidence:"Certain",effect:"none",serious:false};
  const result=classify(clean);
  if(result.type==="serious")return{text:result.text,category:result.category,confidence:"Serious",effect:"none",serious:true};
  if(result.type==="egg")return{text:result.text,category:result.category,confidence:"Classified",effect:result.effect,serious:false};
  const options=result.intent.replies[persona]||result.intent.replies.tradie;
  return{text:pickFresh(options,random),category:result.intent.id[0].toUpperCase()+result.intent.id.slice(1),confidence:pickFresh(["Operationally sound","Pub-reviewed","Reasonably certain","Cleared by one competent adult","Fit for ordinary use"],random),effect:"none",serious:false};
}
export const LOADING_MESSAGES=[
 "Checking the relevant Act and one group chat...",
 "Consulting people with strong opinions...",
 "Locating the officer who knows how this works...",
 "Reviewing precedent from the front bar...",
 "Waiting for Regional Wisdom Unit clearance...",
 "Completing Form AI-27B: Common Sense Assessment...",
 "Determining whether this can be fixed with cable ties...",
 "Seeking an adult who brought ice..."
];
