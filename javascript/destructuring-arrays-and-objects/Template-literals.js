// template literals are and alternate way
// of working with strings
// usually single or double quotes 
// respectively 'Hello World' "Hello World"
// ,were used to delimit strings
// however in es6 we can use backticks 
// as delimeters `Hello World`
// the above is an example as template String,
// or template literal

//Differences between a template and regular string
// First, it allows for variable interpolation:

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`)
//display both variables using template literals
// this will print Hello World!

// this is a way that allows us to embed variables
// without needing to use the + operator


// Besides variable interpolation, 
// template strings can span multiple lines.

let multiLineString = 
`Hello,
World
!
`

console.log(multiLineString);

// template literals allow for 
// multi line strings as shown above

// template strings also allow for expression evaluation. 
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
