// try, throw, catch

/* When you get an error in your code you can 
use the try, catch, throw method to see what piece 
of code will throw the error

For example: */

// console.log(a + b); // this will cause an error
// console.log("This wont execute, since above won't work");

/* Now I will use the try, catch, throw to determine 
what piece of code breaks. 
I think it is the first console.log since the variables
a and b were never declared */

try { 
    console.log(a + b);
} catch (err) { // I named the object err
    console.log(err);
    // the error above will console log
    console.log("There was an error.");
    console.log("The error was saved in the error log.");
}

console.log("My program does not stop. ");


