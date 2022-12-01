const myObstacles = [];

const myGameArea = {
    canvas: document.createElement('canvas'),
    frames: 0, // used so we can know when to generate obstacles
    start: function () {
        // setting canvas width and height on the page
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext('2d'); // setting canvas context
      document.body.insertBefore(this.canvas, document.body.childNodes[0]); // adding canvas to the page 
      this.interval = setInterval(updateGameArea, 20); // calling the updateGameArea every 20ms so we can run updates inside canvas after we start our game
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
      stop: function () {
        clearInterval(this.interval);
      },
      score: function () {
        const points = Math.floor(this.frames / 5);
        this.context.font = '18px serif';
        this.context.fillStyle = 'black';
        this.context.fillText(`Score: ${points}`, 350, 50);
      },
  };


  class Component {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
    }
    left() {
        return this.x;
    }
    
    right() {
        return this.x + this.width;
    }
    
    top() {
        return this.y;
      }
      bottom() {
        return this.y + this.height;
      }

    crashWith(obstacle) {
        return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    }
   
    newPos() { // updates our component position
        this.x += this.speedX;
        this.y += this.speedY;
      }

    update() { // updates our component on canvas
      const ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  function updateObstacles(){
    // define the logic for generating my obstacles on canvas
    for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x += -1; // decrease x by 1 every 20ms
        myObstacles[i].update(); // update the obstacles position every 20ms
    }

    myGameArea.frames += 1; 
    // every 20ms --> 1 
    // every 2400ms--> 120
    if (myGameArea.frames % 120 === 0) { // every 120 frames
      let x = myGameArea.canvas.width; 
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);// randomly generate the height of 
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new Component(10, height, 'green', x, 0)); // adding an obstacle
      myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap)); // adding another obstacle
    }
  }

  function checkGameOver() {
    const crashed = myObstacles.some(function (obstacle) {// check if one of the obstacles has crashed with the player
      return player.crashWith(obstacle);
    });
   
    if (crashed) { // if one of the obstacles has crashed then stop the game
      myGameArea.stop();
    }
  }

  function updateGameArea() {
    myGameArea.clear(); // Clear canvas
    player.newPos(); // updates player position
    player.update(); // draws the player on Canvas
    updateObstacles() // update canvas with obstacles
    checkGameOver() // stop the game in case of a collision with an obstacle
    myGameArea.score()// updates game score on canvas
  }

  const player = new Component(30, 30, 'red', 0, 110);
  myGameArea.start();

  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38: // up arrow
        player.speedY -= 1;
        break;
      case 40: // down arrow
        player.speedY += 1;
        break;
      case 37: // left arrow
        player.speedX -= 1;
        break;
      case 39: // right arrow
        player.speedX += 1;
        break;
    }
  });

  document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
  });