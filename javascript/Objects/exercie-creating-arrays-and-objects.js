// Tasks to complete
// Create a new empty array literal and assign it to the variable clothes.

// Add 5 of your favorite items of clothing as strings using the push() method.

// Remove the fifth piece of clothing from the array using the pop() method.

// Add a new piece of clothing using the push() method.

// Use console.log to show the third item from the clothes array in the console.

// Create a new empty object literal and assign it to the variable favCar.

// Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

// Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

// Use the console to log the entire favCar object.

var clothes = [];
clothes.push("Shorts", "shirts", "crew necks", "sweaters", "pants");
clothes.pop();
clothes.push("tanks");
console.log(clothes[2]);

var favCar = {};
favCar.color = "red";
console.log(favCar);
favCar.isConvertable = "false";
console.log(favCar);
