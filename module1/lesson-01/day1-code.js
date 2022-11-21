// console.log('Hello World')
// console.log('Welcome to your first bootcamp day :)')

// var favoriteDrink = "Coffee";
// console.log(favoriteDrink)

let firstName = 'Lloyd'; // string "", ''
let lastName = 'Chambrier';
// console.log(typeof firstName);
const myAge = 32; // number
// console.log(typeof age);
let isMarried = false; // Boolean
let isTeacher = true;
// console.log(typeof isMarried)
let test; // undefined
let randomVariable; // undefined
let emptyValue = null; // null

console.log(firstName.length, lastName.length)
console.log(firstName.toUpperCase(), lastName.toLowerCase())

let hobbies = ["Kickboxing", "Brazilian Jiu Jitsu", "Traveling", "Dancing", "Reading"];

let favoriteFoods = ["Burgers", "Pasta", "Manti"]


console.log(favoriteFoods.includes('Burgers'))
console.log(favoriteFoods.includes('Pizza'))

if(favoriteFoods.includes('Pizza')){
    console.log('Favorite foods includes Pizza')
}
else if(favoriteFoods.includes('Burgers')){
    console.log('FavoriteFoods includes Burgers')
}
else if(favoriteFoods.includes('Manti')){
    console.log('FavoriteFoods includes Manti')
}
else {
    console.log("Favorite foods doesn't includes pizzas")
}

const age = 70;
 
if (age <= 16) {
  console.log('You have a teenager discount.');
} else if (age >= 65) {
  console.log('You have a senior citizen discount :)');
} else {
  console.log("Sorry, you don't have any discount :(");
}

const number1 = 20;
const number2 = 20;
 
if (number1 === number2) { // 20 === '20' 
  console.log('The numbers are equal.');
} else {
  if (number1 > number2) {
    console.log('Number 1 is bigger than number 2.');
  } else {
    console.log('Number 1 is smaller than number 2.');
  }
}

const characterName = 'Jon Snow'
let house = '';
 
// if (characterName === 'Khal Drogo') {
//   house = 'Dothraki Horselord';
// } else if (characterName === 'Daenerys') {
//   house = 'Targaryen';
// } else if (characterName === 'Jon Snow' || characterName === 'Sansa' || characterName === 'Arya') {
//   house = 'Stark';
// } else if (characterName === 'Cersei' || characterName === 'Tyrion' || characterName === 'Ser Jaime') {
//   house = 'Lannister';
// } else {
//   house = 'Other';
// }

switch (characterName) {
    case 'Khal Drogo':
      house = 'Dothraki Horselord';
      break;
    case 'Daenerys':
      house = 'Targaryen';
      break;
    case 'Jon Snow':
        house = 'Stark';
        break;
    case 'Cersei':
        house = 'Lannister';
        break;
    default:
        house = 'Other';
}
   
console.log(`Your favorite character is from the house ${house}.`);

// for(let i = 0; i < 101; i++){
//     console.log(i);
// }

// let i = 0;
 
// while (i <= 100) {
//   console.log(i);
//   i++; // this is the same as i = i + 1
// }

let j = 0;
 
while (j < 5) {
  j++;
  if (j === 3) {
    // continue;
    break;
  }
  console.log(`The number is: ${j}.`);
}

// Let’s write a loop that will iterate from 0 to 20. 
// For each iteration, it will check if the current number is even or odd, 
// and print that on the screen.

for(let i=0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(`number ${i} is even`)
    }
    else {
        console.log(`number ${i} is odd`)
    }
}

// console.log(favoriteFoods[1])
// console.log(favoriteFoods[2])

// for(let i = 0; i < favoriteFoods.length; i++){ // i = i + 1
//     console.log(favoriteFoods[i])
// }





// let teacher = {
//     firstName: 'Lloyd',
//     lastName: 'Chambrier',
//     age: 32
// };

// let teachingAssistant = {
//     firstName: 'Alessandra',
//     lastName: 'Scarpellini'
// }

// let teachingTeam = [teacher, teachingAssistant]; //



// IF STATEMENT


// SWITCH STATEMENT

// switch(input){
//     case 'a':
//         console.log('Case a')
//         return;
//     case 'b':
//         console.log('Case b');
//         return;
//     default:
//         console.log('no case')
// }

// TERNARY OPERATOR

// FOR LOOP


// WHILE LOOP