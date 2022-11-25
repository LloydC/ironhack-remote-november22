
// Person
// name
// age
// city

class Person {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
        this.canUseJavascript = true;
    }

    greet(){
        console.log(`${this.name}: Good morning!`)
    }

    goSleep(){
        console.log(`${this.name}: Time to go to bed!`)
    }

    sayGoodBye(){
        console.log('Goodbye')
    }
}

// let person1 = new Person('Iryna', 27, 'Barcelona'); // Instance of the class Person
// let person2 = new Person('John', 32, 'Berlin');

// console.log('person1', person1)
// console.log('person2', person2)

// person1.greet(); //
// person2.goSleep();
// console.log(person1);
// Person {name, age, city} --> Teacher {name, age, city}
class Teacher extends Person {
    constructor(name, age, city, programmingLanguages){
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

let teacher1 = new Teacher('Lloyd', 32, 'Amsterdam', ["Javascript", "Java"]);

console.log('teacher1:', teacher1)
teacher1.greet('This is my new greeting');
// let teacher2 = new Teacher('Malcolm', 28, 'Zanzibar', ['Javascript', 'Ruby']);
// console.log(teacher1);
// console.log(teacher2)
// teacher1.greet("Good morning class!");
// teacher2.greet("Welcome to class");

// teacher1.doTeaching()
// teacher2.goSleep();
// // teacher1.sayGoodBye();

// // Person{} --> Teacher {} --> Teaching Assistant {}
// // name
// // age
// // city

class TeachingAssistant extends Teacher {
    constructor(name, age, city, programmingLanguages){
        super(name, age, city, programmingLanguages);
    }
}

let teachingAssistant1 = new TeachingAssistant("Alessandra", 40, 'Amsterdam', ['Javascript'])
console.log('teachingAssistant:', teachingAssistant1)
teachingAssistant1.goSleep();
// // Students {}
// // name
// // age
// // city

