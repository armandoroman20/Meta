// Say I want to visit the top 3 places,
// however I want to save the rest for another time
// I can use the rest operator to create an 
// array of the first 3 places, then a sub
// array for the rest of the items

const top7 = [
    "The Colosseum", 
    "The Roman Forum", 
    "The Vatican", 
    "Trevi Fountain", 
    "The Pantheon", 
    "Piazza Venezia", 
    "The Paletine Hill"
];

const [] = top7;

const [first, second, third, ...secondVisit] = top7;

// In the above I am creating 4 variables 
// first secondm third, and secondVisit
// the first, second, and third will be The Colosseum,
// The Roman Forum, and the Vatican respectiviley
// Then the rest of the items in the array will be 
// insterted in a seperate sub array called secondVisit

console.log(first);
console.log(second);
console.log(third);
console.log(secondVisit);