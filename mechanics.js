/* mechanics.js — the Atlas's single source of truth.
   One entry per mechanic. `file` is null for mechanics not built yet (shown as "Coming soon").
   Stage w/h is the animation's native stage size, used for the viewer's aspect ratio.
   Anatomy uses Fullerton's formal elements (Game Design Workshop, ch. 3). */
window.FAMILIES = [
  { id: 'chance',  name: 'Chance & Risk',     color: '#e5484d', blurb: 'Randomness, odds and the nerve to keep going.' },
  { id: 'cards',   name: 'Card Systems',      color: '#3e7bfa', blurb: 'Drafting, decks and hands: choices made from cards.' },
  { id: 'space',   name: 'Board & Space',     color: '#30a46c', blurb: 'Where you are on the board matters.' },
  { id: 'economy', name: 'Economy & Actions', color: '#ffb224', blurb: 'Scarce actions, resources and engines.' },
  { id: 'people',  name: 'Player Interaction',color: '#8e4ec6', blurb: 'Reading, fooling and dealing with each other.' }
];

window.MECHANICS = [
  /* ---------------- Chance & Risk ---------------- */
  {
    id: 'dice-probability', family: 'chance', title: 'Dice & Probability',
    file: 'mechanics/dice-probability.html', w: 1280, h: 720, minutes: 4,
    hook: 'Why two dice make 7 the king, and how designers use the bell curve.',
    anatomy: {
      Procedures: 'Roll two six-sided dice and add them; the total decides what happens.',
      Rules: 'Results are tied to totals, so common totals (6, 7, 8) fire often and rare ones (2, 12) almost never.',
      Resources: 'Board spaces, outcomes or numbers that pay out on certain totals.',
      Outcome: 'Luck is shaped, not flat: players can plan around what is likely.'
    },
    feel: ['Anticipation', 'Hope against the odds', 'Informed risk'],
    feelText: 'One die is pure chance. Two dice give chance a shape players can learn, so a roll feels like a bet they chose to make.',
    watchFor: 'Count the ways each total can happen. That count, not the number on the die, is what a designer balances.',
    examples: [
      { name: 'Catan', note: 'Number tokens on hexes; 6 and 8 are marked red because they hit most.' },
      { name: 'Monopoly', note: 'Movement by 2d6 makes some board spaces land far more often.' },
      { name: 'Craps', note: 'The whole casino game is built on the 2d6 curve.' },
      { name: 'Powered by the Apocalypse RPGs', note: '2d6 + stat: 10+ success, 7–9 success with a cost, 6− trouble.' }
    ]
  },
  {
    id: 'push-your-luck', family: 'chance', title: 'Push Your Luck',
    file: 'mechanics/push-your-luck.html', w: 1280, h: 720, minutes: 4,
    hook: 'Keep going for more, or stop and bank it. One more roll could cost everything.',
    anatomy: {
      Procedures: 'Each turn, take a risky action again and again, or stop and keep what you earned.',
      Rules: 'A bust condition wipes out everything earned this turn; banking makes it safe.',
      Resources: 'Unbanked points that grow with each push and vanish on a bust.',
      Conflict: 'Greed against safety, inside your own head.'
    },
    feel: ['Tension', 'Greed', 'Relief or groan'],
    feelText: 'The decision is the same every time, "again?", but the stakes grow with each yes. The table cheers or groans together.',
    watchFor: 'Watch how the risk of busting climbs with each push while the reward grows too. Expected reward rises, peaks, then falls: the tension lives around that peak.',
    examples: [
      { name: "Can't Stop", note: 'Roll four dice, advance runners, stop before you fail to place.' },
      { name: 'Incan Gold', note: 'Draw cards; the second matching hazard ends the run for everyone still inside.' },
      { name: 'The Quacks of Quedlinburg', note: 'Draw ingredients from a bag until the pot explodes.' },
      { name: 'Zombie Dice', note: 'Three shotguns and your turn is gone.' }
    ]
  },
  { id: 'card-draw', family: 'chance', title: 'Card Draw & Shuffling', file: null,
    hook: 'A deck is a randomizer with a memory: what is drawn is gone.' },

  /* ---------------- Card Systems ---------------- */
  {
    id: 'card-drafting', family: 'cards', title: 'Card Drafting',
    file: 'mechanics/card-drafting.html', w: 1280, h: 900, minutes: 4,
    hook: 'Pick one, pass the rest. What you take also decides what your neighbours get.',
    anatomy: {
      Procedures: 'Everyone takes one card from a hand at the same time, then passes the hand along.',
      Rules: 'Hands shrink each pass; the round ends when the cards run out.',
      Resources: 'The cards you kept, which score alone or in combinations.',
      Conflict: 'Taking a card your neighbour needs ("hate drafting") versus taking what helps you.'
    },
    feel: ['Simultaneous action', 'Reading the table', 'Hard choices'],
    feelText: 'Everyone plays at once, so there is little waiting. Each pick is a small dilemma: help yourself or block someone else.',
    watchFor: 'Notice how the cards you see later are the ones others did not want. Information grows with every pass.',
    examples: [
      { name: '7 Wonders', note: 'Drafting across three ages to build a civilization.' },
      { name: 'Sushi Go!', note: 'A quick family game; pure pick-and-pass with set scoring.' },
      { name: 'Magic: The Gathering (booster draft)', note: 'The format that made drafting famous.' },
      { name: 'Draftosaurus', note: 'Drafting dinosaur meeples instead of cards.' }
    ]
  },
  {
    id: 'deck-building', family: 'cards', title: 'Deck-Building',
    file: 'mechanics/deck-building.html', w: 1280, h: 900, minutes: 6,
    hook: 'Everyone starts with the same weak deck. The game is how you improve it.',
    anatomy: {
      Procedures: 'Draw a hand from your deck, play it, buy new cards into your discard pile, reshuffle when empty.',
      Rules: 'New cards only reach your hand after a reshuffle, so every purchase is an investment.',
      Resources: 'Your deck itself: money cards, action cards, and points that clog your hand.',
      Outcome: 'Players race to turn a starter deck into a strong engine before the game ends.'
    },
    feel: ['Growth', 'Engine-building', 'Clever combos'],
    feelText: 'The game you play on turn 15 is not the one you played on turn 1, because you built it.',
    watchFor: 'Victory cards are dead weight in your hand. Watch how buying points too early slows a deck down.',
    examples: [
      { name: 'Dominion', note: 'The 2008 game that founded the genre (featured in this animation).' },
      { name: 'Star Realms', note: 'Two-player combat deck-builder.' },
      { name: 'Clank!', note: 'Deck-building married to a dungeon map.' },
      { name: 'Slay the Spire', note: 'The digital game that carried the idea to video games.' }
    ]
  },
  {
    id: 'set-collection', family: 'cards', title: 'Set Collection',
    file: 'mechanics/set-collection.html', w: 1280, h: 720, minutes: 4,
    hook: 'One of a kind is worth little; a full set is worth a lot.',
    anatomy: {
      Procedures: 'Gather cards or tokens over the game and group them by type.',
      Rules: 'Sets score more than the sum of their parts; incomplete sets score little or nothing.',
      Resources: 'The cards in your collection and the open market you take them from.',
      Outcome: 'Whoever completes the most valuable sets wins.'
    },
    feel: ['Collecting', 'Planning ahead', 'Race for the last piece'],
    feelText: 'Every card is worth more to one player than to the others, so the market becomes a quiet tug-of-war.',
    watchFor: 'Watch the score jump as a set grows. Escalating scoring is what makes the last piece so valuable.',
    examples: [
      { name: 'Ticket to Ride', note: 'Collect matching train cards to claim routes.' },
      { name: 'Sushi Go!', note: 'Each dish type scores sets in its own way.' },
      { name: 'Splendor', note: 'Gems become cards, cards become nobles.' },
      { name: 'Go Fish / Rummy', note: 'The family card games the mechanic comes from.' }
    ]
  },
  { id: 'hand-management', family: 'cards', title: 'Hand Management', file: null,
    hook: 'When to play a card matters as much as which card.' },
  { id: 'trick-taking', family: 'cards', title: 'Trick-Taking', file: null,
    hook: 'Follow suit, win the trick, count the cards.' },

  /* ---------------- Board & Space ---------------- */
  {
    id: 'area-control', family: 'space', title: 'Area Control',
    file: 'mechanics/area-control.html', w: 1280, h: 720, minutes: 4,
    hook: 'Have the most pieces in a region and it is yours. Ties and timing decide the rest.',
    anatomy: {
      Procedures: 'Place or move pieces into regions on a map.',
      Rules: 'At scoring, the player with the most pieces in a region takes its points; second place may score less.',
      Resources: 'A limited supply of pieces, and the regions themselves.',
      Conflict: 'Direct: every piece you add pushes someone else out of first place.'
    },
    feel: ['Territory', 'Confrontation', 'Calculated aggression'],
    feelText: 'The map becomes a set of small contests. Spread thin and win little, or commit hard and give ground elsewhere.',
    watchFor: 'Count the majorities in each region at scoring. A single piece can flip a region, and the timing of that piece is the skill.',
    examples: [
      { name: 'El Grande', note: 'The classic: majorities in the regions of Spain.' },
      { name: 'Risk', note: 'Control by conquest; armies hold territories.' },
      { name: 'Small World', note: 'Races rise, spread and decline across a crowded map.' },
      { name: 'Inis', note: 'Area control with cards and diplomacy.' }
    ]
  },
  { id: 'tile-placement', family: 'space', title: 'Tile Placement', file: null,
    hook: 'Build the board as you play, one tile at a time.' },
  { id: 'network-building', family: 'space', title: 'Route & Network Building', file: null,
    hook: 'Connect the dots before someone blocks the path.' },

  /* ---------------- Economy & Actions ---------------- */
  {
    id: 'worker-placement', family: 'economy', title: 'Worker Placement',
    file: 'mechanics/worker-placement.html', w: 1280, h: 720, minutes: 4,
    hook: 'Send a worker to an action and that action is taken. First come, first served.',
    anatomy: {
      Procedures: 'Take turns placing one worker on an open action space; resolve it; workers come home at round end.',
      Rules: 'Most spaces hold one worker, so claiming one blocks everyone else.',
      Resources: 'Your workers (actions per round) and the goods those actions produce.',
      Conflict: 'Indirect: you never attack, you just get there first.'
    },
    feel: ['Planning', 'Scarcity', 'Being blocked'],
    feelText: 'Every placement is two decisions: what do I need, and what will hurt the others most to lose?',
    watchFor: 'Watch the board fill up. The spaces left at the end of a round show how much turn order is worth.',
    examples: [
      { name: 'Stone Age', note: 'A gentle introduction; dice add a little luck to each action.' },
      { name: 'Lords of Waterdeep', note: 'Clean worker placement with quests to complete.' },
      { name: 'Agricola', note: 'Feed your family; every space feels essential.' },
      { name: 'Everdell', note: 'Worker placement plus building a tableau of cards.' }
    ]
  },
  { id: 'engine-building', family: 'economy', title: 'Engine Building', file: null,
    hook: 'Spend now on things that pay you every turn after.' },
  { id: 'auction', family: 'economy', title: 'Auctions & Bidding', file: null,
    hook: 'The players set the prices.' },

  /* ---------------- Player Interaction ---------------- */
  {
    id: 'bluffing', family: 'people', title: 'Bluffing & Hidden Information',
    file: 'mechanics/bluffing.html', w: 1280, h: 720, minutes: 4,
    hook: 'You can say anything. The question is whether anyone calls it.',
    anatomy: {
      Procedures: 'Make a claim about hidden cards or dice; other players may challenge it.',
      Rules: 'A challenge reveals the truth: the liar or the wrong challenger pays a penalty.',
      Resources: 'Hidden information, and your reputation at the table.',
      Conflict: 'Psychological: reading people matters more than reading the board.'
    },
    feel: ['Suspense', 'Social deduction', 'Laughter'],
    feelText: 'The real game is played between the players, in eye contact and hesitation. The pieces are just the excuse.',
    watchFor: 'Notice that a bluff only works when the truth would be believable too. The penalty on both sides keeps everyone honest-ish.',
    examples: [
      { name: "Liar's Dice", note: 'Bid on how many dice show a face across every cup.' },
      { name: 'Coup', note: 'Claim any role; get caught and lose influence.' },
      { name: 'Skull', note: 'Flowers and skulls, and bets on how many you can flip.' },
      { name: 'Cockroach Poker', note: 'Pass a card, name a bug, maybe lie.' }
    ]
  },
  { id: 'hidden-roles', family: 'people', title: 'Hidden Roles', file: null,
    hook: 'Someone at the table is not on your team.' },
  { id: 'cooperative', family: 'people', title: 'Cooperative Play', file: null,
    hook: 'Everyone against the game.' }
];
