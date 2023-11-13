// simplest method to copy the properties of an Object
// into a newly crated Object

// spread operator - Tool used to spread 
// array items and join objects togeter

// an example is creating an array called top3 

let top3 = [
    "the Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];

// Next we create a function to show the
// items in the array 

function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with visit to " + place3);

}

// Now we will add elements from the array 
// into the function as it's parameters

showItinerary(top3[0], top3[1], top3[2]);

// the above can be impratical once you start
// adding more items to the array

// we elimate this tedious route 
// by using the spread operator -
// the spread operator is called with 3 dots ...

showItinerary(...top3);