const myObstacles = [];

const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 480; // setting the width of canvas
    this.canvas.height = 270; // setting the height of canvas
    this.context = this.canvas.getContext('2d'); // setting the @D context of canvas
    document.body.insertBefore(this.canvas, document.body.childNodes[0]); // injecting <canvas> before <script>
    this.interval = setInterval(updateGameArea, 20); // call updateGameArea every 20ms
  },
  stop: function () {
    clearInterval(this.interval); // stop the setInterval function
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  frames: 0,
  score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 350, 50);
  }
};

function updateGameArea() { // responsible updating the Game Area
  myGameArea.clear(); // clear the game area
  player.newPos(); // check for updated player position
  player.update(); //set player's position
  updateObstacles() //
  checkGameOver();// check game is over
 // if firstObstacleX <= playerX
  setTimeout(() => myGameArea.score(), 10000)
 // setInterval(() => myGameArea.score(), 500); // update game score
}

function updateObstacles() {
  myGameArea.frames += 1; // increment property frames
  // console.log(myGameArea.frames);
  if(myGameArea.frames % 80 === 0){ // generate obstacles
    let x = myGameArea.canvas.width; // 480
    let minHeight = 20; // set params for the obstacles
    let maxHeight = 200; // set params for the obstacles
    let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight); // set params for the obstacles
    let minGap = 50; // set params for the obstacles
    let maxGap = 200; // set params for the obstacles
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(10, height, 'green', x, 0));
    myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap));
  }

  for (i = 0; i < myObstacles.length; i++) { // decrementing their x position by 1
    myObstacles[i].x += -1; // decrements the x position of the obstacle
    myObstacles[i].update(); // update
  }
  
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) { 
    return player.crashWith(obstacle); // this will return true if one of the obstacles starting points coordinates crashes with the player's points
  });

  if (crashed) {
    myGameArea.stop(); // stop the game
  }
}

class Component {
  constructor(width, height, color, x, y) { // defining our Component properties
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x; // initial X position
    this.y = y; // initial Y position
    this.speedX = 0; // controlling the speed on the x axis
    this.speedY = 0; // controlling the speed on the y axis
  }

  // (if this.x < 480 || this.y < 270)
  left() {
    console.log(this.color,'leftX:',this.x);
    return this.x;
  }
  right() {
    console.log(this.color,'rightX:',this.x + this.width);
    return this.x + this.width;
  }
  top() {
    console.log(this.color,'topY:',this.y);
    return this.y;
  }
  bottom() {
    console.log(this.color,'bottomY:',this.y);
    return this.y + this.height;
  }

  crashWith(obstacle) {
    // obstacleX range --> [obstacle.left(), obstacle.right()]
    // obstacleY range --> [obstacle.top(), obstacle.bottom()]
    // Player Right Side Collision happens if player.x and player.y are both in obstacle range
    if(obstacle.left() <= this.x && this.x <= obstacle.right() && obstacle.top() <= this.y && this.y <= obstacle.bottom()){
      return true
    }
    
    // [player.x, player.x + width]
    // Player Bottom Side Collision happens if player.x is in obstacle range and player.y+height is equal to obstacle.y
    // Player Top Side Collision happens if player.x is in obstacle range and player.x+width is equal to obstacle.y+height

    // this.bottom() > obstacle.top()
    // this.top() < obstacle.bottom()
    // this.right > obstacle.left()
    // this.left() < obstacle.right()

    // y + height < obstacleY
    // y > obstacleY + height
    // x + width < obstacleX
    // x > obstacleX + Width
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }

  newPos() {
    this.x += this.speedX; // this.x = this.x + speedX
    this.y += this.speedY; // this.y = this.y + speedY
  }

  update() { // creating a rectangle 
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY -= 1;
      // console.log('speedY',player.speedY)
      break;
    case 40: // down arrow
      player.speedY += 1;
      // console.log('speedY',player.speedY)
      break;
    case 37: // left arrow
      player.speedX -= 1;
      // console.log('speedX',player.speedX)
      break;
    case 39: // right arrow
      player.speedX += 1;
      // console.log('speedX',player.speedX)
      break;
  }
});

document.addEventListener('keyup', (e) => { // makes sure the speed goed back 0
  player.speedX = 0;
  player.speedY = 0;
}); 

const player = new Component(30, 30, 'blue', 0, 110); // creating an instance of class Component
myGameArea.start();
// setTimeout(() => myGameArea.stop(), 5000);
// setInterval(() => console.log('HEllo World'), 1000);