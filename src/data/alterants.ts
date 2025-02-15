export interface AlterantData {
	name: string;
	shape: "might" | "finesse" | "prime" | "might-unlisted";
	tags: string;
	ilvl: string;
	stats: string[];
}

export const alterants: AlterantData[] = [
	{
		name: "Rec",
		shape: "might",
		tags: "armor",
		ilvl: "0.3",
		stats: ["Poison damage resistance: 15%"],
	},
	{
		name: "MeaX",
		shape: "finesse",
		tags: "armor",
		ilvl: "0.9",
		stats: ["Max health +20", "Max energy +5"],
	},
	{
		name: "La",
		shape: "finesse",
		tags: "ranged",
		ilvl: "",
		stats: ["Launch speed +20%", "Max projectile distance +20%"],
	},
	{
		name: "Cr",
		shape: "finesse",
		tags: "melee|ranged",
		ilvl: "6%",
		stats: ["Critical hit chance: 6%"],
	},
	{
		name: "ApX",
		shape: "finesse",
		tags: "armor&chest|form",
		ilvl: "1,15%",
		stats: ["Ability power +15%", "Max energy +10"],
	},
	{
		name: "Ere",
		shape: "might",
		tags: "armor",
		ilvl: "0.1",
		stats: ["Elemental damage resistance: 7%"],
	},
	{
		name: "Mea",
		shape: "finesse",
		tags: "armor",
		ilvl: "2",
		stats: ["Max energy +20"],
	},
	{
		name: "Adb",
		shape: "might",
		tags: "armor",
		ilvl: "20%",
		stats: ["+20% Blunt ability damage"],
	},
	{
		name: "Frx",
		shape: "finesse",
		tags: "ranged",
		ilvl: "8%",
		stats: ["Fire rate +15%", "Spread -10%"],
	},
	{
		name: "Blm",
		shape: "might",
		tags: "melee|ranged",
		ilvl: "17%",
		stats: ["+35% Blunt damage", "Energy cost +35%"],
	},
	{
		name: "Adc",
		shape: "might",
		tags: "armor",
		ilvl: "20%",
		stats: ["+20% Poison ability damage"],
	},
	{
		name: "Alterant",
		shape: "might-unlisted",
		tags: "unlisted",
		ilvl: "12%",
		stats: ["+25% Physical damage", "Energy cost +25%"],
	},
	{
		name: "Mha",
		shape: "finesse",
		tags: "armor&heavy",
		ilvl: "1",
		stats: ["Max health +50"],
	},
	{
		name: "Dex",
		shape: "might",
		tags: "armor",
		ilvl: "0.8",
		stats: ["Defense: 15", "Elemental damage taken reduced by: 0-8"],
	},
	{
		name: "Drp",
		shape: "might",
		tags: "armor",
		ilvl: "",
		stats: ["Physical damage taken reduced by: 0-12"],
	},
	{
		name: "Dm",
		shape: "might",
		tags: "melee|ranged",
		ilvl: "8%",
		stats: ["+25% All damage", "Energy cost +25%"],
	},
	{
		name: "Ats",
		shape: "finesse",
		tags: "any",
		ilvl: "1",
		stats: ["Stabilization attribute +2"],
	},
	{
		name: "Cdf",
		shape: "finesse",
		tags: "melee",
		ilvl: "5%",
		stats: ["Charged damage +25%"],
	},
	{
		name: "Atf",
		shape: "finesse",
		tags: "any",
		ilvl: "1",
		stats: ["Fragmentation attribute +2"],
	},
	{
		name: "Poa",
		shape: "finesse",
		tags: "melee|ranged",
		ilvl: "2",
		stats: ["2-8 Poison damage", "Chance to poison x1.15", "Energy cost +15%"],
	},
	{
		name: "Bu",
		shape: "might",
		tags: "ranged&repeater",
		ilvl: "25%",
		stats: ["Burst shot count +50%"],
	},
	{
		name: "Esh",
		shape: "finesse",
		tags: "melee",
		ilvl: "",
		stats: ["Energy regained on melee hit: 2"],
	},
	{
		name: "Ecr",
		shape: "finesse",
		tags: "melee|ranged",
		ilvl: "",
		stats: ["Energy cost -20%"],
	},
	{
		name: "Dmz",
		shape: "might",
		tags: "form",
		ilvl: "8%",
		stats: ["15% All damage", "Energy cost +15%", "Ability power +15%"],
	},
	{
		name: "Dba",
		shape: "might",
		tags: "melee&blunt",
		ilvl: "1.6",
		stats: ["0-20 Blunt damage"],
	},
	{
		name: "Pdp",
		shape: "might",
		tags: "melee&piercing",
		ilvl: "6",
		stats: ["10-20 Piercing damage", "Penetration Piercing damage reduction: 25"],
	},
	{
		name: "Ews",
		shape: "finesse",
		tags: "armor",
		ilvl: "",
		stats: ["Energy regained when struck: 4"],
	},
	{
		name: "Bca",
		shape: "finesse",
		tags: "melee&(sharp|piercing)",
		ilvl: "",
		stats: ["10% chance to inflict bleed for 2 second(s)"],
	},
	{
		name: "Pdx",
		shape: "might",
		tags: "melee",
		ilvl: "10%",
		stats: ["+20% Physical damage", "Energy cost +15%", "Energy regained on melee hit: 1"],
	},
	{
		name: "Dre",
		shape: "might",
		tags: "armor",
		ilvl: "",
		stats: ["Elemental damage take reduced by: 0-12"],
	},
	{
		name: "Atp",
		shape: "finesse",
		tags: "any",
		ilvl: "1",
		stats: ["Power attribute +2"],
	},
	{
		name: "Reb",
		shape: "might",
		tags: "armor",
		ilvl: "0.3",
		stats: ["Blunt damage resistance: 15%"],
	},
	{
		name: "MhaX",
		shape: "finesse",
		tags: "armor",
		ilvl: "1.4",
		stats: ["Max health +20", "Defense: 20"],
	},
	{
		name: "Prc",
		shape: "finesse",
		tags: "ranged",
		ilvl: "1.2",
		stats: ["Pierce chance: 25%"],
	},
	{
		name: "MhaX",
		shape: "finesse",
		tags: "armor",
		ilvl: "0.4",
		stats: ["Max health +15", "Elemental damage resistance: 7%"],
	},
	{
		name: "DmX",
		shape: "might",
		tags: "melee|ranged",
		ilvl: "8%",
		stats: ["+15% All damage", "+20% All damage/sec", "Energy cost +15%"],
	},
	{
		name: "FrX",
		shape: "might",
		tags: "ranged",
		ilvl: "8%",
		stats: ["Fire rate +15%", "Charge speed +15%"],
	},
	{
		name: "Dem",
		shape: "might",
		tags: "armor",
		ilvl: "6%",
		stats: ["+20% Defense"],
	},
	{
		name: "Ads",
		shape: "might",
		tags: "armor",
		ilvl: "20%",
		stats: ["+20% Sharp ability damage"],
	},
	{
		name: "Er",
		shape: "finesse",
		tags: "armor",
		ilvl: "",
		stats: ["Energy recharge rate: +2/sec"],
	},
	{
		name: "Ks",
		shape: "finesse",
		tags: "piercing|sharp",
		ilvl: "5%",
		stats: ["Killstrike chance: 5%"],
	},
	{
		name: "Pim",
		shape: "might",
		tags: "melee|ranged",
		ilvl: "17%",
		stats: ["+35% Piercing damage", "Energy cost +35%"],
	},
	{
		name: "Ate",
		shape: "finesse",
		tags: "any",
		ilvl: "1",
		stats: ["Element attribute +2"],
	},
	{
		name: "DmX",
		shape: "finesse",
		tags: "melee|ranged",
		ilvl: "8%",
		stats: ["+15% All damage", "Energy cost -10%"],
	},
	{
		name: "Rep",
		shape: "might",
		tags: "armor",
		ilvl: "0.3",
		stats: ["Piercing damage resistance: 15%"],
	},
	{
		name: "Protean",
		shape: "prime",
		tags: "armor&chest",
		ilvl: "12.9",
		stats: ["All damage resistance: 20%", "All attributes +5"],
	},
	{
		name: "Keen",
		shape: "prime",
		tags: "melee",
		ilvl: "0.4 50%",
		stats: [
			"Heat damage resistance: 20%",
			"+50% All damage",
			"Attack speed +10%",
			"Critical hit chance: 15%",
			"Energy cost +50%",
			"Melee charge speed +40%",
			"Energy regained on melee hit: 2",
			"+1 to all tier 1 skills",
		],
	},
	{
		name: "Adh",
		shape: "might",
		tags: "armor",
		ilvl: "20%",
		stats: ["+20% Heat ability damage"],
	},
	{
		name: "MhaX",
		shape: "finesse",
		tags: "armor",
		ilvl: "0.4",
		stats: ["Max health +15", "Physical damage resistance: 7%"],
	},
	{
		name: "Are",
		shape: "might",
		tags: "armor",
		ilvl: "",
		stats: ["All damage taken reduced by: 0-4"],
	},
	{
		name: "Pre",
		shape: "might",
		tags: "armor",
		ilvl: "0.1",
		stats: ["Physical damage resistance 7%"],
	},
	{
		name: "Ree",
		shape: "might",
		tags: "armor",
		ilvl: "0.3",
		stats: ["Electric damage resistance: 15%"],
	},
	{
		name: "Phm",
		shape: "might",
		tags: "melee|ranged",
		ilvl: "+20% Physical damage",
		stats: ["Energy cost +20%"],
	},
	{
		name: "Cos",
		shape: "finesse",
		tags: "armor",
		ilvl: "30%",
		stats: ["Cooldown speed +30%"],
	},
	{
		name: "Ade",
		shape: "might",
		tags: "armor",
		ilvl: "20%",
		stats: ["+20% Electric ability damage"],
	},
	{
		name: "MeaX",
		shape: "finesse",
		tags: "armor",
		ilvl: "0.5 20%",
		stats: ["Max energy +5", "Cooldown speed +20%"],
	},
	{
		name: "Rcs",
		shape: "finesse",
		tags: "ranged",
		ilvl: "",
		stats: ["Charge speed +25%"],
	},
	{
		name: "Atb",
		shape: "finesse",
		tags: "any",
		ilvl: "1",
		stats: ["Battery attribute +2"],
	},
	{
		name: "Pu",
		shape: "finesse",
		tags: "armor",
		ilvl: "",
		stats: ["Money on pickup +50%"],
	},
	{
		name: "Ignitor",
		shape: "prime",
		tags: "armor&chest",
		ilvl: "5.7",
		stats: [
			"Heat damage resistance: 35%",
			"Power attribute +5",
			"Element attribute +5",
			"20% chance to cast level 4 Flame Blade when struck",
		],
	},
	{
		name: "DeZ",
		shape: "finesse",
		tags: "form",
		ilvl: "4%",
		stats: ["+15% Defense", "Energy regained on melee hit: 1"],
	},
	{
		name: "Bsd",
		shape: "finesse",
		tags: "melee&light",
		ilvl: "5%",
		stats: ["Backstab damage +50%"],
	},
	{
		name: "Adp",
		shape: "might",
		tags: "armor",
		ilvl: "20%",
		stats: ["+20% Piercing ability damage"],
	},
	{
		name: "Res",
		shape: "might",
		tags: "armor",
		ilvl: "0.3",
		stats: ["Sharp damage resistance: 15%"],
	},
	{
		name: "ApX",
		shape: "finesse",
		tags: "armor&chest|form",
		ilvl: "38%",
		stats: ["Ability power +15%", "Cooldown speed +20%"],
	},
	{
		name: "Apm",
		shape: "finesse",
		tags: "armor&chest|form",
		ilvl: "30%",
		stats: ["Ability power +30%"],
	},
	{
		name: "MeaX",
		shape: "finesse",
		tags: "armor",
		ilvl: "0.5",
		stats: ["Max energy +5", "Energy recharge rate: +3/sec"],
	},
	{
		name: "Mha",
		shape: "finesse",
		tags: "armor",
		ilvl: "0.6",
		stats: ["Max health +30"],
	},
	{
		name: "Reh",
		shape: "might",
		tags: "armor",
		ilvl: "0.3",
		stats: ["Heat damage resistance: 15%"],
	},
	{
		name: "Dm",
		shape: "finesse",
		tags: "sharp",
		ilvl: "7%",
		stats: ["Killstrike chance: 7%"],
	},
	{
		name: "Crd",
		shape: "finesse",
		tags: "melee|ranged",
		ilvl: "4%",
		stats: ["Critical hit chance: 4%", "Critical hit damage +10%"],
	},
	{
		name: "Pyre",
		shape: "prime",
		tags: "melee",
		ilvl: "5.2 12%",
		stats: [
			"50 Heat damage",
			"Heat damage resistance: 10%",
			"+25% All damage",
			"Energy cost +25%",
			"7% chance to cast level 3 Fireball on strike",
		],
	},
	{
		name: "Gust",
		shape: "prime",
		tags: "bow",
		ilvl: "3.9 20%",
		stats: ["3-50 Piercing damage", "+40% Piercing damage", "Energy cost +40%", "Pierce chance: 25%"],
	},
	{
		name: "Lifeblood",
		shape: "prime",
		tags: "armor&chest",
		ilvl: "2.4",
		stats: ["Max health +100", "Physical damage resistance: 20%", "Health regained when casting any ability: 30HP"],
	},
	{
		name: "Ag",
		shape: "finesse",
		tags: "armor",
		ilvl: "",
		stats: ["Movement speed +10%"],
	},
	{
		name: "Wh",
		shape: "finesse",
		tags: "armor",
		ilvl: "",
		stats: ["Wound healing: 4 health / sec"],
	},
	{
		name: "Csm",
		shape: "finesse",
		tags: "melee",
		ilvl: "2%",
		stats: ["Melee charge speed +25%"],
	},
	{
		name: "Shm",
		shape: "might",
		tags: "melee|ranged",
		ilvl: "17%",
		stats: ["+35% Sharp damage", "Energy cost +35%"],
	},
	{
		name: "Preservation",
		shape: "prime",
		tags: "melee",
		ilvl: "5.8 50%",
		stats: [
			"Max health +40",
			"+100% All damage",
			"Energy cost +100%",
			"Stabilization attribute +5",
			"Power attribute +5",
			"5% chance to cast level 3 Bursting Barrier on strike",
			"+1 to Energy Skin Barrier skill",
			"+1 to all Barrier skills",
		],
	},
	{
		name: "Cleaver",
		shape: "prime",
		tags: "melee&sharp",
		ilvl: "50%",
		stats: [
			"+50% Sharp damage",
			"Critical hit chance: 20%",
			"Energy cost +50%",
			"Penetration Sharp damage reduction: 50",
			"Health regained on kill: 20 HP",
		],
	},
	{
		name: "Greedius",
		shape: "prime",
		tags: "melee",
		ilvl: "85%",
		stats: [
			"+80% All damage",
			"Critical hit chance: 20%",
			"Energy cost +80%",
			"Money on pickup +100%",
			"Killstrike chance: 10%",
		],
	},
	{
		name: "Spark of Hate",
		shape: "prime",
		tags: "melee",
		ilvl: "25%",
		stats: [
			"+50% All damage",
			"15% chance to shock for 5 second(s)",
			"+50% damage to humanoids",
			"Energy cost +50%",
			"5% chance to cast level 4 Sunder Armor on strike",
		],
	},
	{
		name: "Seeker",
		shape: "prime",
		tags: "bow|crossbow",
		ilvl: "4.5 12%",
		stats: [
			"+25% Piercing damage",
			"Energy cost +25%",
			"Homing strength: 250 degrees/sec",
			"Fragmentation attribute +4",
		],
	},
	{
		name: "Adm",
		shape: "might",
		tags: "armor",
		ilvl: "10%",
		stats: ["+10% All ability damage"],
	},
	{
		name: "Safeguard",
		shape: "prime",
		tags: "armor&chest",
		ilvl: "6",
		stats: ["Max health +50", "Piercing damage resistance: 50%", "Stabilization attribute +8"],
	},
	{
		name: "Hea",
		shape: "finesse",
		tags: "melee|ranged",
		ilvl: "2",
		stats: ["2-8 Heat damage", "Chance to scorch x1.15", "+15% scorch duration", "Energy cost +15%"],
	},
	{
		name: "Dot",
		shape: "finesse",
		tags: "melee|ranged",
		ilvl: "8%",
		stats: ["+50% All damage/sec"],
	},
	{
		name: "Life Force",
		shape: "prime",
		tags: "armor&chest",
		ilvl: "5",
		stats: ["Max health +250", "Regain: 9 health/sec"],
	},
];
