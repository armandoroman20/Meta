// if, else if, else

var place = 'second';

if (place == 'first') {
    console.log("gold")
} else if (place == 'second'){
    console.log("silver")
} else if (place == 'third') {
    console.log("bronze")
} else {
    console.log("no medal...")
}


var age = 57;

if (age >= 65 ) {
    console.log("You get your income from your pension")
} else if ( age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if ( age < 18 ) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}