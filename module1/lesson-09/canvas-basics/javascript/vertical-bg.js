const img = new Image();
 img.src = 'https://png.pngtree.com/element_our/md/20180321/md_d76401cff8291e4834a4754df44cb637.jpg';
//img.src = 'http://guidohenkel.com/wp-content/uploads/2018/05/image8.jpg';
// img.src = 'https://www.gamedevelopment.blog/wp-content/uploads/2019/01/spacebg.jpg';
//img.src = 'https://image.freepik.com/free-vector/seamless-colorful-space-pattern-background-from-planets-rockets-stars_3119-189.jpg';

let canvas, ctx, mainCanvas, mainCtx;

img.onload = function() {
  // Create background canvas
  backgroundCanvas = document.getElementById('background-canvas');
  ctx = backgroundCanvas.getContext('2d');
  
  // Create main canvas
  mainCanvas = document.getElementById('main-canvas');
  mainCtx = mainCanvas.getContext('2d');
  
  // start calling updateCanvas once the image is loaded
  updateBackgroundCanvas()
};




const backgroundImage = {
  img: img,
  x: 0,
  y:0,
  speed: -1,

  move: function() {
    this.y += this.speed;
    this.y %= backgroundCanvas.height;
  },

  draw: function() {
    ctx.drawImage(this.img, 0, this.y);
    ctx.drawImage(this.img, 0, this.y + this.img.height);
    // if (this.speed < 0) {
    //   ctx.drawImage(this.img, 0, this.y + this.img.height);
    // } else {
    //   ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
    // }
  },
};

function renderMainCanvas() {
  mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  mainCtx.fillStyle = "black";
  mainCtx.font = "50px monospace";
  mainCtx.fillText('Ironhackers', 100, 200);
}

function updateBackgroundCanvas() {
    backgroundImage.move(); // move the backgroundImage uop
    renderMainCanvas(); // render Ironhackers on the secondary canvas window
    ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height); // clears canvas
    backgroundImage.draw(); // set our next backgroundImage/frame
    
    requestAnimationFrame(updateBackgroundCanvas); // loop our updateBackgroundCanvas call
  }