//ex 1
const before = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];

const vailer = before.map((product) => {
  return product.name;
});

console.log(vailer);

//ex 2

function higherThen(number, target) {
  return number > target;
}

const levels = [{ level: 1 }, { level: 2 }, { level: 3 }];

const targetLevel = 1;

const onlyHigherLevels = levels.filter(function (levels) {
  return higherThen(levels.level, targetLevel);
});

//ex3

const playersHealth = [{ health: 100 }, { health: 120 }, { health: 80 }];

const totalHealth = playersHealth.reduce((acc, obj) => acc + obj.health, 0);

//ex4  //
function combine(players) {
  return players.map((player) => `${player.name} - Level ${player.level}`);
}

const players = [
  { name: "hero", level: 1 },
  { name: "warior", level: 2 },
];

const output = combine(players);
console.log(output);

//ex 5 //

const players = [
  { name: "hero", health: 150 },
  { name: "warior", health: 200 },
];

const updatedHealth = players.map(function (obj, h) {
  return (h = 150);
});

const updatedPlayers = players.map(function (player) {
  if (player.name === playerName) {
    return {
      name: player.name,
      health: newHealth,
    };
  } else {
    return player;
  }
});

//ex 6//

const locations = [
  { location: "forest" },
  { location: "mountain" },
  { location: "castle" },
];

const forestLocations = locations.filter(
  (location) => location.location === "forest"
);
console.log(forestLocations);

//ex 7 // get avr

const levels = [{ level: 1 }, { level: 2 }, { level: 3 }];

const avrLevels = levels.reduce((acc, curr) => acc + curr.level, 0);

const averageLevel = totalLevels / levels.length;

//ex 8// sort

const unSorted = [{ health: 100 }, { health: 120 }, { health: 80 }];

const sorted = unSorted.sort(function (a, b) {
  return a.health - b.health;
});

// ex 9 only inventory map //

const before = [
  { inventory: ["sword", "health potion"] },
  { inventory: ["axe", "shield"] },
];

const vailer = before.map((item) => {
  return item.inventory;
});
