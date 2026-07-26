const urgent=[
{p:/\b(suicide|kill myself|self harm|overdose)\b/i,j:"This one is not a joke. Contact emergency services or a crisis support service now, and stay with someone you trust.",a:"Get immediate help now."},
{p:/\b(chest pain|can't breathe|cannot breathe|stroke|severe bleeding|unconscious)\b/i,j:"That may be a medical emergency. Call emergency services now. Do not wait for a bloke on the internet to finish his sentence.",a:"Call emergency services now."}
];
const packs=[
{id:"work",p:/\b(work|boss|job|office|meeting|email|career|deadline|promotion|colleague)\b/i,x:[
["Send it tomorrow. Tonight-you is brave, but tomorrow-you has to walk past their desk.","Wait, reread it in the morning, and remove anything written mainly to win an imaginary argument."],
["A meeting with no decision is just a hostage situation with biscuits.","Ask what decision is needed, who owns it and by when."],
["Reply-all is not communication. It is a flare gun used indoors.","Send only to people who genuinely need the message."],
["Your boss saying ‘quick chat’ has the same energy as a pilot saying ‘small technical issue’.","Prepare the facts and stay calm."],
["Do the work, keep the receipts and stop assuming competence is self-advertising.","Document your outcomes and ask directly for recognition."],
["Do not write ‘as per my previous email’ unless you are prepared to hear it read aloud at your retirement.","State the facts plainly without passive aggression."]
]},
{id:"bbq",p:/\b(bbq|barbecue|barbeque|snag|sausage|bring.*party|bring.*dinner)\b/i,x:[
["Bring ice. Meat gets remembered. Ice is discovered missing when everyone is already holding warm beer.","Bring ice; it is usually the most useful contribution."],
["Take something people actually eat. This is not the time to unveil fennel mist.","Bring a familiar side, dessert or bread."],
["Two bags of ice and no guitar. You’ll be invited back.","Bring practical supplies and avoid dominating the event."],
["‘Bring a plate’ means food, not one lonely ceramic plate like you’ve misunderstood the nation.","Take a prepared dish to share."],
["If you ask what to bring and they say ‘nothing’, that means ice.","Bring ice or a simple shareable item anyway."],
["Offer to clean up before everyone develops sudden lower-back trouble.","Help with cleanup at the end."]
]},
{id:"relationship",p:/\b(date|dating|partner|wife|husband|girlfriend|boyfriend|relationship|love|argument|marry|break up)\b/i,x:[
["Say the actual thing. Hinting is just communication with the warranty removed.","Speak directly and clearly."],
["If they only text after midnight, you are not in a romance. You are in a late trading arrangement.","Look for consistent effort, not occasional attention."],
["You do not need to win the argument. You need to still like each other after it.","Focus on resolving the issue rather than scoring points."],
["An apology with ‘if’ in it is just a complaint wearing a cardigan.","Acknowledge what you did and its impact."],
["Do not ask twelve mates to interpret one text. Ask the person who sent it.","Seek clarification directly."],
["If every plan is vague, the relationship is not mysterious. It is underfunded.","Look for clear commitment and follow-through."]
]},
{id:"money",p:/\b(money|price|cost|budget|save|loan|mortgage|rent|expensive|buy|purchase)\b/i,x:[
["A bargain you do not need is just clutter that beat you in an argument.","Do not buy it merely because it is discounted."],
["Sleep on it. If the urge survives breakfast, at least it has done some paperwork.","Delay major purchases and reassess tomorrow."],
["Ask what it costs to own, not what it costs to leave the shop smiling.","Include maintenance, fees and running costs."],
["Finance turns today’s excitement into next year’s direct debit.","Avoid borrowing for nonessential purchases unless repayments clearly fit."],
["Cheap can be excellent. Cheap and urgent is usually a trap with a receipt.","Compare quality and urgency before buying."],
["If buying it empties the emergency fund, the emergency is now the thing you bought.","Keep an emergency buffer intact."]
]},
{id:"tech",p:/\b(ai|computer|phone|wifi|internet|app|password|software|robot|laptop|printer)\b/i,x:[
["Turn it off and on again. Forty years of engineering and this is still the national anthem.","Restart the device first."],
["The printer can smell urgency. Approach without fear.","Check paper, connection, queue and restart it."],
["If the app wants your contacts, microphone, photos and blood type to show the weather, absolutely not.","Deny unnecessary permissions."],
["The cloud is just someone else’s computer wearing a lanyard.","Keep backups and do not assume cloud services are permanent."],
["Use a password manager. Your dog’s name plus 1 is not cybersecurity; it is a confession.","Use unique passwords stored in a password manager."],
["Back it up before following a tutorial titled ‘easy fix’.","Create a backup before making changes."]
]},
{id:"wildlife",p:/\b(spider|snake|kangaroo|magpie|shark|crocodile|emu|drop bear|wildlife)\b/i,x:[
["Give it space. Wildlife does not recognise confidence as a qualification.","Back away and avoid provoking it."],
["Do not square up to a kangaroo. It has been training legs since birth.","Keep your distance and do not engage."],
["If the spider has vanished behind the cupboard, the cupboard has changed ownership.","Close off the area and remove it safely or call someone competent."],
["A magpie remembers faces. This is not folklore; this is a performance review.","Avoid the nesting area and protect your head."],
["Do not poke it for the video. The video is not worth becoming educational material.","Do not approach or provoke dangerous wildlife."],
["The emu has already defeated organised government. Adjust your tone.","Keep a respectful distance from emus."]
]},
{id:"food",p:/\b(food|cook|dinner|lunch|breakfast|recipe|eat|hungry|vegemite|pie|chips)\b/i,x:[
["Use less Vegemite than your heart suggests and more butter than your doctor suggests.","Spread Vegemite thinly over buttered toast."],
["If dinner needs three specialty shops and a blowtorch, that is a project, not a Tuesday.","Choose a simpler weeknight recipe."],
["A meat pie is not a handheld soup. Let it cool.","Wait before eating very hot filled pastries."],
["Salt the food, not your family.","Season gradually and taste as you go."],
["If the chips are for the table, order your own. Peace is cheaper.","Order enough portions rather than relying on sharing."],
["Leftovers are tomorrow’s competence.","Store leftovers safely and use them for another meal."]
]},
{id:"drink",p:/\b(beer|wine|drink|drunk|booze|slab|stubby|goon|rum)\b/i,x:[
["If you are driving, the number is zero. That is not moralising; that is avoiding a very expensive walk home.","Do not drink if you are driving."],
["You can send it or remember it. Pick one.","Drink moderately if you want to remain in control."],
["Nominate the driver before everyone becomes a transport expert.","Arrange safe transport before drinking."],
["Water between drinks. Your future head has lodged a formal request.","Alternate alcoholic drinks with water."],
["One carton says guest. Three says the neighbours will learn your middle name.","Bring and consume a moderate amount."],
["Eat first. Confidence is not a carbohydrate.","Have food before drinking."]
]},
{id:"general",p:/.*/i,x:[
["That sounds like a good idea right up until the part where it happens.","Pause and examine the practical risks."],
["You already know the answer. You are just shopping for a witness.","Trust the sensible conclusion you have already reached."],
["Give it a crack, but leave enough dignity in reserve to stop.","Try it, but set a clear stopping point."],
["Do not confuse a strong feeling with a complete plan.","Turn the idea into concrete steps before acting."],
["The clever option is usually less exciting and more useful. Annoying, but there it is.","Choose the practical option over the dramatic one."],
["Proceed carefully. This has the early shape of a story told with the phrase ‘for some reason’.","Reduce avoidable risk before continuing."],
["If everyone sensible has gone quiet, that is not support.","Pay attention to hesitation from people you trust."],
["Start with the smallest version that can fail without becoming family folklore.","Test the idea on a small scale first."]
]}];
export const loading=["Checking with someone’s uncle...","Running it past the barbecue committee...","Consulting a bloke who has seen this before...","Waiting for the kettle to boil...","Removing unnecessary enthusiasm...","Checking whether this is terrible or merely expensive...","Asking one competent adult..."];
let recent=[],last=null;
function pick(x,r=Math.random){let y=x.filter(v=>!recent.includes(v[0]));if(!y.length)y=x;const z=y[Math.floor(r()*y.length)];recent.push(z[0]);if(recent.length>10)recent.shift();return z}
export function answerQuestion(q,r=Math.random){q=String(q??"").trim();if(!q)return{joke:"You have submitted absolutely nothing. Efficient, but difficult to advise on.",plain:"Enter a question first.",serious:false};for(const u of urgent)if(u.p.test(q))return{joke:u.j,plain:u.a,serious:true};last=packs.find(v=>v.p.test(q))||packs.at(-1);const [joke,plain]=pick(last.x,r);return{joke,plain,serious:false,category:last.id}}
export function anotherAnswer(r=Math.random){last??=packs.at(-1);const[joke,plain]=pick(last.x,r);return{joke,plain,serious:false,category:last.id}}