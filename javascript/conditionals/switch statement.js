// switch statement

var place = "second";

// we insert the variable inside 
// the parenthesis to check
switch (place) {
    /* we use case to set the 'condition' 
    for the first test, and so on */
    case 'first':
        // once tested if the condition is met 
        // we will console.log
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

var day = "Saturday";

switch(day) {
        case 'Monday':
    console.log("Start of the week");
    break;
        case 'Tuesday':
    console.log("Go to class");
    break;
        case 'Wednesday':
    console.log("Hump day!");
    break;
        case 'Thursday':
    console.log("Baby Friday");
    break;
        case 'Friday':
    console.log("Friday is here");
    break;
        case 'Saturday':
    console.log("Let's party!");
    break;
        case 'Sunday':
    console.log("Prepare for the work week");
    break;
    default: 
    console.log("There is no such day");
}



