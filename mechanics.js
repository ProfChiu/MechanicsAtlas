/* mechanics.js — the Atlas's single source of truth.
   One entry per mechanic. `file` is null for mechanics not built yet (shown as "Coming soon").
   Stage w/h is the animation's native stage size, used for the viewer's aspect ratio.
   Anatomy uses Fullerton's formal elements (Game Design Workshop, ch. 3). */
window.FAMILIES = [
  { id: 'chance',  name: 'Chance & Risk',     color: '#e5484d', blurb: 'Randomness, odds and the nerve to keep going.' },
  { id: 'cards',   name: 'Card Systems',      color: '#3e7bfa', blurb: 'Drafting, decks and hands: choices made from cards.' },
  { id: 'space',   name: 'Board & Space',     color: '#30a46c', blurb: 'Where you are on the board matters.' },
  { id: 'economy', name: 'Economy & Actions', color: '#ffb224', blurb: 'Scarce actions, resources and engines.' },
  { id: 'people',  name: 'Player Interaction',color: '#8e4ec6', blurb: 'Reading, fooling and dealing with each other.' },
  { id: 'structure', name: 'Game Structure',  color: '#e93d82', blurb: 'Turns, scoring, endings and loops: the shape of a whole game.' }
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
  {
    id: 'card-draw', family: 'chance', title: 'Card Draw & Shuffling',
    file: 'mechanics/card-draw.html', w: 1280, h: 720, minutes: 4,
    hook: 'A deck is a randomizer with a memory: what is drawn is gone.',
    anatomy: {
      Procedures: 'Shuffle a deck, draw from the top, discard or keep what you drew.',
      Rules: 'Cards drawn are not replaced until a reshuffle, so the odds change with every draw.',
      Resources: 'The cards in hand, and knowledge of what is left in the deck.',
      Outcome: 'Randomness that players can track: counting what is gone tells you what is coming.'
    },
    feel: ['Anticipation', 'Card counting', 'Surprise'],
    feelText: 'A die forgets every roll. A deck remembers, so luck evens out and attentive players gain an edge.',
    watchFor: 'Watch the odds of drawing the last ace climb as the deck shrinks. Dice never do that.',
    examples: [
      { name: 'Blackjack', note: 'Counting cards works because the deck remembers.' },
      { name: 'Pandemic', note: 'The infection deck is reshuffled onto itself so the same cities come back.' },
      { name: 'Exploding Kittens', note: 'Every draw might be the bomb; the odds rise as the deck thins.' },
      { name: 'Catan Event Cards', note: 'Replaces the 2d6 roll with a deck of 36 cards to tame luck.' }
    ]
  },

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
  {
    id: 'hand-management', family: 'cards', title: 'Hand Management',
    file: 'mechanics/hand-management.html', w: 1280, h: 720, minutes: 4,
    hook: 'When to play a card matters as much as which card.',
    anatomy: {
      Procedures: 'Hold a hand of cards; each turn choose which to play, keep or discard.',
      Rules: 'Hand size is limited and cards are often worth more in certain combinations or moments.',
      Resources: 'The cards in hand, and the turns you have to use them.',
      Conflict: 'Using a card now versus saving it for a bigger payoff later.'
    },
    feel: ['Planning', 'Patience', 'Payoff'],
    feelText: 'A hand is a set of options that shrinks as you use it. Spending well, at the right time, is the skill.',
    watchFor: 'Watch the same hand played two ways: spent early, and held for the right moment. Same cards, different score.',
    examples: [
      { name: 'Ticket to Ride', note: 'Hoard colours, then claim a long route in one turn.' },
      { name: 'Lost Cities', note: 'Commit to expeditions in order; play too early and you lose options.' },
      { name: 'Uno', note: 'Holding the wild card for the right moment.' },
      { name: 'Gin Rummy', note: 'Keep, discard, and wait for the card that completes your hand.' }
    ]
  },
  {
    id: 'trick-taking', family: 'cards', title: 'Trick-Taking',
    file: 'mechanics/trick-taking.html', w: 1280, h: 720, minutes: 5,
    hook: 'Follow suit, win the trick, count the cards.',
    anatomy: {
      Procedures: 'One player leads a card; each other player plays one card; the highest wins the trick and leads next.',
      Rules: 'You must follow the led suit if you can; a trump suit beats all others.',
      Resources: 'Your hand, and your memory of which cards have been played.',
      Outcome: 'Win the tricks you need (or avoid the ones you do not).'
    },
    feel: ['Deduction', 'Timing', 'Partnership'],
    feelText: 'One simple rule, follow suit, creates hundreds of years of card games. The skill is knowing what is still out there.',
    watchFor: 'Notice when a player cannot follow suit. From then on, everyone knows something about their hand.',
    examples: [
      { name: 'Spades / Hearts / Bridge', note: 'The traditional family of trick-taking games.' },
      { name: 'The Crew', note: 'A cooperative trick-taker: win specific tricks together.' },
      { name: 'Skull King', note: 'Bid exactly how many tricks you will win.' },
      { name: 'Wizard', note: 'Bidding plus special cards that break the rules.' }
    ]
  },

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
  {
    id: 'tile-placement', family: 'space', title: 'Tile Placement',
    file: 'mechanics/tile-placement.html', w: 1280, h: 720, minutes: 4,
    hook: 'Build the board as you play, one tile at a time.',
    anatomy: {
      Procedures: 'Draw a tile and place it touching the tiles already down.',
      Rules: 'Edges must match; finished features (a road, a city) score when closed.',
      Resources: 'The tile you drew, and the open spots where it fits.',
      Outcome: 'A shared map that every player helped build, different every game.'
    },
    feel: ['Puzzle', 'Discovery', 'Building together'],
    feelText: 'Every game draws a new map. Each tile is a small puzzle: where does it help me most, or hurt you most?',
    watchFor: 'Watch the open spots: a tile that fits only one place is a gift or a curse. Placement rules create the puzzle.',
    examples: [
      { name: 'Carcassonne', note: 'The classic: roads, cities and fields built from tiles.' },
      { name: 'Kingdomino', note: 'Domino-style tiles and a 5×5 kingdom.' },
      { name: 'Cascadia', note: 'Habitat tiles and wildlife patterns.' },
      { name: 'Azul', note: 'Tile drafting and placement onto a personal wall.' }
    ]
  },
  {
    id: 'network-building', family: 'space', title: 'Route & Network Building',
    file: 'mechanics/network-building.html', w: 1280, h: 720, minutes: 4,
    hook: 'Connect the dots before someone blocks the path.',
    anatomy: {
      Procedures: 'Claim links between points on a map to grow a connected network.',
      Rules: 'Each link can be claimed once; goals pay for connecting specific points or for the longest route.',
      Resources: 'Your pieces (trains, roads, cables) and the cards or money to place them.',
      Conflict: 'Blocking: a claimed link forces others into a longer detour.'
    },
    feel: ['Expansion', 'Racing', 'Being cut off'],
    feelText: 'Your network grows from a dot into a web. The board is shared, so every link you take is a link someone else loses.',
    watchFor: 'Watch one blocked link turn a 3-step route into a 6-step detour. Shortest paths are the hidden economy.',
    examples: [
      { name: 'Ticket to Ride', note: 'Claim routes to complete secret destination tickets.' },
      { name: 'Power Grid', note: 'Connect cities; links cost more the farther they reach.' },
      { name: 'Catan', note: 'Roads, and the longest road bonus.' },
      { name: 'Railways of the World', note: 'Build rail lines and deliver goods along them.' }
    ]
  },

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
  {
    id: 'engine-building', family: 'economy', title: 'Engine Building',
    file: 'mechanics/engine-building.html', w: 1280, h: 720, minutes: 4,
    hook: 'Spend now on things that pay you every turn after.',
    anatomy: {
      Procedures: 'Buy cards or buildings that produce resources or points every turn.',
      Rules: 'Each piece pays out repeatedly, and pieces often boost each other.',
      Resources: 'Your income, and the engine pieces you have built.',
      Outcome: 'Small early investments snowball into large late-game turns.'
    },
    feel: ['Growth', 'Satisfaction', 'Combo'],
    feelText: 'Turn 1 gives you one coin. Turn 10 gives you a cascade. Watching your engine run is the reward.',
    watchFor: 'Watch two players: one scores points early, one builds income. Plot both. The lines cross, and when they cross is the design.',
    examples: [
      { name: 'Splendor', note: 'Gem cards make future cards cheaper.' },
      { name: 'Wingspan', note: 'Birds trigger each other in rows.' },
      { name: 'Race for the Galaxy', note: 'Planets and developments that feed each other.' },
      { name: 'Terraforming Mars', note: 'Production tracks pay out every generation.' }
    ]
  },
  {
    id: 'auction', family: 'economy', title: 'Auctions & Bidding',
    file: 'mechanics/auction.html', w: 1280, h: 720, minutes: 4,
    hook: 'The players set the prices.',
    anatomy: {
      Procedures: 'An item is offered; players bid money (or something else) to win it.',
      Rules: 'Auction types differ: open rising bids, one sealed bid each, or a falling price.',
      Resources: 'Money, which is limited and usually also counts at the end.',
      Conflict: 'Paying too much hurts you; letting a rival win cheaply hurts more.'
    },
    feel: ['Valuation', 'Bluffing', 'Bargain-hunting'],
    feelText: 'No designer has to balance the price of anything. The table decides what each item is worth.',
    watchFor: 'Watch the same item sold three ways: open, sealed, and falling price. The winner and the price change each time.',
    examples: [
      { name: 'Modern Art', note: 'Five auction types in one game about selling paintings.' },
      { name: 'For Sale', note: 'A quick game in two halves: buy houses, then sell them.' },
      { name: 'Power Grid', note: 'Players bid for power plants.' },
      { name: 'Ra', note: 'Bid with numbered suns; the sun you win comes back next round.' }
    ]
  },

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
  {
    id: 'hidden-roles', family: 'people', title: 'Hidden Roles',
    file: 'mechanics/hidden-roles.html', w: 1280, h: 720, minutes: 5,
    hook: 'Someone at the table is not on your team.',
    anatomy: {
      Players: 'Two uneven teams: an informed minority (traitors) and an uninformed majority.',
      Procedures: 'Secret roles are dealt; players discuss, vote, and take actions in the open.',
      Rules: 'The minority knows each other; the majority must find them using behaviour and votes.',
      Outcome: 'The majority wins by exposing the traitors; the traitors win by staying hidden.'
    },
    feel: ['Suspicion', 'Persuasion', 'Big reveals'],
    feelText: 'The rules are tiny; the game happens in conversation. Every vote is evidence, and every accusation can backfire.',
    watchFor: 'Watch the information gap: the traitors know everything about the teams, the majority knows nothing. Votes are how the gap closes.',
    examples: [
      { name: 'Werewolf / Mafia', note: 'The party game that started it.' },
      { name: 'The Resistance', note: 'Mission votes reveal who might be a spy.' },
      { name: 'Secret Hitler', note: 'Policy cards create suspicion even for honest players.' },
      { name: 'Among Us', note: 'The same structure in a video game.' }
    ]
  },
  {
    id: 'cooperative', family: 'people', title: 'Cooperative Play',
    file: 'mechanics/cooperative.html', w: 1280, h: 720, minutes: 4,
    hook: 'Everyone against the game.',
    anatomy: {
      Players: 'All players on one team; the game itself is the opponent.',
      Procedures: 'Players take turns acting, then the game takes its turn and makes things worse.',
      Rules: 'Each player has a special ability; the game has a loss condition that grows every turn.',
      Outcome: 'Everyone wins or everyone loses.'
    },
    feel: ['Teamwork', 'Pressure', 'Shared triumph'],
    feelText: 'The tension comes from the game, not from each other. Victory is shared, and so is the near miss.',
    watchFor: 'Watch the threat track rise faster than one player could stop it. Only combined abilities keep up: that gap forces teamwork.',
    examples: [
      { name: 'Pandemic', note: 'Treat diseases worldwide before outbreaks spiral.' },
      { name: 'Forbidden Island', note: 'A family co-op: grab the treasures as the island sinks.' },
      { name: 'Hanabi', note: 'Co-op with hidden information: you see everyone\'s cards but yours.' },
      { name: 'Spirit Island', note: 'A heavier co-op against colonizing invaders.' }
    ]
  },
  /* ================= Second wave (built from briefs, 2026-11-02) =================
     Each keeps its original `brief`. To plan a new one, add an entry with file: null
     (shown on the hub as "Coming soon").
     To build one: write mechanics/<id>.html per ANIMATION_CONTRACT.md from its `brief`,
     add anatomy / feel / feelText / minutes / w / h, then set `file`. */

  /* Chance & Risk */
  {
    id: 'dice-pools', family: 'chance', title: 'Dice Pools & Successes',
    file: 'mechanics/dice-pools.html', w: 1280, h: 720, minutes: 4,
    hook: 'Roll a handful of dice and count the hits. More dice, better odds, never a sure thing.',
    anatomy: {
      Procedures: 'Roll a pool of plain dice at once and count how many show a hit (here, a 5 or 6).',
      Rules: 'Only the number of hits matters, never the total. Some effects let you reroll the misses.',
      Resources: 'Dice in the pool and rerolls: both are what players earn, spend or lose.',
      Outcome: 'The pool sets the odds, the roll sets the result. Bigger pools help less and less.'
    },
    feel: ['Hope', 'Momentum', 'Gamble'],
    feelText: 'A fistful of dice feels powerful, and a big pool that whiffs is a story players retell. Rerolls give a second breath of hope.',
    watchFor: 'Each extra die moves the chance of at least one success less than the one before it.',
    examples: [
      { name: 'King of Tokyo', note: 'Six dice and up to two rerolls a turn, keeping the faces you want.' },
      { name: 'Vampire: The Masquerade (V5)', note: 'Attribute + skill sets the pool; 6 or higher is a success.' },
      { name: 'Shadowrun', note: 'Huge pools of d6; 5s and 6s are hits, and too many 1s is a glitch.' },
      { name: 'Yahtzee', note: 'Five dice and two rerolls, chasing patterns instead of hits.' }
    ],
    brief: 'Pools of 1–6 d6 where 5–6 is a hit. Show the chance of at least one hit per pool size as a bar chart (33%, 56%, 70%, 80%, 87%, 91%): diminishing returns. Then rerolls as a second lever.'
  },
  {
    id: 'roll-and-write', family: 'chance', title: 'Roll & Write',
    file: 'mechanics/roll-and-write.html', w: 1280, h: 720, minutes: 4,
    hook: 'Everyone uses the same roll, then writes it onto their own sheet.',
    anatomy: {
      Procedures: 'One player rolls; everyone uses the same result and marks it on their own paper sheet.',
      Rules: 'Marks are permanent: a box crossed off or skipped can never be used again.',
      Resources: 'The empty boxes left on your sheet.',
      Outcome: 'Same luck for everyone; the score gap comes from where each player chose to write.'
    },
    feel: ['Puzzle', 'Fairness', 'Quiet tension'],
    feelText: 'Nobody waits for a turn and nobody blames the dice: everyone got the same roll. The pencil is the only thing that differs.',
    watchFor: 'Same dice, different sheets: identical luck for all, so the score gap is pure decision-making.',
    examples: [
      { name: 'Qwixx', note: 'Cross off numbers left to right in four coloured rows.' },
      { name: "That's Pretty Clever!", note: 'Dice drafting with chain-reaction bonuses on the sheet.' },
      { name: 'Railroad Ink', note: 'Draw rail and road routes from shared dice.' },
      { name: 'Welcome To…', note: 'A flip-and-write: cards instead of dice, houses on a street.' }
    ],
    brief: 'Three players, one shared roll per turn, three paper sheets filling in differently. Show a crossed-off box that can never be used again. End with sheets side by side and different scores.'
  },
  {
    id: 'bag-building', family: 'chance', title: 'Bag Building',
    file: 'mechanics/bag-building.html', w: 1280, h: 720, minutes: 4,
    hook: 'Put better tokens in your bag, then draw blind. You control the odds, not the draw.',
    anatomy: {
      Procedures: 'Each round, draw a few tokens blind from your bag, use them, then put them all back.',
      Rules: 'Bought tokens go straight into the bag. Some effects force junk tokens in.',
      Resources: 'The tokens in your bag; their mix is your odds.',
      Outcome: 'A better bag draws better on average, but any single draw can still disappoint.'
    },
    feel: ['Anticipation', 'Ownership', 'Lucky dip'],
    feelText: 'Every hand in the bag is a small lottery you rigged yourself. A great draw feels earned; a bad one feels like the bag betrayed you.',
    watchFor: 'Watch the chance of drawing a good token rise as the bag improves, and fall again when junk goes in.',
    examples: [
      { name: 'Orléans', note: 'Recruit followers into your bag, then draw them to take actions.' },
      { name: 'The Quacks of Quedlinburg', note: 'Draw ingredients one at a time and stop before the pot explodes.' },
      { name: 'Dungeon Alliance', note: 'Heroes draw cards and tokens from a shared pool built up over the dungeon.' }
    ],
    brief: 'A cloth bag with 10 tokens (7 weak, 3 strong). Each round add strong tokens and draw 4. A pie of bag contents updates each round; contrast with deck-building (bag = reshuffle every draw).'
  },

  /* Card Systems */
  {
    id: 'multi-use-cards', family: 'cards', title: 'Multi-Use Cards',
    file: 'mechanics/multi-use-cards.html', w: 1280, h: 720, minutes: 6,
    hook: 'One card, several ways to play it. Choosing one means giving up the rest.',
    anatomy: {
      Procedures: 'Play a card for one of its uses: build it, spend it as money, or trigger its action.',
      Rules: 'A card used one way is gone for its other uses. Spent cards pay for the card you keep.',
      Resources: 'Cards in hand, which are also your money and your actions.',
      Outcome: 'Every turn is a trade-off; the real price of a play is the best use you gave up.'
    },
    feel: ['Tension', 'Clever', 'Regret'],
    feelText: 'Every card in hand is something you want to keep. Spending one to pay for another stings, and that sting is the decision.',
    watchFor: 'Every play is a trade: the action you take is paid for with the actions printed beside it.',
    examples: [
      { name: 'Glory to Rome', note: 'Cards are buildings, materials, workers and roles all at once.' },
      { name: 'Twilight Struggle', note: 'Play a card for its event or for its operations points, and maybe trigger your rival\'s event.' },
      { name: 'Race for the Galaxy', note: 'Cards are worlds to place and the money you discard to pay for them.' },
      { name: 'Gloomhaven', note: 'Each card has a top and bottom action; you play one half of two cards a turn.' }
    ],
    brief: 'A card with three uses (build it, spend it as money, or use its action). Show the same card played each way and what is lost each time. Then a hand of 4 where every choice blocks another.'
  },
  {
    id: 'ladder-climbing', family: 'cards', title: 'Ladder Climbing',
    file: 'mechanics/ladder-climbing.html', w: 1280, h: 720, minutes: 4,
    hook: 'Beat the last play with a higher set of the same shape, or pass.',
    anatomy: {
      Procedures: 'The leader plays a shape (single, pair, run). Each player beats it with the same shape, higher, or passes.',
      Rules: 'When everyone passes, the pile clears and the last player on top leads any shape. A bomb beats anything.',
      Resources: 'The cards in your hand, and the right to lead.',
      Outcome: 'The first player to empty their hand wins; the lead decides who can dump cards freely.'
    },
    feel: ['Escalation', 'Timing', 'Standoff'],
    feelText: 'Each play dares the next player to go higher. Holding back your best card while others burn theirs feels tense, and a well-timed bomb feels like a heist.',
    watchFor: 'Notice when everyone passes: the player on top leads anything, so holding the highest card is power.',
    examples: [
      { name: 'Big Two', note: 'The classic: singles, pairs and five-card hands, with 2 as the top rank.' },
      { name: 'Tichu', note: 'A partnership climber with bombs, a dragon and bets on going out first.' },
      { name: 'The Great Dalmuti', note: 'Your finishing place sets your seat and trades for the next round.' },
      { name: 'Scout', note: 'You cannot reorder your hand, so taking cards from a play reshapes it.' }
    ],
    brief: 'Four players; a pair is led, beaten by higher pairs, players pass, the leader resets with a run. Track hands shrinking; first to empty wins. Highlight bombs or special beats as the designer\'s spice.'
  },
  {
    id: 'tableau-building', family: 'cards', title: 'Tableau Building',
    file: 'mechanics/tableau-building.html', w: 1280, h: 720, minutes: 6,
    hook: 'The cards you play stay in front of you and change what you can do next.',
    anatomy: {
      Procedures: 'Each turn, gain resources and play one card into the area in front of you.',
      Rules: 'Played cards stay for the whole game. Their abilities give income, discounts or triggers that react to later plays.',
      Resources: 'Acorns (money), cards in hand, and the cards already in your tableau.',
      Outcome: 'Each player ends with a different set of rules; the best tableaus chain into big final turns.'
    },
    feel: ['Growth', 'Ownership', 'Combo joy'],
    feelText: 'Your table slowly becomes your own little machine. Watching one play set off four cards you placed turns ago is the payoff.',
    watchFor: 'Watch each new card change the rules for its owner. A tableau is a personal rulebook built during play.',
    examples: [
      { name: 'Wingspan', note: 'Birds placed in habitats trigger again each time you use that row.' },
      { name: 'Everdell', note: 'Critters and constructions in your city, with free plays from linked cards.' },
      { name: '7 Wonders', note: 'Cards drafted each round build a city that discounts and scores.' },
      { name: 'Res Arcana', note: 'A small tableau of artifacts and places that make and convert essences.' }
    ],
    brief: 'One player\'s table fills with 6 cards over 6 turns; each card adds an ability (discounts, triggers). Show a trigger chain on the last turn. Contrast with hand cards that disappear after use.'
  },

  /* Board & Space */
  {
    id: 'grid-movement', family: 'space', title: 'Grid Movement & Line of Sight',
    file: 'mechanics/grid-movement.html', w: 1280, h: 720, minutes: 4,
    hook: 'Squares and hexes turn distance, cover and facing into decisions.',
    anatomy: {
      Procedures: 'Spend movement points to step from space to space, then check a line from centre to centre to attack.',
      Rules: 'Terrain changes the cost of a step; walls block line of sight; cover makes a hit harder.',
      Resources: 'Movement points each turn, and safe or open positions on the board.',
      Outcome: 'Where you stand decides what you can do: space becomes a resource to read and plan.'
    },
    feel: ['Tactical', 'Spatial', 'Readable'],
    feelText: 'Every move is a little puzzle you can count out. Finding the one square with a clear shot and cover feels clever.',
    watchFor: 'Compare a square grid and a hex grid: diagonals break squares, hexes keep every neighbour equal.',
    examples: [
      { name: 'Chess', note: 'Each piece moves in its own pattern on an 8x8 square grid.' },
      { name: 'Gloomhaven', note: 'Hex maps with line of sight, obstacles and difficult terrain.' },
      { name: 'Descent', note: 'Square-grid dungeon crawling with movement points and blocking.' },
      { name: 'Memoir \'44', note: 'Hex battlefields where woods and hedges block sight and give cover.' }
    ],
    brief: 'A hero moves 3 spaces on a square grid, then the same move on hexes. Show line of sight blocked by a wall, cover reducing a hit, and why movement points make terrain matter.'
  },
  {
    id: 'pattern-building', family: 'space', title: 'Pattern Building',
    file: 'mechanics/pattern-building.html', w: 1280, h: 720, minutes: 4,
    hook: 'Arrange pieces into the shapes the scoring rules reward.',
    anatomy: {
      Procedures: 'Each turn, place one piece on your own grid.',
      Rules: 'Goal cards score specific shapes: a line of 3, a 2×2 block, all four corners. Pieces never move once placed.',
      Resources: 'Empty cells on your grid, and the pieces you get to place.',
      Outcome: 'Players who make one piece serve several goals score far more than those who chase goals one at a time.'
    },
    feel: ['Puzzle', 'Calm focus', 'Satisfying click'],
    feelText: 'It feels like a quiet puzzle you build in front of yourself. The best moment is one tile snapping two patterns into place at once.',
    watchFor: 'Each goal card names a shape. Watch one placement serve two patterns at once: that overlap is the skill.',
    examples: [
      { name: 'Azul', note: 'Draft tiles to fill pattern rows, then wall spaces that score lines and colours.' },
      { name: 'Cascadia', note: 'Place habitat tiles and animals to match shapes on wildlife scoring cards.' },
      { name: 'Patchwork', note: 'Fit odd-shaped patches into a 9×9 quilt; empty squares cost points.' },
      { name: 'Sagrada', note: 'Place dice in a window grid under colour and number rules.' }
    ],
    brief: 'A 5×5 personal grid; goal cards ask for a line of 3, a 2×2 block, and corners. Pieces placed one by one; a single piece completes two goals at once with a double score pop.'
  },
  {
    id: 'pick-up-deliver', family: 'space', title: 'Pick-Up & Deliver',
    file: 'mechanics/pick-up-deliver.html', w: 1280, h: 720, minutes: 4,
    hook: 'Load goods here, carry them there, get paid on arrival.',
    anatomy: {
      Procedures: 'Move a cart along roads, load goods where they are made, and drop them where an order wants them.',
      Rules: 'Each road takes one turn. The cart holds only two goods at a time.',
      Resources: 'Turns, cargo slots and open orders.',
      Outcome: 'Coins per turn depend on the route: chaining small orders can beat chasing the biggest one.'
    },
    feel: ['Planning', 'Efficiency', 'Momentum'],
    feelText: 'Finding a route where every stop pays and loads the next order feels like solving a puzzle on the move. An empty cart feels like wasted time.',
    watchFor: 'Watch the route planning: the best delivery is not the richest one, it is the one on the way to the next.',
    examples: [
      { name: 'Istanbul', note: 'Move a merchant through a bazaar, leaving assistants behind to act.' },
      { name: 'Merchants & Marauders', note: 'Sail between ports trading goods, while pirates and navies get in the way.' },
      { name: 'Firefly: The Game', note: 'Fly a ship across the \'Verse picking up cargo, passengers and jobs.' },
      { name: 'Steam', note: 'Build rail links, then ship coloured goods to matching cities over your track.' }
    ],
    brief: 'A small map with 5 towns; a cart with 2 cargo slots; order cards ("salt to Ridge, 4 coins"). Plan two trips and compare: greedy biggest order first vs a chained route. Show coins per turn.'
  },

  /* Economy & Actions */
  {
    id: 'action-points', family: 'economy', title: 'Action Points',
    file: 'mechanics/action-points.html', w: 1280, h: 720, minutes: 4,
    hook: 'You get a budget of actions each turn. Spend them however you like.',
    anatomy: {
      Procedures: 'Each turn, spend a fixed number of action points on any mix of actions from a menu.',
      Rules: 'Every action has a cost; unspent points are usually lost at the end of the turn.',
      Resources: 'Action points: the same budget for everyone, every turn.',
      Outcome: 'Turns become small budgeting puzzles; the cost menu steers what players do.'
    },
    feel: ['Planning', 'Efficiency', 'Freedom'],
    feelText: 'Instead of "pick one thing", players ask "what is the best way to spend four?" Small efficiencies add up.',
    watchFor: 'Watch the cost menu: making one action cost 2 points instead of 1 changes how often anyone takes it.',
    examples: [
      { name: 'Pandemic', note: 'Four actions per turn: move, treat, build, share.' },
      { name: 'Tikal', note: 'Ten action points per turn to explore a jungle temple site.' },
      { name: 'Forbidden Island', note: 'Three actions: move, shore up, give, capture.' },
      { name: 'Through the Ages', note: 'Civil and military actions as a growing budget.' }
    ],
    brief: 'A turn with 4 AP and a menu (move 1, search 1, build 2, heal 3). Two players spend the same 4 points differently. Then raise "build" to 3 and show how plans change.'
  },
  {
    id: 'supply-demand', family: 'economy', title: 'Supply & Demand Markets',
    file: 'mechanics/supply-demand.html', w: 1280, h: 720, minutes: 4,
    hook: 'The more players buy something, the more it costs the next buyer.',
    anatomy: {
      Procedures: 'Players buy resources from a price track in turn order, always taking the cheapest first.',
      Rules: 'Each purchase empties a slot, so the next unit costs more. Between rounds a refill adds supply back.',
      Resources: 'Coins, the resources in the market, and your place in turn order.',
      Outcome: 'The same goods cost different players very different amounts; turn order becomes a tool for balance.'
    },
    feel: ['Pressure', 'Competition', 'Timing'],
    feelText: 'Watching other players buy what you need before your turn makes prices feel personal. Going first feels like a gift; going last feels like a tax.',
    watchFor: 'Watch the price track: buying first is cheap, buying last is expensive, so turn order becomes money.',
    examples: [
      { name: 'Power Grid', note: 'Resource markets for coal, oil, garbage and uranium; the leader buys last.' },
      { name: 'Brass', note: 'Coal and iron markets whose prices rise as players take cubes.' },
      { name: 'Food Chain Magnate', note: 'Players set prices and compete for customers; the cheapest restaurant gets the sale.' }
    ],
    brief: 'A resource market track priced 1–8 with tokens in the cheap slots first. Three players buy coal in turn order; the price climbs. Refill phase brings prices down. Show the cost each player paid.'
  },
  {
    id: 'dice-placement', family: 'economy', title: 'Dice Placement',
    file: 'mechanics/dice-placement.html', w: 1280, h: 720, minutes: 4,
    hook: 'Roll your dice, then use them as workers. The number decides where they can go.',
    anatomy: {
      Procedures: 'Roll your dice, then take turns placing them on action spaces as workers.',
      Rules: 'Each space asks for certain numbers (a pair, a sum of 10+, a single 6) and holds one player. A consolation space takes low dice.',
      Resources: 'Your dice and their numbers, and the open action spaces.',
      Outcome: 'The roll limits your options, blocking limits them further, and a good design gives every roll some use.'
    },
    feel: ['Puzzle', 'Adaptation', 'Fair luck'],
    feelText: 'The dice hand you a puzzle each round instead of a verdict. Finding a good home for a bad roll feels clever rather than unlucky.',
    watchFor: 'Watch high rolls and low rolls both find uses: good design makes no roll a total loss.',
    examples: [
      { name: 'Kingsburg', note: 'Place dice on advisors whose numbers match the sum you offer.' },
      { name: 'Alien Frontiers', note: 'Roll ships and place them on orbital stations that want certain values.' },
      { name: 'Grand Austria Hotel', note: 'Draft dice from a shared pool; the number of dice decides the action\'s strength.' },
      { name: 'Troyes', note: 'Use dice on city buildings, and buy other players\' dice to use as your own.' }
    ],
    brief: 'Two players roll 3 dice each; action spaces ask for a pair, a sum of 10+, or any 1. Show placements blocking each other (link to worker placement) and a "low roll" consolation space.'
  },

  /* Player Interaction */
  {
    id: 'negotiation', family: 'people', title: 'Negotiation & Trading',
    file: 'mechanics/negotiation.html', w: 1280, h: 720, minutes: 4,
    hook: 'Anything can be offered. Deals are made at the table, and some are broken.',
    anatomy: {
      Procedures: 'Players make open offers to each other; any good, amount or promise can be part of a deal.',
      Rules: 'A trade happens only when both sides agree. The designer decides whether deals are binding or just promises.',
      Resources: 'Goods, needs and, in non-binding games, other players\' trust.',
      Outcome: 'Trades that help both sides happen; trades that help the leader do not; broken promises shape later deals.'
    },
    feel: ['Social', 'Persuasion', 'Suspicion'],
    feelText: 'The game moves from the board to the people. A good deal feels like teamwork; a broken promise is remembered long after the game.',
    watchFor: 'A trade happens only when both sides think they gain. Watch how the leader finds no one willing to trade.',
    examples: [
      { name: 'Catan', note: 'Trade resources at the table to build roads, settlements and cities.' },
      { name: 'Diplomacy', note: 'Every deal is non-binding; alliances form and break between written orders.' },
      { name: 'Bohnanza', note: 'You must give away cards you cannot plant, so trading is constant and friendly.' },
      { name: 'Chinatown', note: 'Swap buildings and shops to complete businesses; nearly everything is negotiable.' }
    ],
    brief: 'Four players with different goods and needs; offers in speech bubbles; one deal both sides win; one refused because it helps the leader. Show binding vs non-binding deals as a designer dial.'
  },
  {
    id: 'take-that', family: 'people', title: 'Take-That',
    file: 'mechanics/take-that.html', w: 1280, h: 720, minutes: 4,
    hook: 'Cards that hurt someone else. Who you target is the whole game.',
    anatomy: {
      Procedures: 'On your turn, play cards that attack another player: steal points, skip their turn, knock them out.',
      Rules: 'The attacker chooses the target. Some games limit who can be attacked or offer defences.',
      Resources: 'Attack cards in hand, points, and turns.',
      Outcome: 'Attacks tend to flow to the leader and keep the race close, but can turn into dogpiles, kingmaking or elimination.'
    },
    feel: ['Mischief', 'Revenge', 'Table drama'],
    feelText: 'Playing an attack card is a loud, social moment: groans, laughs and promises of revenge. Being the target too often stops being fun.',
    watchFor: 'Watch the attacks pile onto the leader. Take-that is a built-in catch-up system, until it targets someone unfairly.',
    examples: [
      { name: 'Munchkin', note: 'Kick open doors, then help or hurt the player fighting the monster.' },
      { name: 'Exploding Kittens', note: 'Draw cards until someone explodes; attack cards push the danger onto others.' },
      { name: 'Unstable Unicorns', note: 'Build a stable of unicorns while destroying and stealing from rivals.' },
      { name: 'Love Letter', note: 'A tiny deck where each card targets someone, and a wrong guess knocks you out.' }
    ],
    brief: 'Four players, attack cards ("steal 2", "skip a turn"). Score bars show the leader attacked and pulled back. Then a beat on kingmaking and player elimination as the risks designers must manage.'
  },
  {
    id: 'deduction', family: 'people', title: 'Deduction',
    file: 'mechanics/deduction.html', w: 1280, h: 720, minutes: 4,
    hook: 'The answer is hidden. Every clue rules something out.',
    anatomy: {
      Procedures: 'Ask questions or test guesses; each answer is a clue.',
      Rules: 'Answers must be truthful; the first player to name the hidden answer correctly wins.',
      Resources: 'Information: what you have ruled out, tracked on a grid or notes.',
      Outcome: 'Logic, not luck, decides the winner once the clues are in.'
    },
    feel: ['Detective work', 'The aha moment', 'Racing to solve'],
    feelText: 'Each clue makes the world smaller. The best moment is the one where the last possibility clicks into place.',
    watchFor: 'Watch the grid of possibilities shrink with each clue. A good clue cuts the space in half.',
    examples: [
      { name: 'Clue', note: 'Who, where, with what: crossed off on a notepad.' },
      { name: 'Mastermind', note: 'Guess a code; pegs tell you how close you were.' },
      { name: 'Cryptid', note: 'Each player holds one clue about a creature\'s location.' },
      { name: 'Codenames', note: 'One-word clues point teammates at hidden agents.' }
    ],
    brief: 'A hidden answer among 12 suspects (3 traits each). Questions and answers cross off rows in a deduction grid; show how many remain after each clue (12 → 6 → 3 → 1). Compare a weak and a strong question.'
  },
  /* ================= Third wave (planned 2026-11-02) ================= */
  /* Game Structure */
  {
    id: 'feedback-loops', family: 'structure', title: 'Feedback Loops',
    file: 'mechanics/feedback-loops.html', w: 1280, h: 720, minutes: 4,
    hook: 'Winning can make you stronger, or slow you down. The rules decide which.',
    anatomy: {
      Procedures: 'Each round, players earn points; how much they earn depends on what they already have.',
      Rules: 'A positive loop pays the leader more (income grows with score). A negative loop helps whoever is behind (a catch-up bonus).',
      Resources: 'Points that double as income, and any bonus rules aimed at the leader or the last player.',
      Outcome: 'Positive loops widen the gap and end games decisively; negative loops keep the race close and the lead changing.'
    },
    feel: ['Momentum', 'Hope', 'Fairness'],
    feelText: 'A snowball feels great for the leader and hopeless for everyone else. A brake keeps everyone in the race, though a leader can feel punished for playing well.',
    watchFor: 'Watch the gap between first and last place: a positive loop widens it, a negative loop closes it.',
    examples: [
      { name: 'Monopoly', note: 'Rent grows with every property you own: a classic runaway leader.' },
      { name: 'Power Grid', note: 'The leader buys resources last and pays the most: a built-in brake.' },
      { name: 'Catan', note: 'More settlements mean more resources each roll, which build more settlements.' },
      { name: 'Through the Ages', note: 'A civilization engine that grows, balanced by aggression from rivals.' }
    ],
    brief: 'Two players race over 6 rounds; income grows with score (+1 per 3 points). A lucky first round snowballs into a big gap. Replay with a catch-up rule (last place +2): the lead changes hands and the gap closes. Show both loops as diagrams.'
  },
  {
    id: 'input-output-randomness', family: 'structure', title: 'Input vs Output Randomness',
    file: 'mechanics/input-output-randomness.html', w: 1280, h: 720, minutes: 4,
    hook: 'Roll first and plan around it, or plan first and hope the roll agrees.',
    anatomy: {
      Procedures: 'Players roll dice and choose actions; the order of those two steps is the design choice.',
      Rules: 'Output: choose an action, then roll to see if it works. Input: roll first, then choose how to use the result.',
      Resources: 'The dice results and the actions they can pay for.',
      Outcome: 'Output randomness creates suspense but can ruin plans; input randomness creates a puzzle and gives more control.'
    },
    feel: ['Suspense', 'Control', 'Puzzle'],
    feelText: 'Rolling after you commit makes every throw a dramatic moment. Rolling before you choose turns the dice into a problem you get to solve.',
    watchFor: 'Same dice, same odds. Only the order of roll and decision changes, and with it how much control players feel.',
    examples: [
      { name: 'Kingsburg', note: 'Roll three dice first, then decide which advisors to influence with them.' },
      { name: 'Risk', note: 'Declare an attack, then roll to see who wins each battle.' },
      { name: 'Roll for the Galaxy', note: 'Roll your workers in secret, then assign them to phases.' },
      { name: 'Talisman', note: 'Roll to move and to fight; the dice decide if a plan works.' }
    ],
    brief: 'Three actions (Attack 5+, Search 3+, Heal any). Output: choose, then roll; plans fail. Input: roll the same numbers first, then choose; every roll finds a use. Compare points and how often a plan is ruined.'
  },
  {
    id: 'turn-order', family: 'structure', title: 'Turn Order & Initiative',
    file: 'mechanics/turn-order.html', w: 1280, h: 720, minutes: 4,
    hook: 'Who goes first is a resource. Games fix it, rotate it, or make you pay for it.',
    anatomy: {
      Procedures: 'Players act one after another each round; the first player gets the first choice.',
      Rules: 'The order can be fixed, rotate each round, follow the score (last place first), or be bought by bidding.',
      Resources: 'The first pick itself, which is worth something whenever choices run out.',
      Outcome: 'The order system can decide a game or keep it balanced, without changing anything else.'
    },
    feel: ['Fairness', 'Anticipation', 'Leverage'],
    feelText: 'Going first feels like an advantage you did not earn unless the rules share it out. Watching the best option vanish before your turn makes order feel very real.',
    watchFor: 'Watch the first player grab the best option each round, then see how each system shares that advantage out.',
    examples: [
      { name: 'Puerto Rico', note: 'The governor passes each round, and each role chosen gives its chooser a bonus.' },
      { name: 'Power Grid', note: 'Turn order follows the score: the leader goes first in auctions but last for resources.' },
      { name: 'Agricola', note: 'Taking the starting player space is itself an action you must spend a worker on.' },
      { name: 'Twilight Imperium', note: 'Strategy cards set initiative numbers, so picking a card also picks your place.' }
    ],
    brief: 'Three players pick rewards worth 5, 3 and 1 in turn order for 3 rounds. Fixed order: 15 / 9 / 3. Rotating: 9 / 9 / 9. Last place first: close scores. Bidding for first: the first pick costs coins.'
  },
  {
    id: 'variable-powers', family: 'structure', title: 'Variable Player Powers',
    file: 'mechanics/variable-powers.html', w: 1280, h: 720, minutes: 4,
    hook: 'Same rules for everyone, plus one ability only you have.',
    anatomy: {
      Procedures: 'Everyone plays by the same base rules; each player also has one special ability.',
      Rules: 'A power bends one rule for its owner only: more of a resource, a cheaper action, or a reward when others act.',
      Resources: 'Your power, and the base actions it changes.',
      Outcome: 'Each player follows a different best plan; testing powers against the base game reveals any that are too strong.'
    },
    feel: ['Identity', 'Discovery', 'Asymmetry'],
    feelText: 'Your power makes your seat feel like a character, not just a colour. Learning how each ability changes the game gives replay value.',
    watchFor: 'Watch each power pull its owner toward a different plan. Asymmetry gives each seat its own story.',
    examples: [
      { name: 'Cosmic Encounter', note: 'Every alien race breaks a different rule of the game.' },
      { name: 'Pandemic', note: 'Each role (Medic, Scientist, ...) bends one rule to help the team.' },
      { name: 'Root', note: 'Factions play by almost entirely different rules on the same map.' },
      { name: 'Small World', note: 'Each race and power pairing is random, so combinations change every game.' }
    ],
    brief: 'Base rules: Gather, Trade, Build; a house takes 7 turns. Four powers (gather more, cheap trades, cheap builds, gain when others build) each change the best plan. A balance check finds one power too strong; one tweak fixes it.'
  },
  {
    id: 'game-end', family: 'structure', title: 'Game End Triggers',
    file: 'mechanics/game-end.html', w: 1280, h: 720, minutes: 4,
    hook: 'Fixed rounds, a target score, or an empty supply: how a game ends shapes how it is played.',
    anatomy: {
      Procedures: 'Players take turns until an end condition is met, then final scores are compared.',
      Rules: 'The end can come after a fixed number of rounds, when someone hits a target score, or when a shared supply runs out.',
      Resources: 'Time itself: rounds left, points to the target, or tiles left in the supply.',
      Outcome: 'Fixed ends reward planning, target scores reward speed, and supply ends let players fight over the clock.'
    },
    feel: ['Pacing', 'Pressure', 'Climax'],
    feelText: 'Knowing exactly when the game ends makes the last turn a planned finale. Not knowing turns every turn into a race.',
    watchFor: 'Watch the last few turns under each trigger: a known end invites planning, a player-triggered end invites racing.',
    examples: [
      { name: 'Agricola', note: 'A fixed 14 rounds, with harvests on known turns.' },
      { name: 'Splendor', note: 'The round ends when someone reaches 15 points; everyone finishes the round.' },
      { name: 'Ticket to Ride', note: 'The game ends when a player is down to 2 or fewer trains.' },
      { name: 'Carcassonne', note: 'The game ends when the last tile is placed.' }
    ],
    brief: 'One game, three endings. Fixed 8 rounds: everyone saves for a big final turn. First to 15: the leader sprints and a slower plan never pays off. Supply runs out: the leader speeds the clock, others slow it.'
  },
  {
    id: 'scoring-systems', family: 'structure', title: 'Scoring Systems',
    file: 'mechanics/scoring-systems.html', w: 1280, h: 720, minutes: 4,
    hook: 'Points now, points at the end, or points nobody can see: scoring shapes tension.',
    anatomy: {
      Procedures: 'Players earn points during play, at the end of the game, or from secret goals revealed at the end.',
      Rules: 'Running scores are public as they happen; end-game bonuses and hidden goals add points only at the end.',
      Resources: 'Points on the track, progress toward bonuses, and secret goal cards.',
      Outcome: 'The scoring system decides when the winner becomes clear, and how long trailing players stay hopeful.'
    },
    feel: ['Hope', 'Suspense', 'Clarity'],
    feelText: 'A visible score is easy to follow but can feel decided early. Late and hidden points keep everyone hoping until the final count.',
    watchFor: 'Watch the leader change when end-game points are revealed. Hidden and late scoring keep a game open longer.',
    examples: [
      { name: 'Ticket to Ride', note: 'Route points score as you play; secret destination tickets are revealed at the end.' },
      { name: 'Carcassonne', note: 'Roads and cities score as they finish; fields score only at the end.' },
      { name: '7 Wonders', note: 'Points are hidden in your city and counted only in the final tally.' },
      { name: 'Splendor', note: 'Points are public on the cards you buy; the first to 15 triggers the end.' }
    ],
    brief: 'Three players, the same 6 rounds scored three ways: running score (winner clear by round 3), end-game bonuses (leader flips at the end), hidden goals (nobody knows who leads until the reveal).'
  },
  /* Chance & Risk */
  {
    id: 'event-decks', family: 'chance', title: 'Event Decks',
    file: 'mechanics/event-decks.html', w: 1280, h: 720, minutes: 4,
    hook: 'Draw a card, and the world changes. The deck sets the story and the pace.',
    anatomy: {
      Procedures: 'Each turn, flip the top card of the event deck and apply what it says.',
      Rules: 'Events range from calm to disastrous. Designers often stack the deck: shuffle it in piles so danger arrives on a rough schedule.',
      Resources: 'Shelter, health or time that the events wear down, and the turns players get to recover.',
      Outcome: 'The order of the deck sets the pacing; a stacked deck turns random danger into rising waves of tension.'
    },
    feel: ['Dread', 'Surprise', 'Story'],
    feelText: 'Every flip is a small held breath. A well-stacked deck makes the game feel like a story that builds to a climax, even though each card is a surprise.',
    watchFor: 'Watch the event deck escalate: a stacked deck makes danger rise on a schedule that still feels surprising.',
    examples: [
      { name: 'Pandemic', note: 'Epidemic cards are shuffled one into each pile of the deck, so outbreaks come in waves.' },
      { name: 'Arkham Horror', note: 'A mythos card each round brings new monsters, rumours and gates.' },
      { name: 'Betrayal at House on the Hill', note: 'Omen cards bring the haunt closer each time one is drawn.' },
      { name: 'Dead of Winter', note: 'Crossroads cards trigger story events when players do certain things.' }
    ],
    brief: 'A co-op village facing storms. Shuffled events vs a stacked deck (split in thirds, one big storm shuffled into each). Show a tension curve rising in waves, and why designers stack decks to control pacing.'
  },
  /* Board & Space */
  {
    id: 'hidden-movement', family: 'space', title: 'Hidden Movement',
    file: 'mechanics/hidden-movement.html', w: 1280, h: 720, minutes: 4,
    hook: 'One player moves in secret. Everyone else hunts with clues.',
    anatomy: {
      Procedures: 'One player records each move in secret; the others move openly and search the map.',
      Rules: 'The hidden player must reveal their position on set turns; searches and blocked spaces rule out locations.',
      Resources: 'Information: the set of places the hidden player could be.',
      Outcome: 'The hunt is a contest of deduction and bluff; reveal timing, map shape and speed decide who wins.'
    },
    feel: ['Tension', 'Deduction', 'Bluff'],
    feelText: 'The hidden player feels clever and hunted; the hunters feel the cloud of possibilities tighten. Each reveal is a dramatic moment for both sides.',
    watchFor: 'Watch the possible locations shrink and grow: every reveal narrows the search, every hidden move widens it.',
    examples: [
      { name: 'Scotland Yard', note: 'Mr. X moves through London by taxi, bus and underground, revealed on set turns.' },
      { name: 'Fury of Dracula', note: 'Dracula moves in secret across Europe while hunters track the trail.' },
      { name: 'Letters from Whitechapel', note: 'Jack moves through numbered streets while police search for clues.' },
      { name: 'Specter Ops', note: 'One agent sneaks through a facility while hunters use gadgets to find them.' }
    ],
    brief: 'A thief moves secretly on a 12-node map, one step per turn, written on a hidden sheet. Hunters see a reveal every 3 turns. Show the cloud of possible locations growing and shrinking until the catch.'
  },
  {
    id: 'modular-board', family: 'space', title: 'Modular Boards & Exploration',
    file: 'mechanics/modular-board.html', w: 1280, h: 720, minutes: 4,
    hook: 'The map is built as you play. No two games share the same board.',
    anatomy: {
      Procedures: 'Lay out the board from shuffled tiles at the start, or flip tiles face up as players explore.',
      Rules: 'Tile placement is random within limits; exploring a tile reveals its reward or danger.',
      Resources: 'The tiles themselves, and good starting spots that move from game to game.',
      Outcome: 'No two games share a board, so openings stay fresh and exploration creates surprises mid-game.'
    },
    feel: ['Discovery', 'Variety', 'Adaptation'],
    feelText: 'A new map every game invites players to read the board instead of following a memorised plan. Flipping an unknown tile is a small thrill every time.',
    watchFor: 'Watch a new tile change everyone\'s plans. Exploration adds discovery, and variety between plays.',
    examples: [
      { name: 'Catan', note: 'Shuffled terrain hexes and number tokens make a new island every game.' },
      { name: 'Betrayal at House on the Hill', note: 'Rooms are drawn and placed as players explore the haunted house.' },
      { name: 'Mage Knight', note: 'Map tiles are revealed as heroes explore, bringing new sites and enemies.' },
      { name: 'Tikal', note: 'Jungle tiles are placed during play, revealing temples to explore.' }
    ],
    brief: 'A fixed board vs a modular one: random hex setup changes which spots are strong. Then exploration: an explorer flips face-down tiles to reveal resources and dangers. End with three different maps from the same tiles.'
  },
  /* Economy & Actions */
  { id: 'resource-conversion', family: 'economy', title: 'Resource Conversion', file: null,
    hook: 'Turn wood into planks, planks into furniture, furniture into points.',
    watchFor: 'Watch the exchange rates: one changed number decides which chain every player chases.',
    examples: [{ name: 'Agricola' }, { name: 'Le Havre' }, { name: 'Puerto Rico' }],
    brief: 'A three-step chain (wood → planks 2:1 → furniture → points) beside a shortcut (sell wood for 1 point each). Show turns and points for each route, then change one rate and watch the best route flip.' },
  /* Player Interaction */
  { id: 'voting', family: 'people', title: 'Voting', file: null,
    hook: 'Majority rules, so votes become the currency of the table.',
    watchFor: 'Watch a vote get bought: a proposal that helps one player passes only when it offers something to others.',
    examples: [{ name: 'Twilight Imperium' }, { name: 'Secret Hitler' }, { name: 'Junta' }, { name: 'The Resistance' }],
    brief: 'Five players vote on proposals ("+2 coins to the north", "tax the leader"). Show self-interest, vote trading and a coalition against the leader. Then compare open and secret ballots.' },
  { id: 'simultaneous-selection', family: 'people', title: 'Simultaneous Action Selection', file: null,
    hook: 'Everyone chooses in secret, then all reveal at once.',
    watchFor: 'Watch players guess what others will pick. Picking what nobody else picks is often worth more than picking the best action.',
    examples: [{ name: 'Libertalia' }, { name: 'Race for the Galaxy' }, { name: 'Diplomacy' }, { name: 'Colt Express' }],
    brief: 'Three players secretly pick one of three actions; players who pick the same action split its reward. Show the reveal, a crowded "best" action paying little, and an empty action paying in full.' }
];
