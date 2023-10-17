// functional programming
var shoes = 100; 
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay);

// oop

// var purchase1 ={

//     shoes: 100, 
//     stateTax: 1.2,
//     totalPrice() {
//         var calculation = purchase1.shoes * purchase1.stateTax;
//         console.log('Total Price:', calculation);
//     }
// }

// purchase1.totalPrice();

// OOP 2 

// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function () {
//         var calculation = purchase2.shoes * purchase2.stateTax;
//         console.log('Total Price:', calculation);
//     }
// }

// purchase2.totalPrice();

// We can utilize the "this" keyword to make the code 
// reusable and not have to worry about manually 
// changing the object name in the function
// below I will rewrite the purchase1 object

var purchase1 ={

    shoes: 100, 
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}

purchase1.totalPrice();

var purchase2 = {

    shoes: 50, 
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}

purchase2.totalPrice();
