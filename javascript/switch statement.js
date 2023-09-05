// switch statement

var place = "second";

// we insert the variable inside 
// the parenthesis to check
switch (place) {
    /* we use case to set the 'condition' 
    for the first test, and so on */
    case 'first':
        // once tested if the condition is met 
        // we wil console.log
        console.log("gold");
        // we use break to stop or continue
        // if the condition wasn't meet
        break;
    case 'second':
        console.log("silver");
        break;
    case 'third':
        console.log('bronze');
        break;
    default:
        console.log("no medal...");
}