// Create a class Rectangle with:

// A property width
// A property height
// A method constructor(width,height)
// A method calculatePerimeter()
// A method calculateArea()




class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculatePerimeter(){
        return 2*(this.width + this.height)
    }

    calculateArea(){
        return this.width * this.height;
    }
  }

  const rectangleOne = new Rectangle(5, 3);

  console.log('rectangleOne: ', rectangleOne)
  console.log(rectangleOne.calculatePerimeter())
  console.log(rectangleOne.calculateArea())

  // Create a class Square that extends Rectangle add with:

// A property side (equals to the width and height)
// A method constructor(side)
   
  class Square extends Rectangle {
    // TODO
    constructor(side){
        super(side, side)
    }
  }

  const squareOne = new Square(4);
  console.log('squareOne: ', squareOne);
  console.log('squareOne perimeter: ', squareOne.calculatePerimeter());
  console.log('squareOne area: ', squareOne.calculateArea());

  function sum(numberOne,numberTwo){
    return numberOne + numberTwo;
  }
  sum(4,6);