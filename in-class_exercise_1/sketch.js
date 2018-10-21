let x=200;
// declare variables here
function setup() {
  createCanvas(500, 500);

  // set background color in grayscale:
  background(150);

  // draw ellipse
}

function draw() {
  //
background(0);
	ellipse(x, 100, 80, 80);
	x=x+1;
	if (x>width+20)
  {
    x=-20;
  }
}
