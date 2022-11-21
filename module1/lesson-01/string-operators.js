let str1 = "Hello"; // --> ['H','e','l','l','o']
let str2 = " World!";
 
// console.log(`${str1} ${str2}`); // Prints: Hello World!
//  console.log(str1 + str2)
str1 += str2; // ---> str1 = str1 + str2
let newString = "";
for(i = 0; i < str1.length; i++){
 if(str1[i] !== "l"){
    newString += str1[i];
 }
}
console.log(newString);

// const fruits = ' 1. banana \n 2. apple \n 3. orange \n 4. cherry';
 
// console.log(fruits);

const fruits = `
1. banana
2. apple
3. orange
4. cherry
`;
 
// console.log(fruits);

let emptyContainer = "";
emptyContainer += "Hello there, student!";

// console.log(emptyContainer); // Hello there, student!

emptyContainer + " How are you?";

// console.log(emptyContainer); // Hello there, student! How are you?

const greeting = 'Hello there!';
console.log(`"${greeting}" is a string and it's length is ${greeting.length}.`);
// "Hello there!" is a string and it's length is 12.
console.log(greeting.charAt(0)); // <== H
console.log(greeting.charAt(1)); // <== e
console.log(greeting.charAt(5)); // <== " "


console.log(greeting[3]); // <== l
console.log(greeting[4]);// <== o

const message = "Don't be sad, be happy!";

console.log(message.indexOf("be")); 
console.log("la".repeat(10));
console.log(message.slice(9,12))


const str = 'To be, or not to be, that is the question.';
console.log(str.includes('to be')); 