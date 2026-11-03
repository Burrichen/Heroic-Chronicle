/**
 * Tables for the original Heroic Chronicle (Explorer's Guide to Wildemount, ch. 4).
 * Source: docs/01-heroic-chronicle-reference.md. Roll ranges and mechanical
 * effects follow the book; flavour text is summarised.
 */
import type { Table, TableRow } from '../../engine/types';

const r = (min: number, max: number, label: string, detail?: string, badge?: string): TableRow => ({
  min,
  max,
  label,
  ...(detail ? { detail } : {}),
  ...(badge ? { badge } : {}),
});

// ── Step 1: Homeland ────────────────────────────────────────────────────────

export type RegionId = 'menagerie' | 'marrow' | 'zemni' | 'greying' | 'xhorhas';

export const REGIONS: { id: RegionId; name: string; governments: string[] }[] = [
  { id: 'menagerie', name: 'Menagerie Coast', governments: ['Clovis Concord', 'Revelry pirates'] },
  { id: 'marrow', name: 'Marrow Valley (Western Wynandir)', governments: ['Dwendalian Empire'] },
  { id: 'zemni', name: 'Zemni Fields (Western Wynandir)', governments: ['Dwendalian Empire'] },
  { id: 'greying', name: 'Greying Wildlands', governments: ['Tribes of Shadycreek Run', 'Uthodurn'] },
  { id: 'xhorhas', name: 'Xhorhas (Eastern Wynandir)', governments: ['Kryn Dynasty', 'Xarzith Kitril'] },
];

export const homelandTable: Table = {
  id: 'homeland',
  title: 'Homeland',
  die: 'd100',
  rows: [
    r(1, 21, 'Menagerie Coast', 'Clovis Concord or Revelry pirates'),
    r(22, 40, 'Marrow Valley', 'Western Wynandir · Dwendalian Empire'),
    r(41, 72, 'Zemni Fields', 'Western Wynandir · Dwendalian Empire'),
    r(73, 77, 'Greying Wildlands', 'Tribes of Shadycreek Run or Uthodurn'),
    r(78, 100, 'Xhorhas', 'Eastern Wynandir · Kryn Dynasty or Xarzith Kitril'),
  ],
};
/** Row order of homelandTable matches REGIONS. */
export const regionForHomelandRow = (rowIndex: number) => REGIONS[rowIndex];

// ── Step 2: Background ──────────────────────────────────────────────────────

export const BACKGROUNDS = [
  'Acolyte',
  'Luxonborn',
  'Charlatan',
  'Criminal (Spy)',
  'Myriad Operative',
  'Entertainer',
  'Folk Hero',
  'Grinner',
  'Guild Merchant',
  'Hermit',
  'Noble',
  'Outlander',
  'Sage',
  'Cobalt Scholar',
  'Sailor',
  'Revelry Pirate',
  'Soldier',
  'Augen Trust (Spy)',
  'Urchin',
  'Volstrucker Agent',
] as const;
export type Background = (typeof BACKGROUNDS)[number];

const BACKGROUND_SOURCE: Record<Background, string> = {
  Acolyte: 'PH',
  Luxonborn: 'EGW · Acolyte variant',
  Charlatan: 'PH',
  'Criminal (Spy)': 'PH · Criminal, Spy variant',
  'Myriad Operative': 'EGW · Criminal variant',
  Entertainer: 'PH',
  'Folk Hero': 'PH',
  Grinner: 'EGW',
  'Guild Merchant': 'PH · Guild Artisan, Guild Merchant variant',
  Hermit: 'PH',
  Noble: 'PH',
  Outlander: 'PH',
  Sage: 'PH',
  'Cobalt Scholar': 'EGW · Sage variant',
  Sailor: 'PH',
  'Revelry Pirate': 'EGW · Sailor variant',
  Soldier: 'PH',
  'Augen Trust (Spy)': 'EGW · Spy variant',
  Urchin: 'PH',
  'Volstrucker Agent': 'EGW',
};

export const backgroundTable: Table = {
  id: 'background',
  title: 'Background',
  die: 'd20',
  rows: BACKGROUNDS.map((b, i) => r(i + 1, i + 1, b, BACKGROUND_SOURCE[b])),
};

// ── Step 3: Social Status ───────────────────────────────────────────────────

export type NationColumn = 'CC' | 'DE' | 'GW' | 'KD';
export const NATION_COLUMNS: { id: NationColumn; name: string; values: string }[] = [
  { id: 'CC', name: 'Clovis Concord', values: 'Personal freedom. Folk heroes, entertainers and the working sailor are respected.' },
  { id: 'DE', name: 'Dwendalian Empire', values: 'King and country over personal freedom. Laws bend for the rich.' },
  { id: 'GW', name: 'Greying Wildlands', values: 'Strength. Crime is a virtue, mercy a vice; agents of the Empire are despised.' },
  { id: 'KD', name: 'Kryn Dynasty', values: 'Knowledge and spiritual enlightenment. Creators (and, in wartime, destroyers) are respected.' },
];

/** Government → Social Status column. `null` means the book gives no column. */
export const GOVERNMENT_COLUMN: Record<string, NationColumn | null> = {
  'Clovis Concord': 'CC',
  'Revelry pirates': null,
  'Dwendalian Empire': 'DE',
  'Tribes of Shadycreek Run': 'GW',
  Uthodurn: 'GW',
  'Kryn Dynasty': 'KD',
  'Xarzith Kitril': null,
};

/** Allies and rivals from Social Status: [allies, rivals]. 'faith' = Acolyte in the Empire. */
type Status = [number, number] | 'faith';
const S = (a: number, rv: number): [number, number] => [a, rv];
export const SOCIAL_STATUS: Record<Background, Record<NationColumn, Status>> = {
  Acolyte: { CC: S(1, 0), DE: 'faith', GW: S(0, 1), KD: S(1, 0) },
  Luxonborn: { CC: S(0, 0), DE: S(0, 1), GW: S(0, 0), KD: S(1, 0) },
  Charlatan: { CC: S(1, 0), DE: S(0, 1), GW: S(1, 0), KD: S(0, 1) },
  'Criminal (Spy)': { CC: S(0, 1), DE: S(0, 1), GW: S(1, 0), KD: S(0, 1) },
  'Myriad Operative': { CC: S(0, 1), DE: S(1, 0), GW: S(0, 1), KD: S(0, 0) },
  Entertainer: { CC: S(1, 0), DE: S(1, 0), GW: S(0, 1), KD: S(1, 0) },
  'Folk Hero': { CC: S(1, 0), DE: S(0, 1), GW: S(0, 1), KD: S(1, 0) },
  Grinner: { CC: S(1, 0), DE: S(0, 1), GW: S(0, 0), KD: S(0, 0) },
  'Guild Merchant': { CC: S(0, 1), DE: S(1, 0), GW: S(0, 0), KD: S(1, 0) },
  Hermit: { CC: S(0, 0), DE: S(0, 1), GW: S(1, 0), KD: S(1, 0) },
  Noble: { CC: S(1, 0), DE: S(1, 1), GW: S(0, 1), KD: S(1, 1) },
  Outlander: { CC: S(0, 0), DE: S(0, 0), GW: S(1, 0), KD: S(0, 0) },
  Sage: { CC: S(0, 1), DE: S(0, 1), GW: S(0, 0), KD: S(1, 0) },
  'Cobalt Scholar': { CC: S(1, 0), DE: S(1, 1), GW: S(1, 0), KD: S(0, 1) },
  Sailor: { CC: S(1, 1), DE: S(0, 0), GW: S(0, 1), KD: S(1, 0) },
  'Revelry Pirate': { CC: S(1, 1), DE: S(0, 0), GW: S(1, 0), KD: S(0, 0) },
  Soldier: { CC: S(1, 0), DE: S(1, 1), GW: S(0, 1), KD: S(1, 1) },
  'Augen Trust (Spy)': { CC: S(0, 0), DE: S(1, 0), GW: S(0, 0), KD: S(0, 1) },
  Urchin: { CC: S(1, 0), DE: S(0, 1), GW: S(0, 1), KD: S(0, 1) },
  'Volstrucker Agent': { CC: S(0, 0), DE: S(1, 0), GW: S(0, 0), KD: S(0, 1) },
};

// ── Step 4: Home Settlement ─────────────────────────────────────────────────

export type SettlementType =
  | 'Village'
  | 'Town'
  | 'City'
  | 'Military outpost'
  | 'Nomadic diaspora'
  | 'Seven villages';

const st = (min: number, max: number, name: string, type: SettlementType) => r(min, max, name, type);

export const settlementTables: Record<RegionId, Table> = {
  menagerie: {
    id: 'settlement-menagerie',
    title: 'Menagerie Coast settlements',
    die: 'd100',
    rows: [
      st(1, 1, 'Brokenbank', 'Town'),
      st(2, 2, 'Darktow', 'Town'),
      st(3, 9, 'Feolinn', 'City'),
      st(10, 19, 'Gwardan', 'City'),
      st(20, 36, 'Nicodranas', 'City'),
      st(37, 40, 'Othe', 'City'),
      st(41, 41, 'Palma Flora', 'Town'),
      st(42, 84, 'Port Damali', 'City'),
      st(85, 93, 'Port Zoon', 'City'),
      st(94, 100, 'Tussoa', 'City'),
    ],
  },
  marrow: {
    id: 'settlement-marrow',
    title: 'Marrow Valley settlements',
    die: 'd100',
    rows: [
      st(1, 2, 'Alfield', 'Town'),
      st(3, 5, 'Ashguard Garrison', 'Military outpost'),
      st(6, 7, 'Berleben', 'Town'),
      st(8, 12, 'Bladegarden', 'City'),
      st(13, 18, 'Deastok', 'City'),
      st(19, 22, 'Felderwin', 'City'),
      st(23, 32, 'Grimgolir', 'City'),
      st(33, 40, 'Hupperdook', 'City'),
      st(41, 44, 'Kamordah', 'City'),
      st(45, 45, 'Talonstadt', 'Town'),
      st(46, 50, 'Trostenwald', 'City'),
      st(51, 52, "Vol'antim", 'Town'),
      st(53, 100, 'Zadash', 'City'),
    ],
  },
  zemni: {
    id: 'settlement-zemni',
    title: 'Zemni Fields settlements',
    die: 'd100',
    rows: [
      st(1, 1, 'Blumenthal', 'Town'),
      st(2, 7, 'Bysaes Tyl', 'City'),
      st(8, 11, 'Druvenlode', 'City'),
      st(12, 13, 'Icehaven', 'Town'),
      st(14, 18, 'Nogvurot', 'City'),
      st(19, 20, 'Odessloe', 'City'),
      st(21, 26, "Pride's Call", 'City'),
      st(27, 96, 'Rexxentrum', 'City'),
      st(97, 98, 'Rockguard Garrison', 'Military outpost'),
      st(99, 99, 'Velvin Thicket', 'Nomadic diaspora'),
      st(100, 100, 'Yrrosa', 'Town'),
    ],
  },
  greying: {
    id: 'settlement-greying',
    title: 'Greying Wildlands settlements',
    die: 'd100',
    rows: [
      st(1, 3, 'Boroftkrah', 'Town'),
      st(4, 6, 'Palebank Village', 'Village'),
      st(7, 30, 'Shadycreek Run', 'City'),
      st(31, 100, 'Uthodurn', 'City'),
    ],
  },
  xhorhas: {
    id: 'settlement-xhorhas',
    title: 'Xhorhas settlements',
    die: 'd100',
    rows: [
      st(1, 20, 'Asarius', 'City'),
      st(21, 21, 'Bazzoxan', 'Town'),
      st(22, 22, 'Charis', 'Village'),
      st(23, 30, 'Igrathad', 'Seven villages'),
      st(31, 36, 'Jigow', 'City'),
      st(37, 37, 'New Haxon', 'Military outpost'),
      st(38, 89, 'Rosohna (Ghor Dranas)', 'City'),
      st(90, 93, 'Rotthold', 'City'),
      st(94, 96, 'Urzin', 'Town'),
      st(97, 100, 'Xarzith Kitril', 'City'),
    ],
  },
};

// ── Step 5: Race ────────────────────────────────────────────────────────────

/** Common Wildemount races, offered as quick picks. Any race can be written in. */
export const RACES = [
  'Human',
  'Elf',
  'Drow',
  'Half-elf',
  'Dwarf',
  'Halfling',
  'Gnome',
  'Half-orc',
  'Orc',
  'Goblin',
  'Hobgoblin',
  'Bugbear',
  'Tiefling',
  'Dragonborn',
  'Aasimar',
  'Firbolg',
  'Goliath',
  'Kenku',
  'Tabaxi',
  'Tortle',
  'Triton',
  'Genasi',
  'Kobold',
  'Lizardfolk',
];

// ── Step 6: Family ──────────────────────────────────────────────────────────

export type FamilyTableKind = 'Village' | 'City';

const parentRows = (v: boolean) =>
  v
    ? [r(1, 10, '3 or more living parents'), r(11, 50, '2 living parents'), r(51, 89, '1 living parent'), r(90, 100, 'No living parents')]
    : [r(1, 5, '3 or more living parents'), r(6, 60, '2 living parents'), r(61, 80, '1 living parent'), r(81, 100, 'No living parents')];

const siblingRows = (v: boolean) =>
  v
    ? [r(1, 10, '2d4 + 2 siblings'), r(11, 50, '2d4 siblings'), r(51, 89, '1d4 siblings'), r(90, 100, 'No living siblings')]
    : [r(1, 5, '2d4 + 2 siblings'), r(6, 60, '2d4 siblings'), r(61, 80, '1d4 siblings'), r(81, 100, 'No living siblings')];

export const parentTables: Record<FamilyTableKind, Table> = {
  Village: { id: 'parents-village', title: 'Living parents (village)', die: 'd100', rows: parentRows(true) },
  City: { id: 'parents-city', title: 'Living parents (city)', die: 'd100', rows: parentRows(false) },
};
export const siblingTables: Record<FamilyTableKind, Table> = {
  Village: { id: 'siblings-village', title: 'Living siblings (village)', die: 'd100', rows: siblingRows(true) },
  City: { id: 'siblings-city', title: 'Living siblings (city)', die: 'd100', rows: siblingRows(false) },
};
/** Row index → dice for the number of siblings (null = none). Same for both tables. */
export const SIBLING_DICE: (string | null)[] = ['2d4+2', '2d4', '1d4', null];
/** Row index → description of parents. */
export const PARENT_COUNT = ['3 or more', '2', '1', 'None'];

// ── Step 7: Powerful Family Relationships ───────────────────────────────────

export const familyRelationshipTable: Table = {
  id: 'family-relationship',
  title: 'Powerful family relationships',
  die: 'd100',
  rows: [
    r(1, 10, 'Rival', 'You believe you killed them, by accident or not. They are alive and want revenge.'),
    r(11, 20, 'Rival', 'You insulted them so badly they cut you off. If they return, it is to settle the score.'),
    r(21, 30, 'Rival', 'You always outshone them. They left out of jealousy, planning to come back and beat you.'),
    r(31, 40, 'Rival', 'You learned a secret of theirs. Now they are digging for yours.'),
    r(41, 50, 'Rival', 'A friendly rivalry: you meet now and then to test each other’s skills.'),
    r(51, 60, 'Ally', 'They owe you and resent it. They will help, but only to clear the debt.'),
    r(61, 70, 'Ally', 'They love you but aren’t close. They will help, but not at risk of injury or death.'),
    r(71, 80, 'Ally', 'They caused you a terrible accident as a child and are desperate to make amends.'),
    r(81, 90, 'Ally', 'They left long ago for unexplained reasons, promising to return in your hour of greatest need.'),
    r(91, 100, 'Ally', 'They love you completely and would do anything for you.'),
  ],
};

// ── Step 8: Acquired Allies & Rivals ────────────────────────────────────────

export const allyRelationshipTable: Table = {
  id: 'ally-relationship',
  title: 'Ally relationships',
  die: 'd100',
  rows: [
    r(1, 10, 'A loyal pet', 'Skip the identity roll and choose any beast of CR 1/8 or lower.', 'Pet'),
    r(11, 20, 'An unpaid bet', 'They lost a bet to you and can’t pay, so they repay you in favours.'),
    r(21, 30, 'A former beggar', 'You gave them a large sum. Their life turned around and they want to repay you.'),
    r(31, 40, 'Drinking partner', 'Your favourite drinking partner. Their home is open to you and your friends.'),
    r(41, 50, 'Old mentor', 'You left mid-training and can return to finish when ready.'),
    r(51, 60, 'Shared trauma', 'Bonded through a battle or robbery. They will come if you say you’re in danger.'),
    r(61, 70, 'A terrible secret', 'You share a secret and both swore to keep it. They’ll help protect it.'),
    r(71, 80, 'Devoted admirer', 'They fell in love with you. Whether or not you returned it, they are your closest supporter.'),
    r(81, 90, 'Magical bond', 'You share telepathy with each other within 1 mile.', 'Telepathy'),
    r(91, 100, 'A life debt', 'They owe you their life and will protect you however they can.'),
  ],
};

export const rivalRelationshipTable: Table = {
  id: 'rival-relationship',
  title: 'Rival relationships',
  die: 'd100',
  rows: [
    r(1, 10, 'Blood feud', 'They believe you murdered their sibling, guilty or not, and want your blood.'),
    r(11, 20, 'Sore loser', 'You beat them in a fight. They think you cheated and want to prove they’re better.'),
    r(21, 30, 'Broken promise', 'Your broken promise hurt them badly. They plot to make someone break a promise to you.'),
    r(31, 40, 'Broken heart', 'You broke their heart. They want you to feel the same pain.'),
    r(41, 50, 'The hunter', 'They were ordered to arrest you and hunt you relentlessly.'),
    r(51, 60, 'The rescuer', 'They believe you’ve been replaced or possessed and fight you to “rescue” the real you.'),
    r(61, 70, 'The obsessed', 'You fled home under mysterious circumstances. They’re obsessed with learning why.'),
    r(71, 80, 'Disfigured', 'A power you both tried to harness disfigured them. They’ve mastered it and want to use it on you.'),
    r(81, 90, 'The burden', 'You helped them once. Now they come to you every time they’re in trouble.', 'Nuisance'),
    r(91, 100, 'The “friend”', 'They want to be your friend, but their “help” always makes things worse.', 'Nuisance'),
  ],
};

const STAR = '★ Fateful moment';
export const identityTable: Table = {
  id: 'identity',
  title: 'Ally and rival identities',
  die: 'd100',
  rows: [
    r(1, 5, 'Commoner', 'MM'),
    r(6, 10, 'Acolyte', 'MM'),
    r(11, 15, 'Bandit', 'MM'),
    r(16, 20, 'Bandit captain', 'MM'),
    r(21, 25, 'Berserker', 'MM'),
    r(26, 30, 'Cultist', 'MM'),
    r(31, 35, 'Cult fanatic', 'MM', STAR),
    r(36, 40, 'Druid', 'MM'),
    r(41, 45, 'Gladiator', 'MM', STAR),
    r(46, 50, 'Guard', 'MM'),
    r(51, 55, 'Knight', 'MM'),
    r(56, 60, 'Priest', 'MM'),
    r(61, 65, 'Scout', 'MM'),
    r(66, 70, 'Spy', 'MM'),
    r(71, 75, 'Tribal warrior', 'MM'),
    r(76, 80, 'Veteran', 'MM'),
    r(81, 84, 'Mage', 'MM', STAR),
    r(85, 88, 'Noble', 'MM', STAR),
    r(89, 92, 'Assassin', 'MM', STAR),
    r(93, 94, 'Blood hunter', 'EGW', STAR),
    r(95, 96, 'Good or neutral werebear or weretiger', 'MM', STAR),
    r(97, 98, 'Evil wereboar, wererat or werewolf', 'MM', STAR),
    r(99, 99, 'Archmage', 'MM', STAR),
    r(100, 100, 'Adult gold or adult red dragon', 'MM', STAR),
  ],
};
export const isStarIdentity = (rowIndex: number) => identityTable.rows[rowIndex]?.badge === STAR;

/** Beasts of CR 1/8 or lower in the Monster Manual, for the loyal pet result. */
export const PET_BEASTS = [
  'Cat', 'Dog (mastiff)', 'Owl', 'Hawk', 'Raven', 'Bat', 'Rat', 'Weasel', 'Badger', 'Frog',
  'Lizard', 'Goat', 'Jackal', 'Baboon', 'Crab', 'Octopus', 'Spider', 'Eagle', 'Vulture', 'Deer',
  'Pony', 'Mule', 'Camel', 'Blood hawk', 'Flying snake', 'Giant crab', 'Giant rat', 'Giant weasel',
  'Poisonous snake',
];

// ── Step 9: Fateful Moments ─────────────────────────────────────────────────

export interface FatefulExtra {
  /** A choice the player (or DM) makes for this result. */
  choice?: { title: string; options: string[]; note?: string };
  /** The result tells you to roll on the identities table for someone. */
  identity?: string;
  /** Something to resolve with the DM, shown as a reminder. */
  reminder?: string;
}

export const fatefulMomentTable: Table = {
  id: 'fateful-moment',
  title: 'Fateful moments',
  die: 'd20',
  rows: [
    r(1, 1, 'Parents murdered', 'Your parents were murdered in front of you. Benefit: proficiency in Stealth and Survival.'),
    r(2, 2, 'The dying dark elf', 'You found a dying dark elf wearing a talisman of their child, inscribed “Il’viranya”. Benefit: amulet of proof against detection and location.'),
    r(3, 3, 'A stranger’s gift', 'Lost in the wild, you were saved by a stranger’s gift. Benefit: 1 item from DMG Magic Item Table B (reroll consumables).'),
    r(4, 4, 'Storm-touched', 'You survived a terrible storm and now receive dream visions from an unknown god. Benefit: proficiency in Arcana or Religion.'),
    r(5, 5, 'Famous warrior’s pupil', 'A famous warrior trained you in their signature weapon. Benefit: proficiency with one martial weapon, one such weapon (with DMG special features), and the Martial Adept feat.'),
    r(6, 6, 'Sole survivor', 'You were the sole survivor of a monster raid on your home. Benefit: proficiency in Stealth or with martial weapons.'),
    r(7, 7, 'Famous mage’s student', 'A famous mage tutored you. Benefit: a spellbook and the Magic Initiate feat.'),
    r(8, 8, 'The travelling circus', 'You spent a year with a travelling circus. Benefit: proficiency in Acrobatics or Performance, and a disguise kit.'),
    r(9, 9, 'A year as a bear', 'You were magically turned into a bear for a year until a druid saved you. Benefit: cast speak with animals at will.'),
    r(10, 10, 'Press-ganged', 'You were press-ganged into the army and shaken by war. Benefit: proficiency with medium armour, shields and martial weapons. Cost: a random indefinite madness (DMG).'),
    r(11, 11, 'Kidnapped by bandits', 'You escaped bandits with an old thief’s help. Benefit: proficiency with thieves’ tools and in Stealth.'),
    r(12, 12, 'The demon lord’s dream', 'A demon lord visited you in a dream. Benefit: cast find familiar as a ritual (always a quasit). Cost: a random indefinite madness (DMG).'),
    r(13, 13, 'Lycanthrope attack', 'Evil lycanthropes attacked you and you barely escaped. Cursed with lycanthropy (MM rules for player-character lycanthropes).'),
    r(14, 14, 'Saved by a lycanthrope', 'A werebear or weretiger saved you, seeing your destiny. Gift of lycanthropy (good), granted with your consent.'),
    r(15, 15, 'The pseudodragon', 'You saved a pseudodragon from a giant spider. Benefit: a pseudodragon companion (DM-controlled; obeys you if treated well).'),
    r(16, 16, 'Nearly lost to disease', 'A Cobalt Soul agent helped you survive. Benefit: a periapt of health, which suppresses the disease you still carry.'),
    r(17, 17, 'Exiled or imprisoned', 'Exiled or imprisoned for a crime, guilty or not. Benefit: proficiency in Intimidation and Thieves’ Cant.'),
    r(18, 18, 'The riderless horse', 'You saved a riderless, fully-tacked horse from wolves. Benefit: a riding horse and saddle, and proficiency in Animal Handling.'),
    r(19, 19, 'The treasure map', 'You found a treasure map in a parent’s mysterious book. Benefit: a treasure map to a place the DM chooses.'),
    r(20, 20, 'Secret noble child', 'A letter reveals you’re the secret child of a noble family in Rexxentrum. Benefit: 100 gp and the family’s signet ring.'),
  ],
};

/** Short benefit line per fateful moment (index = row index), for the summary. */
export const FATEFUL_BENEFIT: string[] = [
  'Proficiency: Stealth, Survival',
  'Amulet of proof against detection and location',
  '1 item from DMG Magic Item Table B (reroll consumables)',
  'Proficiency: {choice}',
  'Martial weapon proficiency + one such weapon (with special features) + Martial Adept feat',
  'Proficiency: {choice}',
  'Spellbook + Magic Initiate feat',
  'Proficiency: {choice} + disguise kit',
  'Cast speak with animals at will',
  'Proficiency: medium armour, shields, martial weapons · Cost: random indefinite madness',
  'Proficiency: thieves’ tools, Stealth',
  'Find familiar as a ritual (always a quasit) · Cost: random indefinite madness',
  'Cursed lycanthropy: {choice}',
  'Lycanthropy (good): {choice}',
  'Pseudodragon companion',
  'Periapt of health (suppresses {choice})',
  'Proficiency: Intimidation, Thieves’ Cant',
  'Riding horse + saddle · Proficiency: Animal Handling',
  'Treasure map (DM chooses the destination)',
  '100 gp + signet ring of your true family',
];

export const FATEFUL_EXTRAS: Record<number, FatefulExtra> = {
  0: { identity: 'Who was the killer?' },
  2: { identity: 'Who was the stranger?', reminder: 'Roll on DMG Magic Item Table B with your DM.' },
  3: { choice: { title: 'Which proficiency?', options: ['Arcana', 'Religion'] } },
  4: { reminder: 'Choose the martial weapon and its DMG special features with your DM.' },
  5: { choice: { title: 'Which proficiency?', options: ['Stealth', 'Martial weapons'] } },
  6: { reminder: 'Choose your Magic Initiate spell class and spells.' },
  7: { choice: { title: 'Which proficiency?', options: ['Acrobatics', 'Performance'] } },
  9: { reminder: 'Roll your indefinite madness on the DMG table.' },
  11: { reminder: 'Roll your indefinite madness on the DMG table.' },
  12: {
    choice: { title: 'Which curse? (DM’s choice)', options: ['Wereboar', 'Wererat', 'Werewolf'] },
    reminder: 'Use the MM rules for player-character lycanthropes.',
  },
  13: {
    choice: { title: 'Which lycanthrope saved you? (DM’s choice)', options: ['Werebear', 'Weretiger'] },
    reminder: 'Granted only with your consent. Use the MM rules for player-character lycanthropes.',
  },
  15: { choice: { title: 'Which disease?', options: ['Cackle fever', 'Sewer plague', 'Sight rot'] } },
  18: { reminder: 'The DM decides where the map leads.' },
};

// ── Step 10: Favourite Food ─────────────────────────────────────────────────

export type CuisineId = 'MC' | 'WW' | 'GW' | 'EW';
export const CUISINE_FOR_REGION: Record<RegionId, CuisineId> = {
  menagerie: 'MC',
  marrow: 'WW',
  zemni: 'WW',
  greying: 'GW',
  xhorhas: 'EW',
};

const food = (id: CuisineId, title: string, items: [string, string][]): Table => ({
  id: `food-${id}`,
  title,
  die: 'd8',
  rows: items.map(([label, detail], i) => r(i + 1, i + 1, label, detail)),
});

export const foodTables: Record<CuisineId, Table> = {
  MC: food('MC', 'Menagerie Coast favourite foods', [
    ['Paella', 'Rice, white beans and seafood'],
    ['Plantain cups', 'Fried plantain filled with meat and rice'],
    ['Gazpacho', 'Chilled vegetable and fruit soup'],
    ['Honeyflame bread', 'Fried, honey-soaked and spiced'],
    ['Fusaka fish', 'Spiced fried seafood cutlets'],
    ['Snakelocks noodles', 'Battered, fried sea-anemone tendrils'],
    ['Queen’s water', 'A guava and tamarind soft drink'],
    ['Blacksand coffee', 'A tiny shot brewed in hot sand'],
  ]),
  WW: food('WW', 'Western Wynandir favourite foods', [
    ['Dumplings', 'Steamed potato bread'],
    ['Sauerbraten', 'Pickled horse meat with cabbage'],
    ['Brawn', 'A head-cheese meat jelly'],
    ['Schweinshaxe', 'Marinated roast pork knuckle'],
    ['Dampfnudel', 'A steamed roll, sweet or savoury'],
    ['Spanferkel', 'Roast suckling pig (a luxury)'],
    ['Trost', 'Sweet dark ale from Trostenwald'],
    ['Radler', 'Beer with imported lemonade (pricey)'],
  ]),
  GW: food('GW', 'Greying Wildlands favourite foods', [
    ['Imperial pickled plums', 'Smuggled in'],
    ['Charred venison', 'With roast potatoes'],
    ['Raw venison', 'Still bloody'],
    ['Elf-mash', 'Creamy overripe cloudberries'],
    ['Dwarven rootbake', 'Root casserole wrapped in seaweed'],
    ['Jam porridge', 'Rice with salmonberry jam'],
    ['Blazing tea', 'Fireroot and scalding spices'],
    ['Sbiten', 'A hot honey-and-spice drink'],
  ]),
  EW: food('EW', 'Eastern Wynandir favourite foods', [
    ['Rzukaal', 'Rice noodles, mushrooms and giant spider legs'],
    ['Yuyandl', 'Grilled spiced yuyo with rice'],
    ['Mastodon kor’rundl', 'Grilled mastodon, kor’run squash and rice'],
    ['Kinespaji spaaldl', 'Mushroom soup with horizonback turtle spit'],
    ['Umarindaly', 'Rice pudding with gooseberry jam'],
    ['Keltaly', 'Frozen blackcurrant cream'],
    ['Erzfaalyu', 'Fermented rice spirit'],
    ['Yunfaalyu', 'Ice-cold plum liquor with currants'],
  ]),
};

// ── Step 11: Mysterious Secret ──────────────────────────────────────────────

const SECRETS = [
  'A best friend handed you a key glowing icy blue one night, then vanished for good.',
  'You alone witnessed a murder. The killer took a ruby-centred gold coin from the body.',
  'In a dream, an old stranger screamed “Scourger!” at you and burst into flame.',
  'You found a cliff riddled with caves big enough for people to hide in.',
  'You followed a strangely purposeful cat that watched an elder’s house for an hour, then bolted as if released from a spell.',
  'A parent left armed in a midnight storm and returned a week later with a shattered shield. They never spoke of it.',
  'A farmer friend’s crops doubled weekly until pumpkins grew house-sized. Then the friend vanished and the fields were burned.',
  'You saw a colossal figure striding through storm clouds. It looked at you and walked on.',
  'A sibling sat on your chest at night, said “The time is soon,” giggled and fled, and later remembered nothing.',
  'A giant bird flew overhead crying what sounded like your name.',
  'Spat-out fruit seeds spelled a magic word. Years later the same word appeared in a slice of bread.',
  'A dead warrior friend keeps appearing at the edge of your vision in their old armour.',
  'A seer’s touch showed you a flaming bird chained and writhing beneath a mountain.',
  'At sea, a rumbling voice surrounded you and golden eyes stared up from the water.',
  'A potato burst into worms and you saw a vision of a vast worm devouring the world.',
  'A tall, red-skinned horned figure walked a meadow and flowers grew taller in its wake. You fled.',
  'A blindfolded, scarred stranger glowing silver, perhaps with black wings, saved you from wolves.',
  'Burned by a blade you were forging, you had a vision of mighty weapons calling to you.',
  'A fleeing stranger said they’d escaped “an evil place”, then dropped dead. The body was gone when you returned.',
  'You caught a falling star. It smiled and told you to find it the day fire erupts from the earth.',
];
const SECRET_TITLES = [
  'The icy key', 'The ruby coin', 'The burning stranger', 'The hidden caves', 'The watching cat',
  'The shattered shield', 'The burned fields', 'The storm giant', 'The midnight whisper', 'The calling bird',
  'The magic word', 'The lingering ghost', 'The chained firebird', 'The golden eyes', 'The world-worm',
  'The horned walker', 'The silver stranger', 'The calling blades', 'The vanished body', 'The falling star',
];
export const secretTable: Table = {
  id: 'secret',
  title: 'Mysterious secrets',
  die: 'd20',
  rows: SECRETS.map((s, i) => r(i + 1, i + 1, SECRET_TITLES[i], s)),
};

// ── Step 12: Prophecy ───────────────────────────────────────────────────────

const PROPHECIES: [string, string][] = [
  ['Kill the creature that killed my parents', 'and lose my sense of purpose'],
  ['Learn why the Cerberus Assembly took my sibling', 'which sets uncontrollable political events in motion'],
  ['Save my village from a year of gnoll raids', 'which inspires me to greater heroism'],
  ['Uncover the Kryn’s secrets of consecution', 'and discover a terrifying truth'],
  ['Join a blood hunter order', 'and gain power at a steep price'],
  ['Steal a fortune from a Revelry pirate', 'and attract unsavoury people with my wealth'],
  ['Become a hero of the Empire–Kryn war', 'and be haunted by atrocities'],
  ['Cleanse the Savalirwood’s corruption', 'by taking it into myself'],
  ['Infiltrate the Myriad', 'and be forced into evil acts'],
  ['Find an Eiselcross relic and become famous', 'but the relic exacts a terrible cost'],
  ['Speak with a dragon and survive', 'and earn its eternal wrath'],
  ['Steal a holy Kryn relic', 'and be hunted by everyone who wants its power'],
  ['I will hesitate at a crucial moment', 'and someone else will suffer for it'],
  ['Stumble into the Golden Grin', 'reject them, but be drawn back'],
  ['Befriend and ride a flying beast', 'and others will envy the bond'],
  ['Kneel before the Bright Queen without knowing who she is', 'which leads to danger'],
  ['Hold the Empire’s fate briefly before Princess Suria Dwendal', 'and realise the stakes too late'],
  ['Cause a Clovis Concord marquis’s death', 'know the killer, but no one believes me'],
  ['Anger one of the Tribes of Shadycreek Run', 'and others suffer as they hunt me'],
  ['Meet my birth parents', 'and learn a world-changing secret about my birth'],
];
export const prophecyTable: Table = {
  id: 'prophecy',
  title: 'Prophecy inspirations',
  die: 'd20',
  rows: PROPHECIES.map(([g, c], i) => r(i + 1, i + 1, g, `→ ${c}`)),
};
export const prophecyFill = (rowIndex: number) => PROPHECIES[rowIndex];

export const PROPHECY_REWARDS = [
  'Gain inspiration whenever you finish a long rest, for 1d10 days',
  'Advantage on saves against being frightened, for 1d10 days',
  'Weapon attacks deal +1d6 damage of the weapon’s type, for 1d4 days',
];

export const ALL_TABLES: Table[] = [
  homelandTable,
  backgroundTable,
  ...Object.values(settlementTables),
  ...Object.values(parentTables),
  ...Object.values(siblingTables),
  familyRelationshipTable,
  allyRelationshipTable,
  rivalRelationshipTable,
  identityTable,
  fatefulMomentTable,
  ...Object.values(foodTables),
  secretTable,
  prophecyTable,
];
