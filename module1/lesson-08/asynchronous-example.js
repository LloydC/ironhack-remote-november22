let firstName = 'Lloyd';
console.log(firstName); // execute first, exec time 0.1s
console.log(sayHi()); // wait until line 2 is done, exec time 0.1s

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

sayGoodbye();
makeCoffee();
sayHi();

// Callback Examples for setInterval function
// const timeIntervalId = setInterval(()=> console.log('test'), 2000);
// const timeIntervalId2 = setInterval(() => makeCoffee('Lloyd'), 2000);
// const timeIntervalId3 = setInterval(function(){
// console.log('test')}, 2000);

// setTimeout repeat example
let counterCallback = 0;
function someCallbackFunction() {
    if(counterCallback === 2){
        clearInterval(timeIntervalId);
    }
    else{
    console.log('Hey there, Ironhackers!');
    counterCallback++;
    } 
}

const timeoutId = setTimeout(someCallbackFunction, 2000)
clearTimeout(timeoutId);

// Reverse Counter Example
let counter = 10;

const callbackFunction = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);

  counter -= 1;

  if (counter < 0) {
    clearTimeout(timeoutId);
  }
};

// setInterval Example
let i = 10;
const intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('Pop!');
    clearInterval(intervalId);
  }
  i--;
}, 1000);
