let a = 26;
let b = 67;
let c = 38;

if(a % 2 === 0){
    console.log('even')
    return 'a is an even number'
}
else {
    console.log('odd')
    return 'a is an odd number';
}
let d = a+= 1; // a = a + 1
let e = a-= 1; // a = a -1
let f = a*= 2; // a = a * 2
let g = a/= 2; // a = a / 2

// // console.log(d, e, f, g);

let j; // Declaring Variable
 
j = 10;
console.log(++j); // j = j + 1  Prints: 11
console.log(j);   // Prints: 11
 
j = 10;
console.log(j++); // j = j + 1  Prints: 10
console.log(j);   // Prints: 11
 
j = 10;
console.log(--j); // j = j - 1 Prints: 9
console.log(j);   // Prints: 9
 
j = 10;
console.log(j--); // j = j - 1 Prints: 10
console.log(j);   // Prints: 9