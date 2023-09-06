// Arrays are iterable 

var veggies = ['onion', 'parsley', 'carrot'];
console.log(veggies.length);
// this will be 3

console.log(veggies[0]); // 'onion'
console.log(veggies[1]); // 'parsley'

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
// this will name all the strings in the array 
// 'onion', 'parsley', 'carrot'