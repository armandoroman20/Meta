// We create a bird object (AKA the prototype) that has 
// 3 properties with booleans set to true

var bird = {
    hasWings: true,
    canFly: true, 
    hasFeathers: true
}

// now we can construct new objects nusing the
// .create method

var eagle1 = Object.create(bird);

// here I can console log the contents 
// of the eagle1 object
//which will print "eagle1  {}"

console.log("eagle1 ", eagle1);

// I also have access to all the properties that 
// were originally created in the bird object  
// through the eagle1 object

console.log("eagle1 has wings", eagle1.hasWings);
console.log("eagle1 can fly", eagle1.canFly);
console.log("eagle1 has feathers", eagle1.hasFeathers);

// here I create an eagle2 object 
// using the bird prototype

var eagle2 = Object.create(bird);
console.log("eagle2 has wings ", eagle2.hasWings);

// this is an example if I need to override an 
// inherited property in a newly created object

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1: ", penguin1);
console.log("penguin1 has feathers", penguin1.hasFeathers);
console.log("penguin1 can fly", penguin1.canFly);
