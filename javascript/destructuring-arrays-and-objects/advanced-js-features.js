// Step 1. You are given an array of dairy products:

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// Create a function called logDairy.
// Within it, console log each of the items 
// in the dairy array, using the for...of loop.

// After you create this function, 
// call it as logDairy() to see 
// the output on the console.

// The expected output should be:

// cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake

function logDairy() {

for (prop of Object.values(dairy)) {
    console.log(prop);
}
    
for (const prop of dairy) {
  console.log(prop);
}


}

logDairy();

