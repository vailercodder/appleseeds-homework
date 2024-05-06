//ex 1

const destinationDetails = {
  name: "Paris",
  country: "France",
  rating: 5,
  continent: "Europe",
};

const { name, country, rating } = destinationDetails;

console.log(`Name: ${name}, Country: ${country}, Rating: ${rating}`);

// ex 2

let topDestinationsList = ["Paris", "Tokyo", "New York", "London"];


const [Paris, tokyo ...rest] = topDestinationsList;



// 3
const destinationRatings = {
  Paris: 5,
  Tokyo: 4,
};

const ratingUpdates = {
  Paris: 4,
  Tokyo: 5,
};

 function updated(destinationRatings) {
   const returnUpdated = {...ratingUpdates}

   return returnUpdated 
 };

 console.log(updated(destinationRatings))

 // ex 4


 const itinerary1 = ['Visit Louvre', 'Eiffel Tower', 'Seine River Cruise'];
const itinerary2 = ['Eiffel Tower', 'Visit Louvre', 'Montmartre'];



const combinedItinerary = [
  ...itinerary1
  ...itinerary2
];





function sliceDuplicates(combinedItinerary) {
  const uniqueItems = [];
  for (const item of combinedItinerary) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }
  return uniqueItems;
}



const uniqueCombinedItinerary = sliceDuplicates(combinedItinerary);

console.log(uniqueCombinedItinerary);



// 5
const travelerInfo = {
  name: 'John',
  accommodations: {
    first: 'Hilton Paris Opera',
    second: 'Mercure Paris Centre Tour Eiffel',
    third: 'Ibis Paris Montmartre',
  },
};


const {name, accommodations:{first,second} } = travelerInfo



console.log(name);
console.log(first); 
console.log(second);

// 6


const baseProfile = {
  name: 'Jane',
  nationality: 'American',
};

const preferences = {
  food: 'Vegetarian',
  interests: ['Museums', 'Art'],
};



const merged =  {...baseProfile, ...preferences};


// 7


const travelerDetails = {
  name: 'Dave',
  nationality: 'Canadian',
  interests: ['Hiking', 'Photography', 'Food'],

};


function addInterests(array) {
travelerDetails.interests.push(...array)

};


addInterests(['vailer', 'Travel']);

console.log(travelerDetails.interests);



// 8
    const travelItinerary = [
    ['Paris', 'Lyon'],
    ['Lyon', 'Nice'],
    ['Nice', 'Paris'],
    ];


    function mergedArrays(travelItinerary) {
        const  combinedItems = [].concat(...travelItinerary);
          const uniqueItems = []
  for (const item of combinedItems) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }
   return uniqueItems;

    
    }
const mergedItinerary = mergedArrays(travelItinerary);
    console.log(mergedItinerary);


// 9 

const travelers = [
  { name: 'Alice', destinations: ['Berlin', 'Amsterdam'] },
  { name: 'Bob', destinations: ['Tokyo', 'Kyoto'] },
  { name: 'Cara', destinations: ['New York', 'Boston'] },
];


function extract(travelers) {
const vailer = travelers.map((item) => {
  return  item.name + ': ' + item.destinations[0];
});


return vailer;
}


const extractedDestinations = extract(travelers);

console.log(extractedDestinations);



//10

const itineraries = [
  { name: 'Explore the Alps', difficulty: 7 },
  { name: 'Paris in a Day', difficulty: 4 },
];

function increase(itineraries,firstOrSecond,number) {

    const increaseItineraries  = itineraries.map(({name, difficulty})=> {
        if(firstOrSecond == "first") 
   return  `${name[0]}: ${difficulty[0]+ number}`
 if else(firstOrSecond == "first")
 return  `${name[1]}: ${difficulty[1]+ number}`
    } );
    return increaseItineraries 
}





const increased = increase(itineraries, 3)

console.log(increased);









function increaseDifficulty(itineraries, itineraryName, increaseBy) {
const vailer = itineraries.map(itinerary => {
    const {name, difficulty } =itinerary;

    if (name === itineraryName) {

        return {
            ...itinerary,
            difficulty: difficulty + increaseBy

        };
    }

    return itinerary
});

return vailer;
};


const itineraries = [
  { name: 'Explore the Alps', difficulty: 7 },
  { name: 'Paris in a Day', difficulty: 4 },
  { name: 'Safari Adventure', difficulty: 5 }
];

const updatedItineraries = increaseDifficulty(itineraries, 'Explore the Alps', 2000);
console.log(updatedItineraries);







