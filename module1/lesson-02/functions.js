function getUserInfo(firstName, lastName) {
    const userInfo = {
      firstName: firstName,
      lastName: lastName
    };
   
    return userInfo;
  }
   
  const newUser = getUserInfo('ana', 'martinez');
  console.log('newUser firstName', newUser.firstName);
  console.log('newUser lastName', newUser.lastName);

  function getFavorites(fav1, fav2, fav3) {
    const favorites = [fav1, fav2, fav3];
   
    return favorites;
  }

const favoritesArray = getFavorites('javascript', 'html', 'css');
console.log('favoritesArray values:',favoritesArray[0], favoritesArray[1]); 
// Write a function that takes in a parameter "name", tells the user what name was entered and returns it.
// i.e: "John" ---> "Hi John"
function sayHello(name){
    if (name.length === 0) {
        console.log('Please provide a valid name!')
        return 'Please provide a valid name!';
      }
    console.log(`Hello ${name}`) //  console.log('Hello' + name)
    return `Hello ${name}`;
}
sayHello('')
sayHello('John');
sayHello('Iryna');
sayHello('Javier');



// Class Practice Exercises

function sayGoodbye(){
    console.log('Goodbye World')
    return 'Goodbye world'
}
// sayGoodbye();
// sayGoodbye()

// Write a function that takes in a parameter "input" 
// and returns the last character in that string
// i.e: "Rijksmuseum" ---> "m"

function lastCharacter(input){
    return input.slice(-1)
}

// console.log(lastCharacter('Rijksmuseum'))
// console.log(lastCharacter('World cup'))

// Write a function that takes in one parameter "length" 
// and prints out that many stars
// i.e: 3 ---> ***
function printStars(length){
    return "*".repeat(length);
}
console.log(printStars(3))
console.log(printStars(5))

// Write a function that takes in two parameters "length" and "height" 
// and prints out a rectangle of stars
// i.e: 3,2 ---> ***
//               ***
function printRectangleStars(length, height){
    for(let i =0; i < height; i++){
        console.log("*".repeat(length));
    }
}
printRectangleStars(3,2);
printRectangleStars(6,6);

// Write a function that takes in an array of integers 
// and returns the average of the array
// i.e: [2,5,8] ---> 5
//      [1,2,3] ---> 2

function avgNumbers(intArray){
    // How do I get an average?
    // 1. Make a sum of all the numbers of the array
    let sum = 0; // sum variable
    for(let i=0; i < intArray.length; i++){
        sum += intArray[i] // sum = sum + intArray[i];
    }
    // 2. Divide the sum with all the elements/the length of the array
    return sum/intArray.length;
}

console.log('avgNumbers', avgNumbers([2,5,8]))
console.log('avgNumbers', avgNumbers([1,2,3]))

// function maxOfTwoNumbers that takes two numbers as arguments and --> function name, number of parameters
// returns the bigger number. --> end result
function maxOfTwoNumbers(numberOne, numberTwo){
    // if(numberOne > numberTwo){
    //     return numberOne;
    // }
    // return numberTwo;
     return Math.max(numberOne, numberTwo);
}
console.log(maxOfTwoNumbers(23,34))
console.log(maxOfTwoNumbers(3,35))

// the function findLongestWord that takes as an argument an array of words  --> function name, number of parameters
//  returns the longest one. --> end result
// If there are 2 with the same length, it should return the first occurrence --> Tip/Hint

// the function named sumNumbers that takes an array of numbers as an argument --> function name, number of parameters
//  and returns the sum of all of the numbers in the array.
// [2,4,5,6] ---> 17
// [12,32] --> 44

// Build simple functions (i.e: sayHello, doMultiplication, printName...etc)

// Create a function that accepts 3 numbers as parameters, and returns their sum.
// Create a function named isNameOddOrEven() that accepts a string as a parameter. 
// The function should return whether a received string has an odd or even number of letters. 
// The expected return should be in the following format - string: ’<name> has an even/odd number of letters’.

// Create an array "bootcampStudents" made of all the students

// 1. Print out every firstName inside of bootcampStudents
// 2. Print out the name of every student who likes to drinkCoffee
// 3. Print out everyone who is aged less than 30 years old
