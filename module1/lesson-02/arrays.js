// Create an object "student" that represents you
// Give it for properties firstName, lastName, age, city, drinkCoffee, likeCats, favoriteFoods, favoriteBooks
// Assign some values for each property

let studentOne = {
    firstName: "John",
    lastName: "Danaher",
    age: 32,
    city: "Berlin",
    drinkCoffee: true,
    likeCats: true,
    favoriteFoods: ["Steak", "Heart", "Oven-roasted Potatoes"],
    favoriteBooks: ["Anything by Terry Pratchett", "Ender's Game", "LOTR"]
}

const studentTwo = {
    firstName: "Jan",
    lastName: "Auer",
    age: 30,
    city: "Berlin",
    drinkCoffee: true,
    likeCats: true,
    favoriteFoods: ["Ramen", "Porridge", "Pancakes"],
    favoriteBooks: ["On minimalist Living", "Camino Island"]
  }

  let studentThree = {
    firstName: 'Janset',
    lastName: 'Genel',
    age: 31,
    city: 'Berlin',
    drinkCoffee: true,
    likeCats: true,
    favoriteFoods: ['noodles', 'manti', 'cake'],
    favoriteBooks:  ['Mrs. Dalloway', 'outline', 'the undercurrents']
  };

  const studentFour = {
    firstName: "Hadeel",
    lastName: "Abdelkareem",
    age: 27,
    city: "Cairo”",
    drinkCoffee: true,
    likeCats: true,
    favoriteFoods: ["potato", "chocolate"],
    favoriteBooks: ["book1", "book2"]
    }

    const studentFive = {
        firstName: "Davide",
        lastName: "Lopresti",
        age: 31,
        city: "Newcastle",
        drinkCoffee: false,
        likeCats: true,
        favoriteFoods: ["pasta", "dumplings", "gatto"],
        favoriteBooks: ["the lord of the rings", "harry potter"]
      }

      const studentSix = {
        firstName: "Iryna",
        lastName: "Danchuk",
        age: 31,
        city: 'Barcelona',
        drinkCoffee: false,
        likeCats: true,
        favoriteFoods: ["kimchi chigue"],
        favoriteBooks: ["Harry Potter"]
    }

    const studentSeven = {
        firstName: "David",
        lastName: "Amberg",
        age: 30,
        city: "Berlin",
        drinkCoffee: true,
        likeCats: true,
        favoriteFoods: ["Pizza", "Pho","Curry"],
        favoriteBooks: ["2666", "Rings of Saturn", "The Years"]
    }

    const studentEight = {
        firstName: "Fanny",
        lastName: "Arles",
        age: 31,
        city: "Paris",
        drinkCoffee: false,
        likeCats: true,
        favoriteFoods: ['Pastas', 'Burrito bowls', 'Ramens'],
        favoriteBooks: [
            { 
                name: "The Great Gatsby", 
                author: "F. Scott Fitzgerald"
            }, { 
                name: "To Kill a Mockingbird", 
                author: "Harper Lee" 
            }
        ]
    }

    const studentNine = {
        firstName: "Giulia",
        lastName: "Colombo",
        age: 31,
        city: "Amsterdam",
        drinkCoffee: true,
        likeCats: true,
        favoriteFoods: ["pasta", "hummus", "croissants"],
        favoriteBooks: ["The catcher in the rye", "Pride and prejudice", "The outsiders"]
    }

    const studentTen = {
        firstName: "Javier",
        lastName: "Neira",
        age: 28,
        city: 'Berlin',
        drinkCoffee: true,
        likeCats: true,
        favoriteFoods: ['Burritos'],
        favoriteBooks: ['Armand', 'Angels jump']
      }

      const studentEleven = {
        firstName: 'Gustavo',
        lastName: 'Schattschneider',
        age: 32,
        city: 'Berlin',
        drinkCoffee: false,
        likeCats: true,
        favoriteFoods: ['burgers', 'pasta', 'pizza'],
        favoriteBooks: ['book21', 'book45']
        }

        const studentTwelve = {
            firstName: "Avni",
            lastName: "Sharma",
            age: 36,
            city: "Berlin", // 
            drinkCoffee : false,
            likeCats : false ,
            favoriteFoods : ['Indian bread','Pasta'],
            favoriteBooks : ['Book1','Book2']
        }

        const studentsList = [studentOne, studentTwo, studentThree, studentSix, studentSeven, studentEight, studentNine, studentTen, studentEleven, studentTwelve]
        studentsList.push(studentFour);
        studentsList.unshift(studentFive);

        let coffeeLovers = []

        for(let i = 0; i < studentsList.length; i++){
            // Add the students who like coffee to the coffeeLovers array
            console.log(studentsList[i].drinkCoffee)
            // 1. Check that property drinkCoffee is true --> use an if statement
            if(studentsList[i].drinkCoffee){
                // 2. Add the student to the coffeeLovers array --> use the push method
                coffeeLovers.push(studentsList[i])
            }
            
        }
        console.log('coffeeLovers', coffeeLovers)

// const arrayNames = ["Pedro", "Jake", "Joan", undefined];


// const removedNames = arrayNames.splice(1,2);
// console.log(removedNames);
// console.log(arrayNames);

// Get the first three students of the array coffeeLovers inside a variable 'firstGroup'
// console.log()
const firstGroup = coffeeLovers.slice(0, 3); // coffeeLovers.splice(0, 3)
console.log(firstGroup)
// Get the last three students of the array inside a variable 'secondGroup'
const secondGroup = coffeeLovers.slice(coffeeLovers.length - 3, coffeeLovers.length)
// Confirm using console.log that these are correct
console.log(secondGroup)

// const arrayNames = ["Pedro", "Jake", "Joan"];

// arrayNames.forEach((name, index) => {
//   console.log(`index ${index}`,name);
// })

// let phrase = "This is long enough for a string to count it words";

// let words = phrase.split(" ");

// console.log(words);

// Create a variable pastaLovers which is going to have all the students who have 
// 'pasta' as part of their favoriteFoods

// From the students list, select the students that have 'pasta'
// const pastaLovers = [];
// //1. Go through the student list
//         for(let i = 0; i < studentsList.length; i++){
          
//             if(studentsList[i].favoriteFoods.includes('pasta') || studentsList[i].favoriteFoods.includes('Pasta') || studentsList[i].favoriteFoods.includes('pastas') || studentsList[i].favoriteFoods.includes('Pastas') ){
//                 pastaLovers.push(studentsList[i])
//             }
//         // 2. Check if they like pasta
//         //   2a. Look at property favoriteFoods
//         //   2b. Check if it includes pasta
//         //   2c. If it includes pasta, add the current student to pastaLovers 
//         }
const pastaLovers = studentsList.filter(function(student){
    return student.favoriteFoods.includes('pasta') || student.favoriteFoods.includes('Pasta') || student.favoriteFoods.includes('pastas') || student.favoriteFoods.includes('Pastas');
})
console.log('pastaLovers', pastaLovers.length)

const berlinStudents = [];

for(let i = 0; i < studentsList.length; i++){
    if(studentsList[i].city.includes('Berlin') || studentsList[i].city.includes('berlin')){
        berlinStudents.push(studentsList[i]);
    }
}

console.log('berlinStudents', berlinStudents.length);

const numbers = [1, 2, 3, 4, 5, 6];
 
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0; // number / 2 --> remainder === 0
});

const oddNumbers = numbers.filter(function (number) {
    return number % 2 !== 0; // number / 2 --> remainder !== 0
  });
 
console.log('evenNumbers',evenNumbers); 
console.log('oddNumbers', oddNumbers)