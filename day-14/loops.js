// 1. Calculate Total Player Experience
const experiencePoints1 = [100, 150, 75];

// 2. Locate Quest by Title
const questTitles2 = ["Quest 1", "Quest 2", "Quest 3"];

// 3. List Enemies Above Health Threshold
const enemyHealths3 = [80, 120, 65];

// 4. Enhance All Quest Rewards
const questRewards4 = [50, 100, 75];

// 5. Count Occurrences of a Specific Reward
const questRewards5 = [50, 100, 75, 100];
const specificReward5 = 100;

// 6. Verify All Quests Offer Sufficient Challenge
const questChallenges6 = [120, 150, 75];

// 7. Discover the Quest with the Maximum Reward
const questRewards7 = [50, 100, 75, 150];

// 8. Combine Enemy Powers for a Total Assault Value
const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];

// 9. Calculate Total Experience from Quest Matrix
const questExperienceMatrix9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

// 10. Find the Quest with Highest Experience in Each Category
const questExperienceMatrix10 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

// 11. Count High-Difficulty Quests in Each Category
const questDifficultyMatrix11 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

// 12. Sum of Rewards for High-Reward Quests by Category
const questRewardsMatrix12 = [
  [50, 200],
  [300, 175],
  [120, 500],
];

// 13. Average Health of Enemies by Type
const enemyHealthMatrix13 = [
  [80, 120],
  [60, 90],
  [200, 150],
];

function movePlayer(grid, position, direction) {
  // Define the movement vectors
  const deltas = {
    north: { x: 0, y: -1 },
    south: { x: 0, y: 1 },
    east: { x: 1, y: 0 },
    west: { x: -1, y: 0 },
  };

  // Ensure the direction is valid
  if (!deltas.hasOwnProperty(direction)) {
    throw new Error(`Invalid direction: ${direction}`);
  }

  // Calculate the new position
  const newPos = {
    x: position.x + deltas[direction].x,
    y: position.y + deltas[direction].y,
  };

  // Ensure the new position is within the bounds of the grid
  if (
    newPos.x < 0 ||
    newPos.x >= grid[0].length ||
    newPos.y < 0 ||
    newPos.y >= grid.length
  ) {
    throw new Error("New position is out of bounds of the grid");
  }

  // Return the new position
  return newPos;
}

// Example usage
const grid = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];
const currentPosition = { x: 1, y: 1 };
const direction = "north";

const newPosition = movePlayer(grid, currentPosition, direction);
console.log("New Position:", newPosition);
