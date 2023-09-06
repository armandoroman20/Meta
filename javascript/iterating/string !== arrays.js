// String dont equal arrays 

var greet = "hello ";
var user = "lisa";

/* console.log(greet.pop()); */ 
// this won't work since array methods
// can't be used on a string

console.log(greet + user);

console.log(greet.concat(user));
// concat method accepts whatever value 
// I want to join with the greet variable

console.log(greet.concat("mando"));

// the concat method is a different way of doing 
console.log(greet + "mando");

