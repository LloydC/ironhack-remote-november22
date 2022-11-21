let a = 27;
let b = 67;
let c = 38;

// if(c % 2 === 0){ 
//     console.log('even')
//     return 'a is an even number'
// }
// else {
//     console.log('odd')
//     return 'a is an odd number';
// }

// a+=1 --> a = a+1
// a*=2 --> a = a*2
// a/=2 --> a = a/2
// a-=1  --> a = a-1

// j++ --> j = j + 1
// ++j --> j = j + 1

// j-- --> j = j - 1
// --j --> j = j - 1

// number % 2 === 0 --> odd or even


function addOne(){
    let d = a+ 1; // 27 -  a = a + 1 
    return d;
}
let test = addOne();
console.log(test, a)

function reduceOne(){
    let e = a- 1; // 26 - a = a - 1
    return 2;
}

function multiplyTwo(){
    let f = a* 2; // 52 -  a = a * 2
    return f;
}

function divideTwo(){
    let g = a/2; // 26 - a = a / 2
    return g;
}



 // console.log(d, e, f, g);

let j; // Declaring Variable
 
// j = 10;
// console.log('++j',++j); // j = j + 1  Prints: 11
// //console.log(j);   // Prints: 11
 
// j = 10;
// console.log('j++',j++); // j = j + 1  Prints: 10
// console.log('j',j);   // Prints: 11
 
j = 10;
console.log('--j',--j); // j = j - 1 Prints: 9
//console.log(j);   // Prints: 9
 
j = 10;
j--;
//console.log('j--',j--); // j = j - 1 Prints: 10
console.log('j',j);   // Prints: 9

console.log(Math.floor(3.1)) // rounds down to the nearest integer
console.log(Math.ceil(3.1)) // rounds up to the highest integer
console.log(Math.round(3.6)) // rounds up to the nearest integer

let anyNumber = 5.679345;
let roundedToOne = anyNumber.toFixed(1); // round number to one decimal point
console.log(roundedToOne);
console.log(Math.round(Math.random()*50)) // generate a random number between 0 and 50

console.log(Math.max(2, 8, -10, 0, -4)); // get the highest number <== 8
console.log(Math.min(1, 2, 0, -5)); // get the lowest number <=== -5