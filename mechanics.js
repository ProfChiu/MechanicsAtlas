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
  /* ================= PLANNED (scaffolding, not built yet) =================
     file: null → shown on the hub as "Coming soon".
     To build one: write mechanics/<id>.html per ANIMATION_CONTRACT.md from its `brief`,
     add anatomy / feel / feelText / minutes / w / h, then set `file`. */

  /* Chance & Risk */
  { id: 'dice-pools', family: 'chance', title: 'Dice Pools & Successes', file: null,
    hook: 'Roll a handful of dice and count the hits. More dice, better odds, never a sure thing.',
    watchFor: 'Each extra die moves the chance of at least one success less than the one before it.',
    examples: [{ name: 'King of Tokyo' }, { name: 'Vampire: The Masquerade (V5)' }, { name: 'Shadowrun' }, { name: 'Yahtzee' }],
    brief: 'Pools of 1–6 d6 where 5–6 is a hit. Show the chance of at least one hit per pool size as a bar chart (33%, 56%, 70%, 80%, 87%, 91%): diminishing returns. Then rerolls as a second lever.' },
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
  { id: 'bag-building', family: 'chance', title: 'Bag Building', file: null,
    hook: 'Put better tokens in your bag, then draw blind. You control the odds, not the draw.',
    watchFor: 'Watch the chance of drawing a good token rise as the bag improves, and fall again when junk goes in.',
    examples: [{ name: 'Orléans' }, { name: 'The Quacks of Quedlinburg' }, { name: 'Dungeon Alliance' }],
    brief: 'A cloth bag with 10 tokens (7 weak, 3 strong). Each round add strong tokens and draw 4. A pie of bag contents updates each round; contrast with deck-building (bag = reshuffle every draw).' },

  /* Card Systems */
  { id: 'multi-use-cards', family: 'cards', title: 'Multi-Use Cards', file: null,
    hook: 'One card, several ways to play it. Choosing one means giving up the rest.',
    watchFor: 'Every play is a trade: the action you take is paid for with the actions printed beside it.',
    examples: [{ name: 'Glory to Rome' }, { name: 'Twilight Struggle' }, { name: 'Race for the Galaxy' }, { name: 'Gloomhaven' }],
    brief: 'A card with three uses (build it, spend it as money, or use its action). Show the same card played each way and what is lost each time. Then a hand of 4 where every choice blocks another.' },
  { id: 'ladder-climbing', family: 'cards', title: 'Ladder Climbing', file: null,
    hook: 'Beat the last play with a higher set of the same shape, or pass.',
    watchFor: 'Notice when everyone passes: the player on top leads anything, so holding the highest card is power.',
    examples: [{ name: 'Big Two' }, { name: 'Tichu' }, { name: 'The Great Dalmuti' }, { name: 'Scout' }],
    brief: 'Four players; a pair is led, beaten by higher pairs, players pass, the leader resets with a run. Track hands shrinking; first to empty wins. Highlight bombs or special beats as the designer\'s spice.' },
  { id: 'tableau-building', family: 'cards', title: 'Tableau Building', file: null,
    hook: 'The cards you play stay in front of you and change what you can do next.',
    watchFor: 'Watch each new card change the rules for its owner. A tableau is a personal rulebook built during play.',
    examples: [{ name: 'Wingspan' }, { name: 'Everdell' }, { name: '7 Wonders' }, { name: 'Res Arcana' }],
    brief: 'One player\'s table fills with 6 cards over 6 turns; each card adds an ability (discounts, triggers). Show a trigger chain on the last turn. Contrast with hand cards that disappear after use.' },

  /* Board & Space */
  { id: 'grid-movement', family: 'space', title: 'Grid Movement & Line of Sight', file: null,
    hook: 'Squares and hexes turn distance, cover and facing into decisions.',
    watchFor: 'Compare a square grid and a hex grid: diagonals break squares, hexes keep every neighbour equal.',
    examples: [{ name: 'Chess' }, { name: 'Gloomhaven' }, { name: 'Descent' }, { name: 'Memoir \'44' }],
    brief: 'A hero moves 3 spaces on a square grid, then the same move on hexes. Show line of sight blocked by a wall, cover reducing a hit, and why movement points make terrain matter.' },
  { id: 'pattern-building', family: 'space', title: 'Pattern Building', file: null,
    hook: 'Arrange pieces into the shapes the scoring rules reward.',
    watchFor: 'Each goal card names a shape. Watch one placement serve two patterns at once: that overlap is the skill.',
    examples: [{ name: 'Azul' }, { name: 'Cascadia' }, { name: 'Patchwork' }, { name: 'Sagrada' }],
    brief: 'A 5×5 personal grid; goal cards ask for a line of 3, a 2×2 block, and corners. Pieces placed one by one; a single piece completes two goals at once with a double score pop.' },
  { id: 'pick-up-deliver', family: 'space', title: 'Pick-Up & Deliver', file: null,
    hook: 'Load goods here, carry them there, get paid on arrival.',
    watchFor: 'Watch the route planning: the best delivery is not the richest one, it is the one on the way to the next.',
    examples: [{ name: 'Istanbul' }, { name: 'Merchants & Marauders' }, { name: 'Firefly: The Game' }, { name: 'Steam' }],
    brief: 'A small map with 5 towns; a cart with 2 cargo slots; order cards ("salt to Ridge, 4 coins"). Plan two trips and compare: greedy biggest order first vs a chained route. Show coins per turn.' },

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
  { id: 'supply-demand', family: 'economy', title: 'Supply & Demand Markets', file: null,
    hook: 'The more players buy something, the more it costs the next buyer.',
    watchFor: 'Watch the price track: buying first is cheap, buying last is expensive, so turn order becomes money.',
    examples: [{ name: 'Power Grid' }, { name: 'Brass' }, { name: 'Food Chain Magnate' }],
    brief: 'A resource market track priced 1–8 with tokens in the cheap slots first. Three players buy coal in turn order; the price climbs. Refill phase brings prices down. Show the cost each player paid.' },
  { id: 'dice-placement', family: 'economy', title: 'Dice Placement', file: null,
    hook: 'Roll your dice, then use them as workers. The number decides where they can go.',
    watchFor: 'Watch high rolls and low rolls both find uses: good design makes no roll a total loss.',
    examples: [{ name: 'Kingsburg' }, { name: 'Alien Frontiers' }, { name: 'Grand Austria Hotel' }, { name: 'Troyes' }],
    brief: 'Two players roll 3 dice each; action spaces ask for a pair, a sum of 10+, or any 1. Show placements blocking each other (link to worker placement) and a "low roll" consolation space.' },

  /* Player Interaction */
  { id: 'negotiation', family: 'people', title: 'Negotiation & Trading', file: null,
    hook: 'Anything can be offered. Deals are made at the table, and some are broken.',
    watchFor: 'A trade happens only when both sides think they gain. Watch how the leader finds no one willing to trade.',
    examples: [{ name: 'Catan' }, { name: 'Diplomacy' }, { name: 'Bohnanza' }, { name: 'Chinatown' }],
    brief: 'Four players with different goods and needs; offers in speech bubbles; one deal both sides win; one refused because it helps the leader. Show binding vs non-binding deals as a designer dial.' },
  { id: 'take-that', family: 'people', title: 'Take-That', file: null,
    hook: 'Cards that hurt someone else. Who you target is the whole game.',
    watchFor: 'Watch the attacks pile onto the leader. Take-that is a built-in catch-up system, until it targets someone unfairly.',
    examples: [{ name: 'Munchkin' }, { name: 'Exploding Kittens' }, { name: 'Unstable Unicorns' }, { name: 'Love Letter' }],
    brief: 'Four players, attack cards ("steal 2", "skip a turn"). Score bars show the leader attacked and pulled back. Then a beat on kingmaking and player elimination as the risks designers must manage.' },
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
  }
];
