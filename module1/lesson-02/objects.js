const person = {
    firstName: 'Lloyd',
    lastName: 'Chambrier',
    age: 32
};

console.log(person.firstName)
console.log(person['lastName'])
person.drinksCoffee = true; // adding a property to 'person'
person.height = '1.88m' // adding a property to 'person'
person['hobbies'] = ['watching ufc']  // adding a property to 'person'
console.log('has property age', person.hasOwnProperty('age'));
person.hobbies = ['kickboxing', 'traveling'] // updating property 'hobbies'
delete person.height;
console.log(person)

const keysList = Object.keys(person);
const valuesList = Object.values(person);
console.log('keysList', keysList);
console.log('valuesList', valuesList);

console.log('check if Lloyd exists as a value', valuesList.includes('Lloyd'))

for (let key in person) {
    if(Array.isArray(person[key])){// checking if 'key' is an Array
        person[key].forEach(element => {
            console.log(element)
        });
    }
    // console.log(key); // represents each 'key' inside person
    // console.log(person[key]); // represents each 'value' inside person
  }

// Create three different fruits variables 
// as objects with properties name, color, and reviews
const apple = {
    name: 'apple',
    color: 'red',
    reviews: ['yummy', 'super savoury', 'juicy apples!']
};

const banana = {
    name:'banana',
    color: 'yellow',
    reviews: ['yummy']
}

const orange = {
    name: 'orange',
    color: 'orange',
    reviews: ['yummy ']
}

// Add a property isPopular for each fruit and assign it a value
apple.isPopular = true;
banana.isPopular = false;
orange.isPopular = true;
// Add a property amount for each fruit and assign it a value
apple.amount = 20;
banana.amount = 10;
orange.amount = 30;
// Add a property dimensions that will represent the width and height of each fruit
apple.dimensions = {
    width: 3,
    height: 2
}

banana.dimensions = {
    width: 4,
    height: 2
}

orange.dimensions = {
    width: 6,
    height: 3
}
console.log(apple)
// Write some code to print out all the reviews of a fruit
// for(let i = 0; i < apple.reviews.length; i++){
//     console.log(apple.reviews[i])
// }

for (let key in apple) {
    if(Array.isArray(apple[key])){// checking if 'key' is an Array
        apple[key].forEach(element => {
            console.log(element)
        });
    }
    else if(typeof apple[key] === 'object'){
        for(let insideKey in apple[key]){
            console.log(insideKey, apple[key][insideKey])
        }
    }
}

// Add all the fruits to an array "fruits"
// Practice accessing the values
// Loop through the keys and values