// .map() function
const arrayOfNumbers = [1, 2, 3];
const multiplyByTwo = arrayOfNumbers.map(number => number * 2)
console.log('arrayOfNumbers:', arrayOfNumbers);
console.log('multiplyTwo:', multiplyByTwo)

const classArray = ['Janset', 'Iryna', 'John', 'Jan'];
const addDot = classArray.map(student => `${student}.`)
console.log('addDot:', addDot);


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

const fruits = [apple, banana, orange];

// const updateFruits = fruits.map(fruit => {
//     return {
//         name: `${fruit.name}s`, // fruit.name + 's'
//         color: fruit.color,
//         reviews: fruit.reviews
//     }
// })

// const updateFruits = fruits.map(({ name, color, reviews }) => {
//     return {
//         name: `${name}s`, // fruit.name + 's'
//         color: color,
//         reviews: reviews
//     }
// })

const updateFruits = fruits.map(fruit => {
    if(fruit.name === 'orange'){
        return {
            name: `${fruit.name[0].toUpperCase()}${fruit.name.slice(1)}`, // fruit.name + 's'
            color: fruit.color,
            reviews: fruit.reviews
        }
    }
    else {
        return {
            name: `${fruit.name}s`, // fruit.name + 's'
            color: fruit.color,
            reviews: fruit.reviews
        }
    }
})
console.log('updateFruits:', updateFruits);

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capitalizedCities = cities.map(city => {
    return `${city.slice(0, city.length - 1)}${city.slice(-1).toUpperCase()}`
})
console.log('capitalizedCities:', capitalizedCities)

const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];

//   const finalGrades = students.map(student => {
//     return {
//         name: student.name, 
//         finalExam: student.finalExam
//     }
//   })

  const finalGrades = students.map(({ name, finalExam}) => {
    return {
        name: name, 
        finalExamGrade: finalExam
    }
  })

  console.log('finalGrades:', finalGrades)

  // Get all the students who have a finalExam score of minimum 70

  const averageStudents = students.filter(student => student.finalExam >= 70)
  const aPlusStudents = students.filter(student => student.finalExam >= 90)

  const numbersExample = [1, 2, 3, 4, 5, 6];
 
  const evenNumbers = numbersExample.filter(number => number % 2 === 0);
 
 console.log('evenNumbers: ',evenNumbers); 
  
  console.log('averageStudents:', averageStudents.length)
  console.log('aPlusStudents:', aPlusStudents.length);

// get the people of drinking age in the USA
  const peopleList = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];

  const drinkingAgePeople = peopleList.filter(person => person.age >= 21)
  console.log('drinkingAgePeople:', drinkingAgePeople);

  // Get all the places that have a swimming pool
  const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

  const placesWithAPool = places.filter(place => place.pool);
  const placesWithAPoolAndGarage = places.filter(place => place.pool && place.garage);
  console.log('placesWithAPool:', placesWithAPool.length)
  console.log('placesWithAPoolAndGarage:', placesWithAPoolAndGarage.length)

// reduce sum numbers example
const numbers = [2, 4, 6, 8];
 
const total = numbers.reduce((accumulator, currentValue) => {
  console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  return accumulator + currentValue;
}, 0);
 
console.log('total is: ', total);

// reduce strings concatenate example

const words = ['This', 'is', 'one', 'big', 'string'];

const bigString = words.reduce((sum, word) => `${sum} ` + word);

console.log('bigString:', bigString)

// reduce objects example

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
  ];
   
  const ages = people.reduce((sum, person) => {
    return sum + person.age;
  }, 0); // initialValue to 0
   
  console.log('ages:', ages); 

// compare forEach vs reduce example

const newNumbers = [1, 2, 3, 4];

// let totalNumbers = 0;
 
// newNumbers.forEach(function (number) {
//   totalNumbers += number;
// });
 


const totalNumbers = newNumbers.reduce((accumulator, currentValue) => accumulator + currentValue
, 0)

console.log('totalNumbers: ',totalNumbers);

// Reduce function Practice
// Get the average calories numbers from the menu

const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
  ];
// Sum all the calories together
// Divide them by the number of objects in the array aka menu.length
  const averageCalories = menu.reduce((accumulator, menuItem) => {
    return accumulator + menuItem.calories
  }, 0)/menu.length
  console.log('averageCalories:', averageCalories);

  //Amazon reviews example
  const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
      { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
      { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
      { user: 'David Recoba', comments: 'Awesome', rate: 5 },
      { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
      { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
  };

  const totalReviews = product.reviews.reduce((acc, review) => {
    return acc + review.rate;
  }, 0); // starts acc to 0
  const averageRate = totalReviews / product.reviews.length;
   
  console.log(`averageRate rate:`, averageRate); //
 