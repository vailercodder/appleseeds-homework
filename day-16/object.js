//ex1
const character = {
  name: "vailer",
  class: "paladin",
  level: 10,
  abilities: ["holy light", "hammer of justice", "oath of devotion"],
  stats: {
    dex: 10,
    str: 20,
    int: 8,
    faith: 25,
  },
  getOverallStrength: function () {
    return "overall str", this.stats.str + this.stats.dex + this.stats.int;
  },
};

//ex2

const character = {
  name: "vailer",
  class: "paladin",
  level: 10,
  abilities: ["holy light", "hammer of justice", "oath of devotion"],
  stats: {
    dex: 10,
    str: 20,
    int: 8,
    faith: 25,
  },
  getOverallStrength: function () {
    return this.stats.str + this.stats.dex + this.stats.int;
  },
};

const addEquipment = {
  equipment: {
    weapon: "divine sword",
    armor: "heavy plate armor",
    accessories: ["ring of truth", "earrings of luck"],
  },
};

const updatedCharacter = Object.assign({}, character, addEquipment);

console.log(character.abilities[0]);
console.log(updatedCharacter.equipment.armor);
console.log(updatedCharacter["equipment"]["armor"]);
//ex 3

const character = {
  name: "vailer",
  class: "paladin",
  level: 10,
  abilities: ["holy light", "hammer of justice", "oath of devotion"],
  stats: {
    dex: 10,
    str: 20,
    int: 8,
    faith: 25,
  },
  getOverallStrength: function () {
    return this.stats.str + this.stats.dex + this.stats.int;
  },
};

const addEquipment = {
  equipment: {
    weapon: "divine sword",
    armor: "heavy plate armor",
    accessories: ["ring of truth", "earrings of luck"],
  },
};

const updatedCharacter = Object.assign({}, character, addEquipment);

character.level = 11;

character.abilities.push("light of ozathkar");

delete character.class;

if ("stats" in character) {
  console.log("stats is here");
}

//ex4

const characters = [
  { name: "eldrin", attributes: { health: 100, mana: 50 } },
  { name: "mira", attributes: { health: 85, mana: 60 } },
];

console.log(characters[0].attributes.health);

function findHealthAvr(totalHealth, numberOfCharacters) {
  return totalHealth / numberOfCharacters;
}

//ex5

const character1 = { name: "eldrin", attributes: { health: 100, mana: 50 } };
const character2 = { name: "mira", attributes: { health: 85, mana: 60 } };

const mergechar = Object.assign({}, { character1 }, { character2 });

console.log(mergechar);

//ex6
const characterStats = {
  name: "Eldrin",
  class: "Mage",
  level: 7,
  health: 100,
  mana: 200,
};

function logCharacterStats(stats) {
  const keys = Object.keys(stats);

  for (const key in characterStats) {
    if (stats.hasOwnProperty(key)) {
      console.log(`${key}: ${stats[key]}`);
    }
  }
}

//EX7
const gameScores = {
  Eldrin: 950,
  Mira: 1200,
  Thorn: 800,
};

function addexp(score) {
  const entries = Object.entries(score);

  for (const [key, value] of entries) {
    if (value < 1000) {
      score[key] += 100;
    }
  }
}
//ex8
const quests = {
  1: { name: "Find the Lost Sword", difficulty: "Easy", reward: "100 gold" },
  2: { name: "Defeat the Dragon", difficulty: "Hard", reward: "500 gold" },
  3: { name: "Escort the Merchant", difficulty: "Medium", reward: "250 gold" },
};

function getOnlyHard(quests) {
  const entries = Object.entries(quests);
  const hardQuests = [];

  for (const [key, value] of entries) {
    if (value.difficulty.toLowerCase() === "hard") {
      hardQuests.push({ [key]: value });
    }
  }

  return hardQuests;
}

//ex9

const skillLevels = {
  Ranger: [8, 9, 7, 10, 8.5],
  Mage: [8.5, 8, 9, 9.5, 7.5],
  Warrior: [7, 7.5, 8, 8.5, 9],
};

function avrSkills(avr) {
  const keys = Object.keys(avr);

  for (const key of keys) {
    const skills = avr[key];
    const sum = skills.reduce((total, current) => total + current, 0);
    const average = sum / skills.length;
    console.log(`${key} Average Skill Level: ${average.toFixed(2)}`);
  }
}

avrSkills(skillLevels);
