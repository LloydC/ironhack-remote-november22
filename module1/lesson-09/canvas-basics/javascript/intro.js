// EXAMPLE 1 
// const canvas = document.getElementById('example');
// const ctx = canvas.getContext('2d'); // initialising Canvas

const fireballImg = new Image();
fireballImg.src = './images/pixel-fireball.png';// "src" has to point as the image is used in HTML file
// set the start position of our image
let fireballX = 0;
let fireballY = 0;

// Animation Example 1 

function draw(x, y) {
 
  const theCanvas = document.getElementById('example');  // use id "example" to get <canvas></canvas> tag
  const ctx = theCanvas.getContext('2d'); // capture 2d context where everything happens in canvas, context has all the methods for drawing things

  ctx.clearRect(0, 0, 600, 600); // clears whole canvas to simulate animation (==movement) of the rectangle
  ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50); // ctx.drawImage(whichImage, x, y, width, height);
  // ctx.fillStyle = "green"; // colors rectangle with this color

  // // creates rectangle => ctx.fillRect(x, y, width, height);
  // ctx.fillRect(x, 0, 50, 50);
  fireballX += 3; // fireballX = 297; ---> changes position of X coordinate
  fireballY += 3; // fireballY = 297 

  if(fireballX < 600){ // as long as my image start origin is not canvas top left corner
    setTimeout(`draw(${x}, ${y})`, 50); // calls itself every 30ms/ keep changing the position of the fireball
  }
  else {
    // ctx.clearRect(0, 0, 600, 600);
    fireballX = 0;
    fireballY = 0;
    setTimeout(`draw(${x}, ${y})`, 50); // calls itself every 30ms
  }
}
draw(fireballX,fireballY)