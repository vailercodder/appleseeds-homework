// ex 1
let characterStats = [];
function initializeChaharcterStats() {
  characterStats = [];
}

characterStats.push(["Arthur", 75]);
characterStats.push(["Morgan", 82]);

console.log(characterStats);

//ex2

let characterStats = ["Morgan", 82 ]["Arthur", 75];

function addCharacterStat(characterName, strength); {
   characterStats.push([characterName, strength]); 
}

addCharacterStat('Ezio', 90);

console.log(characterStats);


//EX3 

let characterStats = [];

function updateCharacterStrength (characterName); {
  for (let i = 0; i < characterStats.length; i++) {

        if (characterStats[i][0] === strength) {
           characterStats[i][1] = newStrength;
              console.log(`Strength of ${characterName} updated to ${newStrength}.`);
        return; 
        }
    }
    console.log("Character was not found");



}


findCharacterStrength("Ezio"); 


//ex4
let characterStats = [];
function updateCharacterStrength(characterName,newStrength) {
    let searchName = characterName.toLowerCase();

    for (let i = 0; i < characterStats.length; i++) {
        if (characterStats[i][0].toLowerCase() === searchName ) {
             characterStats[i][1] = newStrength; 
            console.log(`Strength of ${characterName} updated to ${newStrength}.`);
            return; 
        }

    }


}



characterStats.push(["Ezio", 90]);


updateCharacterStrength("Ezio", 95); 


//EX5


function concatenateGenres(genres) {
  
    let concatenatedResult = '';

  
    for (let i = 0; i < genres.length; i++) {
        if (i === genres.length - 1) {
           
            concatenatedResult += genres[i];
        } else {
            
            concatenatedResult += genres[i] + ', ';
        }
    }


    return concatenatedResult;
}

// Example 
const genres = ['RPG', 'Action', 'Adventure'];


//ex6
function listCharacters() {

 if (characterStats.length === 0) {
        console.log("No characters available.");
        return;
    }


    for (let i = 0; i < characterStats.length; i++) 
    {
         console.log(`${characterStats[i][0]} - ${characterStats[i][1]}`);
    }

}




characterStats.push(['Ezio', 90]);
characterStats.push(['Arthur', 75]);
characterStats.push(['Lara', 85]);




//ex 7

findStrongestCharacter () {
    if (characterStats.length === 0) {
        console.log("No characters are avivaliable");
        return;

    }
    let strongest = characterStats[0][0];
    let maxStrength = characterStats[0][i];

    for (let i = 1;  i < characterStats.length; i++ ) {
        if (characterStats[i][1] > maxStrength) 
        {
            maxStrength = characterStats[i][1];
            strongest = characterStats [i][0];
        }
    }

       console.log(`The strongest character is ${strongest} with a strength of ${maxStrength}.`);
}

characterStats.push(['Ezio', 90]);
characterStats.push(['Arthur', 75]);
characterStats.push(['Lara', 95]);


findStrongestCharacter();