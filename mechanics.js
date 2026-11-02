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
  }
];
