function drawOnCanvas(){
const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = './images/pixel-fireball.png';
img.onload = () => ctx.drawImage(img, 0, 0,100,100);

console.log(img)
// ctx.fillStyle = 'green';
// ctx.fillRect(10,10, 30, 30);

// ctx.fillStyle = 'purple';
// ctx.fillRect(260, 260, 30, 30);

// ctx.fillStyle='red';
// ctx.fillRect(25, 25, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeStyle = 'orange';
// ctx.strokeRect(50, 50, 50, 50);

ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);
ctx.stroke();

ctx.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 100);
// .stroke() executes the drawing
ctx.stroke();
ctx.moveTo(250, 100);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.moveTo(50, 100)
ctx.lineTo(50, 200)
ctx.stroke()
// close the path
ctx.closePath();

ctx.beginPath()
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
ctx.closePath()

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 170, 75, 0, Math.PI * 2);
ctx.lineWidth = 20;
ctx.strokeStyle = 'green'; // !
ctx.stroke();
ctx.closePath();

ctx.fillStyle = 'green';
ctx.font = '30px Arial'
ctx.fillText('Start', 145, 170, 100);
}

function clearCanvas(){
    const canvas = document.getElementById('example');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, 500, 500)
}

// const canvas = document.querySelector('#example');
// const ctx = canvas.getContext('2d');

// const cWidth = canvas.width;
// const cHeight = canvas.height;

// function drawCanvas(x, y, w, h, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, w, h);
// }



// const state = [stateTwo,stateOne]
// ctx.save();
// drawCanvas(10, 20, 30, 30, 'turquoise');
// ctx.save();
// ctx.restore();
// drawCanvas(50, 70, 30, 30, 'orangeRed');
// ctx.save();
// drawCanvas(120, 150, 30, 30, 'magenta');
// ctx.restore();
// drawCanvas(200, 70, 30, 30);
// // ctx.save(); // => this would give us back orangeRed
// // ctx.restore();
// drawCanvas(250, 20, 30, 30);