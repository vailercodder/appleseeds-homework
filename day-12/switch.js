//ex 1
const dayOfWeek = 5;

switch (dayOfWeek) {
  case 1:
    console.log("cool event: family guy move");
    break;
  case 2:
    console.log("cool event: family guy move");
    break;
  case 3:
    console.log("cool event: family guy move");
    break;
  case 4:
    console.log("cool event:  Bumblebee");
    break;
  case 4:
    console.log("cool event: Thor");
    break;
  case 5:
    console.log("cool event: superman");
    break;
  case 6:
    console.log("cool event: spiderman");
    break;
  case 7:
    console.log("cool event: batman");
    break;
}

//ex2

const themeColor = "dark";

switch (dayOfWeek) {
  case "dark":
    console.log("theme set to dark");
    break;
  case "light":
    console.log("theme set to dark");
    break;
  default:
    console.log("theme set to default, bro mode activated");
}

//ex3
const notificationStatus = "new";
const numberOfNewMessages = 3;

switch (notificationStatus) {
  case "new":
  case "unread":
  case "unopened":
    console.log(`You have ${numberOfNewMessages} "new" messages.`);
    break;
  default:
    console.log("You have read movie notifications.");
    break;
}

//ex4
const movieRating = "PG";
const age = 15;

switch (movieRating) {
  case "PG":
  case "G":
  case "PG-13":
    console.log(`You are ${age} of course you can watch this`);
    break;

  case "R":
  case "NC-17":
    console.log("na little bro, you cant watch this yet");
    break;
}

//ex5

const audienceScore = 85;

switch (audienceScore) {
  case audienceScore >= 90:
    console.log("must Watch!");
    break;
  case audienceScore >= 75 && audienceScore <= 89:
    console.log("recommended");
    break;
  default:
    console.log("consideration needed");
    break;
}

//ex6
const userInput = 42;

switch (typeof userInput) {
  case "boolean":
    console.log("User input is a boolean.");
    break;
  case "number":
    console.log("User input is a number.");
    break;
  case "string":
    console.log("User input is a string.");
    break;
  default:
    console.log("User input is of an unknown type.");
    break;
}

//ex7

const releaseMonth = 4;

switch (true) {
  case releaseMonth <= 3:
    console.log("1Q");
    break;

  case releaseMonth >= 4 && releaseMonth < 7:
    console.log("2q");
    break;

  case releaseMonth >= 7 && releaseMonth < 9:
    console.log("3q");
    break;

  case releaseMonth >= 9 && releaseMonth < 12:
    console.log("4q");
    break;

  default:
    console.log("Invalid release month");
    break;
}
