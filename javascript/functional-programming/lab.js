// Task 1: Build a function-based console log message generator

// In this exercise, your task is to code a 
// function named consoleStyler,
// which accepts four parameters:

// color
// background
// fontSize
// txt

// Inside the body of the consoleStyler() 
// function declaration, you need to do the following:

// Create a new variable named message, 
// and assign the following to it 
// on the very first line inside the
// consoleStyler() function body.:

// "%c" + txt;


function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;

    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);

}

consoleStyler('#1d5c63', '#ede6db', '40px', "congrats!");

// Task 2: Build another console log message generator.
// Your task is to code another function, and name it celebrateStyler(). The function accepts a single parameter, reason, which should be of string data type.

// Inside the function declaration's body, code the following:

// A new variable, named fontStyle, assigning it this code:

// "color: tomato; font-size: 50px";
// On the next line, an if statement, verifying that reason == "birthday".

// Inside the body of the if block, code the following:

// console.log(`%cHappy birthday`, fontStyle);
// On the next line, add an else if, and inside the parentheses, check that

// reason == "champions"
// Inside the else if block, add this code:

// console.log(`%cCongrats on the title!`, fontStyle);
// Add an else block, with the following code inside of it:

// console.log(message, style);


function celebrateStyler(reason) {

    var fontStyle = "color: tomato; font-size: 50px";

    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style);
    }
    
}

celebrateStyler('birthday');

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Invoke the consoleStyler() function, with the following arguments:

// '#1d5c63'

// '#ede6db'

// '40px'

// 'Congrats!'

// Next, invoke the celebrateStyler() function, with the following argument:

// 'birthday'


// Task 4: Insert a congratulatory and custom message
// Code another function, named styleAndCelebrate().
// The function declaration's body should consist of two function invocations:

// consoleStyler(color, background, fontSize, txt);  
// celebrateStyler(reason);
// Next, invoke the new function, using the following arguments:

// 'ef7c8e'
// 'fae8e0'
// '30px'
// 'You made it!'
// 'champions'

function styleAndCelebrate(color, background, fontSize, txt, reason) {

    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


