// strings are iterable 

var greeting = "howdy";

console.log(greeting.length);
// this gives us 5, the string length

console.log(greeting[0]); // h, logs the 0 index
console.log(greeting[1]); // o, logs the 1 index

for (var i = 0; i < greeting.length; i++){
    console.log(greeting[i]);
}

// we are looping through the string "howdy",
// and console logging all the letters