let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name, color) {
    // this // instance of the class --> new Player {}
    this.name = name; // property value id provided by us
    this.color = color; // property value id provided by us
    this.position = 0; // property they are pre-configured
    this.cash = 1000; // property they are pre-configured
    this.isPlaying = true;
  }

  // Method move

  // Math.random() generates a number between 0 and 1
  // Math.floor() rounds up a decimal number to the lowest value
  // Math.ceil() rounds up a decimal to the highest value
  move() {
    let dice = 1 + Math.floor(6 * Math.random()); // 0.9 * 6 = 5.4 --> 5
    this.position = (this.position + dice) % squares.length; // 4
    this.cash += squares[this.position]; //  this.cash = 1000 - 40 = 960
    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }

  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// --- Initialization of players ---
let player1 = new Player('Joaquim', 'red');
let player2 = new Player('Maxence', 'blue');
let player3 = new Player('Mostafa', 'black');

// --- Turn 1  ---
console.log("Initial position")
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

player1.move();
player2.move();
player3.move();

// // --- Turn 2  ---
console.log("After Round 1")
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

player1.move();
player2.move();
player3.move();

// // --- Turn 2  ---
console.log("After Round 2")
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

console.log(Math.round(0.6))
console.log(Math.round(6.2))