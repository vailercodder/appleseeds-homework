//ex1

const gameWorld = {
  players: [{ name: "Geralt", health: 100 }],
  enemies: [],
  items: [],
  npcs: [],
};

function createEntity(entityType, name, health, position, inventory) {
  const stats = { name, health, position, inventory };

  if (!gameWorld.hasOwnProperty(entityType)) {
    console.error("Invalid entity type provided.");
    return "Invalid type";
  }
  if (entityType === "items") {
    console.log("Bro, why would an item need all that? xd");

    const itemStats = { name, inventory };
    gameWorld[entityType].push(itemStats);
    console.log(`${name} added to ${entityType}.`);
    return "Item added";
  }

  const stats = { name, health, position, inventory };
  gameWorld[entityType].push(stats);
  console.log(`${name} added to ${entityType}.`);
  return "Entity added";
}

const addResult = createEntity("players", "Ciri", 150, { x: 6, y: 12 }, [
  "Sword",
  "Potion",
]);
console.log(addResult);

console.log(gameWorld);

//ex2
