let likeCats = false;  // Alessandra commented here...
let likeDogs = true;
let drinkCoffee = false;

// And OPERATOR
//  true && true --> true
// false && false --> false
// true && false --> false

// OR OPERATOR
// true || false --> true
// false || false --> false
// true || true --> true

// NOT OPERATOR
// !true --> false
// !false --> true

let test1 = likeCats && likeDogs; 
let test2 = likeCats || likeDogs;
let test3 = likeDogs && !drinkCoffee; // true && true
let test4 = likeDogs || drinkCoffee;
let test5 = likeCats && drinkCoffee;

// if statement

if(likeCats && likeDogs){
    console.log("You're an amazing human!")
    // send marketing emails about cats and dogs
}
else if(likeDogs){
    console.log("You're a cool dog")
    // send marketing emails about dogs only
}
else if(likeCats){
    console.log("You're a cool cat")
    // send marketing emails about cats only
}
else{
    console.log("You need more compassion")
}