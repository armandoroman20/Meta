/* Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!') */

for (var i = 1; i <= 5; i++){
    console.log(i);
}
console.log("Counting completed!");

/* Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!') */

for (var i = 5;i > 0; i--){
    console.log(i);
}
console.log("Countdown finished!");

/* Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!') */


var i = 1;

while(i <= 5){
    console.log(i);
    i++;
}
console.log("Counting completed!");

/* Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!') */

var i = 5;

while (i > 0){
    console.log(i);
    i--;
}
console.log('Countdown finished!');


/* Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022) */

var i = 2018;

while (i < 2023){
    console.log(i);
    i++;
}

