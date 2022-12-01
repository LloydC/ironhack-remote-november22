const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');
 
const color = {
  red: Math.floor(Math.random() * 255), // generate random value between 0 and 255
  green: Math.floor(Math.random() * 255),
  blue: Math.floor(Math.random() * 255),
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`; // set a random color
  }
};
 
function updateCanvas() {
  color.red = (color.red + 1) % 255; // defining the  animation pattern
  color.blue = (color.blue + 1) % 255;
  color.green = (color.green + 1) % 255;
 console.log('red:', color.red);
 console.log('green:', color.green);
 console.log('blue:', color.blue);
  ctx.clearRect(0, 0, 480, 270); // clear canvas screen
  ctx.fillStyle = color.rgb(); // setting a random color for the rectangle
  ctx.fillRect(0, 0, 150, 150); // drawing our rectangle
 
  requestAnimationFrame(updateCanvas); // animate canvas by calling updateCanvas again
}
 
updateCanvas();