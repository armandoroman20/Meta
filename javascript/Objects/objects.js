/* creating an object array 
   in this example we are building a turn based
   game, first we will build store manager character */

var storeManagerMovement = 4;
var storeManagerSocialSkills = 50;
var storeManagerStreetSmarts = 50;
var storeManagerHealth = 30;

// using objects we can shorten variable names and get 
// js to understand all those variables are related
// a Property Key: in the example below would be rangeTilesPerTurn
// a Propoerty value: would be 4
var storeManager = {} 
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.speacialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money";


// Other way to build abject is by placing info in 
// the object literal(inside braces)
// Here we will create the Assistant manager
// here a Property Key: movement 
// Property value: 3
var assistantManager = {
    movement: 3, 
    socialSkills: 20,
    streetSmarts: 30,
    health: 40
}