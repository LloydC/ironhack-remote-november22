// Function declaration syntax
// function calcSum(x, y) {
//     return x + y;
//   }

// Function expression syntax

// const calcSum = function(x, y){
//     return x + y;
// }

// Arrow function syntax

const calcSum = (x, y) => console.log(x + y);
const calcSubtract = (x, y) => x - y;
const sayHello = personName => console.log(`Hello ${personName}`)

const orderCoffee = customerName => {
    console.log(`Here's your coffee ${customerName}`)
    sayHello(customerName);
    return `Here's your coffee ${customerName}`;
}

const execFunc = (input, anotherFunc) => anotherFunc(input)

const greetings = () => console.log('Hello there!');

calcSum(5, 8);
console.log(calcSubtract(6, 9));
sayHello('Avni')
orderCoffee('Javier')

execFunc('John', orderCoffee)
greetings();

const randomNames = ['Janset', 'Handeep', 'Gustavo']

randomNames.forEach((studentName) => console.log(studentName))
randomNames.forEach(orderCoffee)

// const randomNamesUpdate = randomNames.map(student => student + ',')
// console.log(randomNamesUpdate)

//Callback function extended example

function putShirt() {
    console.log('Putting on the shirt.');
}
   
  function putSocks () {
    console.log('Putting on the socks.');
  }
   
  function putPants () {
    console.log('Putting on the pants.');
  }
   
  function putShoes () {
    console.log('Putting on the shoes.');
  }
   
   
  function getReadyForWork (callback1, callback2, callback3, callback4) {
    callback1();
    callback2();
    callback3();
    callback4();
    console.log("I'm ready to go to work!!!");
  }
   
   
  getReadyForWork(putShoes, putSocks, putPants, putShirt);
