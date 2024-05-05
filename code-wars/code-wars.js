//ex 1  camelcase !

function toCamelCase(str) {
  if (typeof str !== "string") {
    console.error("Input must be a string.");
    return null;
  }
  if (str.trim() === "") {
    return ""; // Return an empty string
  }

  const words = str.split(/-|_/);
  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  if (str[0] === str[0].toUpperCase()) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  } else {
    words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
  }

  return words.join("");
}
