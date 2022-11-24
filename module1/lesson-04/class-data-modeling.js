// Person
// name
// age
// city

class Person {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet(){
        console.log('Good morning!')
    }

    goSleep(){
        console.log('TIme to go to bed!')
    }

    sayGoodBye(){
        console.log('Goodbye')
    }
}

let person1 = new Person('Jasmine', 34, 'Dublin'); // Instance of the class Person

// person1.greet(); //
// person1.goSleep();
// console.log(person1);
// Teacher {}
class Teacher extends Person {
    constructor(name, age, city, programmingLanguages = []){
        super(name, age, city);

        this.programmingLanguages = programmingLanguages;
    }

    greet(message){
        console.log(message)
    }

    doTeaching(){
        console.log("Let's code away");
    }
}

let teacher1 = new Teacher('Lloyd', 32, 'Amsterdam');
let teacher2 = new Teacher('Malcolm', 28, 'Zanzibar', ['Javascript', 'Ruby']);
console.log(teacher1);
console.log(teacher2)
teacher1.greet("Good morning class!");
teacher2.greet("Welcome to class");

teacher1.doTeaching()
teacher2.goSleep();
// teacher1.sayGoodBye();

// Teaching Assistant {}
// name
// age
// city

class TeachingAssistant extends Teacher {
    constructor(name, age, city, programmingLanguages = []){
        super(name, age, city, programmingLanguages);
    }
}

let TeachingAssistant1 = new TeachingAssistant("Alessandra", 40, 'Amsterdam', ['Javascript'])
// Students {}
// name
// age
// city

