const myGameArea = {
    canvas: document.createElement('canvas'),
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

  function updateGameArea() {
    myGameArea.clear(); // Clear canvas
    player.newPos(); // updates player position
    player.update(); // draws the player on Canvas
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