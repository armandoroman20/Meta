// As you might already know, 
// an object consists of key - value pairs,
// known as properties.

// We can add new key-value pairs to existing 
// objects using the dot notation and 
// the assignment operator. 

var car = {};
car.color = "red"; //update the value of a property of the car objject

// These are known as properties, and can take 
// many data types, including functions.

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}

// If the function is a property of an object, it is then referred to as a METHOD. 

console.log(car);

// this is how to invoke the method(function within object)
car.turnKey();

// Here i'll add the mileage property to the car object

car.mileage = 98765;
console.log(car);

// I will also add another method to the car object

car.lightsOn = function () {
    console.log("the lights are on");
}

console.log(car);

// Now i will invoke the new method 

car.lightsOn();