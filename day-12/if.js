//ex 1
const movieRating = 8;

if (movieRating > 7) {
  console.log("highly rated movie");
} else {
  console.log("big-budget movie");
}

//ex2
const movieBudget = 50000000;

if (movieBudget >= 1000000 && movieBudget <= 100000000) {
  console.log("Big-budget movie");
} else {
  console.log("Indie movie");
}
//ex3
const movieGenre = "horror";
const audienceAge = 21;

if (movieGenre === "horror") {
  if (audienceAge >= 18) {
    console.log("Suitable for the audience.");
  } else {
    console.log("Not suitable for the audience.");
  }
}
console.log(audienceAge(16));
//ex4

const firstMovieDuration = 30;
const secondMovieDuration = 20;

if (firstMovieDuration === secondMovieDuration) {
  console.log("movies are the same");
} else if (firstMovieDuration > secondMovieDuration) {
  console.log("bro the first one is longer");
} else {
  console.log("The second movie is longer.");
}
// 5. Check Viewer Age for Movie Content:
const viewerAge = 15; // Example age
if (viewerAge >= 13 && viewerAge <= 18) {
  console.log("Suitable for teens");
} else if (viewerAge > 18) {
  console.log("Suitable for adults");
} else {
  console.log("Suitable for kids");
}

//EX6. 
const popularityScore = 85; // 
console.log(popularityScore >= 80 ? "Popular movie" : "Less known movie");

//EX 7. Check Number of Awards (Even or Odd) with Ternary Operator:
const numOfAwards = 5; // Example number of awards
console.log(numOfAwards % 2 === 0 ? "Even number of awards" : "Odd number of awards");

// EX8. 
const actorAge = 22; /
console.log(
  actorAge < 14 ? "child Actor" : 
  actorAge <= 24 ? "Young Actor" : "Adult Actor"
);

// EX9. Access Control to a Premiere Event:
const hasInvitation = true; // Example boolean
console.log(hasInvitation ? "Welcome to the premiere" : "Please check your invitation");

// EX10. Movie Screening Duration Category:
const screeningDuration = 90; // Example duration in minutes
if (screeningDuration < 40) {
  console.log('Short film');
} else if (screeningDuration <= 120) {
  console.log('Feature film');
} else {
  console.log('Epic length movie');
}

//EX11
const dayOfWeek = "saturday";

if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
  console.log("bro there is  a Special airing tonight");
} else {
  console.log("Regular shit tonight");
}
