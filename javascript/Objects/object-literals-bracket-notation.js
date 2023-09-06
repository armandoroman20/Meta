var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

/* Note that using the brackets notation, 
I essentially just wrap each property's key 
as a string, inside either the single or double quotes 
- just like with regular strings. 
Then I wrap the entire property key into an 
opening and a closing square bracket.
That's essentially all there is to it. */

/* Finally, there's one really useful thing that bracket notation has 
but is not available in the dot notation: It can evaluate expressions. 
here's an example */

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

/* the above code results in the following
100
200
red 

Using the fact that brackets notation can evaluate expressions, 
I accessed the arrOfKeys[i] property on the drone object. 

This value changed on each loop while the for loop was running.
Specifically, the first time it ran, it was evaluated like this: 

The value of i was 0 

The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 

Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100

This allowed me to loop over each of the values stored inside the drone object, 
based on each of its properties' keys.
*/