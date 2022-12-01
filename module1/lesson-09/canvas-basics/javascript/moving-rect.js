const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#FF0000';
ctx.fillRect(100, 0, 50, 50);
ctx.fillRect(300, 0, 50, 50);
ctx.fillRect(500, 0, 50, 50);

let speed1 = 0;
let speed2 = 0;
let speed3 = 0;

function clearCanvas() { // clear Canvas for the next frame
  ctx.clearRect(0, 0, 700, 450); // 700 and 450 are canvas width and height
}

function drawCanvas(x, y, w, h, color) { // draw the current frame
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function updateCanvas() {
  // in order to see animation, let's change speed1,2 and 3 on every call
  speed1 += 1;
  speed2 += 2;
  speed3 += 3;

  // clear the canvas
  clearCanvas();

  // redraw the canvas
  drawCanvas(50, speed1, 50, 50, 'red');
  drawCanvas(150, speed2, 50, 50, 'green');
  drawCanvas(250, speed3, 50, 50, 'yellow');

  requestAnimationFrame(updateCanvas); // loop calling updateCanvas
}

updateCanvas() // execute the function for the first time
// requestAnimationFrame(updateCanvas)