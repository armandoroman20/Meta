// Build many objects that have 
// certain sets of propoerties

// to build a class use class keyword and start 
// name of class with capital letter
// they also have a constructor within
// the constructor's role is to assign passed parameters 
// to future objects
// the contructor is used when instantiating new objects
// after the constructor is added you may now add as many
// methods as you want, but do not include the 
// function keyword

 class Car {

    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("turbo on!");
    }
}
 
// above I created the Car class
// the constructor uses 2 parameters that will 
// be used in new instances of the objects created
// there is also a method "turboOn" in the class that
// newly created objects can access

// Now I will create a new object using the constructor
// here I set the color and speed of the new object car1

const car1 = new Car("red", 120);

console.log("car1: ", car1);

// to access the method that was created in the class 
// simply call the created object add a dot and call the 
// method in the class

car1.turboOn();


