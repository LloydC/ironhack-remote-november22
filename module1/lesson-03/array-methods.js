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
  
  console.log('averageStudents:', averageStudents.length)
  console.log('aPlusStudents:', aPlusStudents.length);