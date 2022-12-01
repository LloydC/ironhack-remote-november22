const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');
 
ctx.fillStyle = 'black';
ctx.font = '18px serif';

class Ghost {
    constructor() {
      this.x = 25;
      this.y = 25;
   
      // Load the image
      const newImage = new Image();
      newImage.addEventListener('load', () => {
        // Once image loaded => draw
        this.img = newImage;
        this.draw(); // adding the image on canvas
      });
      newImage.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
    }
    moveUp() {
      this.y -= 25;
    }
    moveDown() {
      this.y += 25;
    }
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    reset(){
        this.x = 25;
        this.y = 25;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 50, 50);
    }
  }
   
  const ghost = new Ghost();

  function updateCanvas() {
    ctx.clearRect(0, 0, 1500, 1700); // clearing canvas for our next animation
    // generate the next animation frame
    ctx.fillText('Ghost_x: ' + ghost.x, 50, 40);
    ctx.fillText('Ghost_y: ' + ghost.y, 50, 60);
    ghost.draw();
  }

  document.addEventListener('keydown', event => {
    console.log('event keyCode', event.keyCode);
    switch (event.keyCode) {
      case 38:
        ghost.moveUp();
        console.log('up', ghost);
        break;
      case 40:
        ghost.moveDown();
        console.log('down', ghost);
        break;
      case 37:
        ghost.moveLeft();
        console.log('left', ghost);
        break;
      case 39:
        ghost.moveRight();
        console.log('right', ghost);
        break;
      case 32:
        ghost.reset();
        console.log('reset', ghost);
    }
    updateCanvas();
  });