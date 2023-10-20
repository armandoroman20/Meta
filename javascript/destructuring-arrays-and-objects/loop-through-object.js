// object in nature are not iterable, however arrays are
// therefore we use 3 built in methods to
// iterate through objects as arrays
// Object.keys()
// Object.values()
// Object.entries()

// Object.keys() - the return value is an array of strings
// where each string is a property key of the properties
// in the object 
// an example is below

const car2 = {
    speed: 200, 
    color: "red"
}

console.log(Object.keys(car2)); 
// this returns the properties of the car2 object
// [ 'speed', 'color' ]

// Object.values()

const car3 = {
    speed: 300, 
    color: "yellow"
}

console.log(Object.values(car3)); 

// returns the an array with the values of the properties
// [ 300, 'yellow' ]

// Object.entries() - returns an array listing both
// keys and values

const car4 = {
    speed: 400, 
    color: "magenta"
}

console.log(Object.entries(car4)); 
// this gives 
// [ [ 'speed', 400 ], [ 'color', 'magenta' ] ]


// Here is an example of how to use a for loop 
// to loop through objects with the above methods

