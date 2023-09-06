// Looping the counter to 100

// 1st initialize i (set the start count  value),
// set the condition for i,
// set the increment 
// can use ++ for 1 or += for any value

for (var i = 1; i < 101; i++) {
    console.log(i);
}

// while loop 

// we set the value outside the loop
var i = 1;


while (i <= 101) {
    console.log(i);
    // we increment inside the loop
    // i++;
    // or
    // i = i + 1;
    i = i + 1;
}

for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}

var counter = 3;

while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy new year!");