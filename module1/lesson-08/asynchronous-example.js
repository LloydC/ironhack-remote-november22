const firstName = 'Lloyd'; // available in the global scope
let lastName; // available in the global scope
let age = 32;

// console.log(firstName); // execute first, exec time 0.1s
// console.log(sayHi()); // wait until line 5 is done, exec time 0.1s
// console.log(sayGoodMorning('John'));// wait until line 6 is done, exec time is 0.1s

// function sayGoodMorning(personName){
//   let greeting = 'Good morning'; // available in the local scope of this function
//   if(personName.length > 0){
//     let secondGreeting = 'Welcome';// available in the if statement block
//     return `${secondGreeting} ${personName}`
//   }
//   return greeting + firstName;
// }


function sayHi(){
  console.log('Hi people');
  return 'Hi people'
}

function sayGoodbye(){
    setTimeout(()=> console.log('Bye People'), 2000)

}

function makeCoffee(name){
    setTimeout(()=> console.log('Making coffee', name), 300)
}

// sayGoodbye(); // print last
// makeCoffee(); // print second
// sayHi(); // print first

// Callback Examples for setInterval function
// let count = 0;
// const timeIntervalId = setInterval(()=> {
//   if(count < 5){
//     console.log('test', count + 1)
//     count++;
//   }
//   else {
//     clearInterval(timeIntervalId);
//   }
  
// }, 1000);

const array = ['Madrid', 'Barcelona', 'Miami'];


// const timeIntervalId2 = setInterval(() => makeCoffee('Lloyd'), 2000);
// const timeIntervalId3 = setInterval(function(){
// console.log('test')}, 2000);

// let counter = 1;
// const callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);
 
//   counter += 1;
  
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// };
 
// let timeoutId = setTimeout(callbackFunction, 1000);

// setTimeout repeat example
// let counterCallback = 0;
// function someCallbackFunction() {
//     if(counterCallback === 2){
//         clearInterval(timeIntervalId);
//     }
//     else{
//     console.log('Hey there, Ironhackers!');
//     counterCallback++;
//     } 
// }

// const timeoutId = setTimeout(someCallbackFunction, 2000)
// clearTimeout(timeoutId);

// // Reverse Counter Example
let counter = 10;

const callbackFunction = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);

  counter -= 1;

  if (counter < 0) {
    clearTimeout(timeoutId);
  }
};

// // setInterval Example
let i = 10;

const intervalId = setInterval( () => {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('Pop!');
    clearInterval(intervalId);
  }
  i--;
}, 1000);
