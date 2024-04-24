// 1. Check if a Movie is in the Library
const movieLibrary1 = ["Inception", "The Matrix", "Interstellar"];
const movieToCheck1 = "Inception";

if (movieLibrary.includes(movieToCheck)) {
  console.log(`${movieToCheck} exists in the movie library.`);
} else {
  console.log(`${movieToCheck} bro doesnt exist.`);
}

// 2. Reverse Movie Release Order
const releaseDates2 = ["1999", "2010", "2014"];
releaseDates2.reverse();
const releaseDates = releaseDates2.slice();

console.log(releaseDates);

// 3. Create a String of Movie Genres
const movieGenres3 = ["Sci-Fi", "Action", "Adventure"];
movieGenres3.join(" ");

// 4. Check for a Specific Genre
const movieGenres4 = ["Sci-Fi", "Action", "Adventure"];
const genreToCheck4 = "Action";

if (movieGenres4.includes(genreToCheck4)) {
  console.log(`${genreToCheck4} exists in the release dates.`);
} else {
  console.log(`${genreToCheck4} does not exist in the release dates.`);
}
// 5. Find Index of a Specific Movie
const movieTitles5 = ["Inception", "The Matrix", "Interstellar"];
const specificMovie5 = "Interstellar";

if (movieTitles5.indexOf(specificMovie5) == 2) {
  console.log(`${genreToCheck4} exists in the release dates.`);
} else {
  console.log(`${genreToCheck4} does not exist in the release dates.`);
}

// 6. Remove the Last Movie
const upcomingReleases6 = ["Avatar", "Dune", "Tenet"];
const yougotremovedbro = upcomingReleases6.pop();
console.log(upcomingReleases6);

// 7. Insert a Movie at the Beginning
const classicMovies7 = ["The Godfather", "Citizen Kane"];
const newMovie7 = "Casablanca";

classicMovies7.push(newMovie7);
console.log(classicMovies7);

// 8. Remove First Movie and Log It
const filmNoir8 = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
const firstMovie = filmNoir.shift();
console.log(filmNoir);

// 9. Concatenate Two Arrays of Movie Titles
const actionMovies9 = ["Die Hard", "John Wick"];
const comedyMovies9 = ["Superbad", "The Hangover"];
const allMoviesLetsFuckingGo = actionMovies9.concat(comedyMovies9);

// 10. Sort Movies Alphabetically
const movieTitles10 = ["Inception", "The Matrix", "Interstellar"];
movieTitles10.sort();
console.log(movieTitles10);

// 11. Create Array from Movie Quotes
const quotesString11 =
  "I'll be back,May the Force be with you,To infinity and beyond";

const quotesArray = quotesString11.split(",");

console.log(quotesArray);

// 12. Slice Array to Get Top Rated Movies
const topMovies12 = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
];
const n12 = 2;
const newMoviesLetsgoooo = topMovies12.slice(0, 1);

// 13. Empty the Movie Wishlist
const movieWishlist13 = ["The Matrix 4", "Avatar 2", "Dune"];
movieWishlist13.splice(0, movieWishlist13.length);

// 14. Add a New Movie
const movies14 = ["Inception", "Interstellar"];
const newMovie14 = "Tenet";

// 15. Remove the First Movie
const movies15 = ["Inception", "Interstellar", "Tenet"];

// 16. Create a String of Movie Titles
const movies16 = ["Inception", "Interstellar", "Tenet"];

// 17. Find Index of a Specific Movie
const movies17 = ["Inception", "Interstellar", "Tenet"];
const movieToFind17 = "Interstellar";

// 18. Reverse the Order of Movies
const movies18 = ["Inception", "Interstellar", "Tenet"];

// 19. Sort Movies Release Years
const releaseYears19 = [2001, 2023, 1998, 2014];
