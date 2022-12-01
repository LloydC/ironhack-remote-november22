// EXAMPLE 1 
// const canvas = document.getElementById('example');
// const ctx = canvas.getContext('2d'); // initialising Canvas

const fireballImg = new Image();
fireballImg.src = './images/pixel-fireball.png';// "src" has to point as the image is used in HTML file
console.log(fireballImg);

// RECTANGLES
//fillRect(x, y, width, height);
// ctx.fillStyle = 'green';
// ctx.fillRect(20, 10, 100, 100);
//ctx.clearRect(20, 10, 60, 60);

// ctx.fillStyle = 'blue';
// ctx.fillRect(20, 10, 25, 25);

// // color the text
// ctx.fillStyle = 'orange';
// ctx.font = '20px Times New Roman';
// 
// // is going to appear
// ctx.fillText('Hello there', 20, 40); // ctx.fillText("string", x, y); => x, y are coordinates where the text

// Example 2 



// // // set the start position of our image

let fireballX = 600;
let fireballY = 600;

function draw(x, y) {
 
  const theCanvas = document.getElementById('example');  // use id "example" to get <canvas></canvas> tag
  const ctx = theCanvas.getContext('2d'); // capture 2d context where everything happens in canvas, context has all the methods for drawing things

  ctx.clearRect(0, 0, 600, 600); // clears whole canvas to simulate animation (==movement) of the rectangle
  ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50); // ctx.drawImage(whichImage, x, y, width, height);
  // ctx.fillStyle = "green"; // colors rectangle with this color

  // // creates rectangle => ctx.fillRect(x, y, width, height);
  // ctx.fillRect(x, 0, 50, 50);
  fireballX -= 3; // fireballX = 297; ---> changes position of X coordinate
  fireballY -= 3; // fireballY = 297 

  if(fireballX > 0){
    setTimeout(`draw(${x}, ${y})`, 30); // calls itself every 30ms
  }
  else {
    // ctx.clearRect(0, 0, 600, 600);
    fireballX = 600;
    fireballY = 600;
    setTimeout(`draw(${x}, ${y})`, 30); // calls itself every 30ms
  }
}
draw(fireballX,fireballY)