// Create two variables and assign a different number to each one. 
// Add them together and output the result to the console
let numberOne = 6;
let numberTwo = 8;

// numberOne +=numberTwo
// console.log(numberOne)

let result = numberOne + numberTwo;
console.log(result)
// Do the same using two strings.
let firstName = "Lloyd";
let lastName = "Chambrier";

// console.log(firstName+ ' ' +lastName)
console.log(`Mr. ${firstName} ${lastName}`)

// Create a variable and assign a number to it. 
// Check if the variable is less than 10 
// if it is output in the console to the user that their variable is less than 10. 
// If not, let them know as well. 
// Confirm that both use case works by changing values
let number = 3;

if(number < 10){
    console.log('Your number is smaller than 10')
}
else {
    console.log('Your number is not smaller than 10')
}

// Create an array of "pagesRead" with at least 3 values, 
// Use a for loop to make the sum of the array and return it (confirm using console.log)
// Use a conditional statement so that at the end, 
// it prints out the average of pages read
// i.e: [10,8,21] ---> You read 13 pages on average
const pagesRead = [10,8,21];
let sumPagesRead = 0;

for(i = 0; i < pagesRead.length; i++){
    sumPagesRead += pagesRead[i];
}

const average = sumPagesRead/pagesRead.length;
console.log('average', average);



// create an array "books" with at least three books
// use a for loop to print it in reverse
const books = ["bookOne", "bookTwo", "bookThree", "bookFour","bookFive"];
// bookThree
// bookTwo
// bookOne

for(i=books.length-1; i >= 0; i--){
    console.log(books[i]);
}
//