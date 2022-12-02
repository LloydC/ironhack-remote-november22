const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = './images/road.png';

let score = 0;
let frames = 0;
const myObstacles = [];
let intervalId;

class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
}

class Car {
  constructor(){
    this.x = 220;
    this.y = canvas.height - 70;
    this.speedX = 0;
    this.speedY = 0;

    const newImage = new Image();
      newImage.addEventListener('load', () => {
        // Once image loaded => draw
        this.img = newImage;
      });
      newImage.src = './images/car.png';
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
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
}

function startGame() {
  drawBackground()
  raceCar.draw()
}

function drawBackground(){
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  document.querySelector('.game-intro').style.display = 'none'; // document.querySelector(".game-intro").remove();
  document.querySelector('#game-board').style = 'width: 100vw; display: flex; justify-content: center;';
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing canvas for our next animation
  drawBackground() // redrawing the background
  raceCar.draw(); // redrawing the car
  updateObstacles() // drawing/redrawing the obstacles
  updateScore() // redraw/update the score
  checkGameOver();
  // requestAnimationFrame(updateGame)
}

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  frames += 1;
  if (frames % 120 === 0) {
    let x = canvas.height;
    let minWidth = 90;
    let maxWidth = 300;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minGap = 0;
    let maxGap = 400;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Obstacle(width, 10, "red", gap, 0));
    console.log(myObstacles);
  }
}

function updateScore() {
  score = Math.floor(frames/10); // 1 sec -->12
  ctx.font = '18px serif';
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${score}`, 350, 50);
}

function crashWith(obstacle) {
  return !(
    raceCar.bottom() < obstacle.top() ||
    raceCar.top() > obstacle.bottom() ||
    raceCar.right() < obstacle.left() + 5 ||
    raceCar.left() > obstacle.right() - 5
  );
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return crashWith(obstacle);
  });

  if(crashed) {
    stop();
    console.log("game over");

    const points = Math.floor(frames / 10);

    ctx.font = "35px serif";
    ctx.fillStyle = "cyan";
    ctx.fillText(
      `GAME OVER your score is ${points} `,
      20,
      canvas.height / 2
    );
  }
}

function stop() {
  clearInterval(intervalId);
}

const raceCar = new Car();

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
   
    startGame(); // initialize the game
    intervalId = setInterval(updateGame, 20) // send updates to the game
    // updateGame();
  };
};

document.addEventListener('keydown', event => {
  console.log('event keyCode', event.keyCode);
  switch (event.keyCode) {
    case 37:
      raceCar.moveLeft();
      console.log('left', raceCar);
      break;
    case 39:
      raceCar.moveRight();
      console.log('right', raceCar);
      break;
  }
});