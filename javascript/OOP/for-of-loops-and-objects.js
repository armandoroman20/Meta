
const car = {
    engine: true, 
    steering: true, 
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";

// This is how to loop through an object and it's prototype

for (prop in sportsCar) {
    console.log(prop);
}

// This is how to loop through an object

for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}

