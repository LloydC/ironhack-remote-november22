const img = new Image();
img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

const backgroundImage = {
  img: img,
  x: 0,
  speed: -3,

  move: function() {
    this.x += this.speed; // decrease this.x by 1
    this.x %= canvas.width; // loop back to the start of the image
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0); // add backgroundImage at the start of canvas
    ctx.drawImage(this.img, this.x + canvas.width, 0);// add another backgroundImage at the end of canvas
    // if (this.speed < 0) {
    //   ctx.drawImage(this.img, this.x + canvas.width, 0);
    // } 
    // else {
    //   ctx.drawImage(this.img, this.x - this.img.width, 0);
    // }
  },
  gameOver(){
    this.speed = 0;
  }
};

function updateCanvas() {
  backgroundImage.move(); // move backgroundImage to the left

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  backgroundImage.draw(); // set our next backgroundImage?frame

  requestAnimationFrame(updateCanvas); // repeat the animation
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;