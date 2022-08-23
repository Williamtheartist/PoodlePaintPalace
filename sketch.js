let poodle1;
let manualRotationAngle = 0
let buffer;
let topcolor, bottomcolor;


let x;
let y;

let r;
let g;
let b;

let pp = 'Welcome to The Poodle Paint Palace';
let button //Poodle head is the button
let s = 'Mouse button = small poodle brush. Left, Up and Right arrow = rotate poodle brush. l = big poodle brush. c = midscreen triangle brush. x = is first quarter triangle brush. b = top screen triangle brush. v = randomly coloured ellipse brush. w = white ellipse brush. a = small brush. i = medium random coloured brush. j = bottom triangle brush. t = pause. r = resume.';


function preload() {
  poodle1 = loadImage('poodle.png');

}
function setup() {
  createCanvas(800, 600);
  // buffer = createGraphics(800, 600);
  // buffer.background(0);
    background(0);
  angleMode(DEGREES);{



  button = createButton(pp);
  stroke(r,g,b);
  fill(r,g,b);
  button.position(150,200);
  button.size(500, 200);
  button.mousePressed(changeBG);
  button.style('font-size', '52px');
  button.style('font','Helvetica');
  }

//   random walker setup
  x = width / 2;
  y = height / 2;

  r = random(255);
  g = random(255);
  b = random(255);

  //back ground gradient set up
  topcolor = color(0,0,0);
  bottomcolor = color(65,65,65)
  for(let y=0; y<height; y++){
  n = map(y,0,height,0,1);
  let newcolor = lerpColor(topcolor, bottomcolor, n);
  stroke(newcolor); //new colour on brush?
  line(0, y, width, y); //draw horizontal line
  }

}

function changeBG(){
  state = 1;
  button.position(-width / 2 - 90, height/ 2-45);
}

function draw() { //Random walker draw function.
 for (let i =1; i <100; i++) {
     step();
 }

//Poodle brush

  if (mouseIsPressed == true) {
    push();
    rotate(manualRotationAngle);

    image(poodle1,mouseX-45,mouseY-100,80,80);
    // image(mouseX,mouseY);
    pop();
  }
  // Big poodle brush
    if (keyIsDown(76)) { //L key
    push();
    rotate(manualRotationAngle);

    image(poodle1,mouseX-45,mouseY-100,200,200);
    // image(mouseX,mouseY);
    pop();
    }

  //random rbg triangle, mid screen
  if (keyIsDown(67)) { //C key
    fill(r,g,b);
    stroke(r,g,b);
    triangle(mouseX,mouseY,400,300,600,300);
  }
  //black triangle, quarter of the way down.
  if (keyIsDown(88)) { // x key
    fill(0);
    stroke(255);
    triangle(mouseX,mouseY,100,300,600,300);
  }
  //top big black triangle.

  if (keyIsDown(66)) { // b key
    fill(0);
    stroke(255);
    triangle(mouseX,mouseY,0,0,800,0);
  }
  //random rbg ellipse.

  if (keyIsDown(86)) { //v key
    fill(r,g,b);
    stroke(r,g,b);
    ellipse(mouseX,mouseY,20,30);
  }
  //white ellipse

  if (keyIsDown(87)) { //w key
  fill(255,252,266);
  stroke(244, 240,219);
  ellipse(mouseX, mouseY,20,30);
  }
  //small brush
  if (keyIsDown(65)) { //A key
    fill(r,g,b);
    stroke(r,g,b);
    square(mouseX,mouseY,5,5);
  }
  //medium square
    if (keyIsDown(73)) { // i key
    fill(r,g,b);
    stroke(r,g,b);
    rect(mouseX,mouseY,50,50);

     }
  //bottom triangle
  if (keyIsDown(74)) { // j key
    fill(0);
    stroke(255);
    triangle(mouseX,mouseY,0,600,800,600);
}
    text(s,0,550,800,600);
}
// Random Walker set up
function step() {
  x += random(-1,1);
  y += random(-1,1);

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  r += random(-1,1);
  g += random(-1,1);
  b += random(-1,1);

  r = constrain(r, 0, 200);
  g = constrain(g, 0, 200);
  b = constrain(b, 0, 200);

  stroke(r, g, b);
  strokeWeight(1);
  point(x, y);

    }



// rotation of poodle brush (mouse button)
function keyPressed(event) {


   if (keyIsDown(37)) { //left arrow
   manualRotationAngle -=45;
   } else
   if (keyIsDown(38)) { //up arrow
    manualRotationAngle += 90;
   } else
   if (keyIsDown(39)) {  //right arrow
   manualRotationAngle +=45;
   } else
  if (keyIsDown(40)) { //down arrow
    manualRotationAngle -=90;

    //pause screen
    }
  if (keyIsDown(84)) { //t key
    noLoop();
  } else
    if (keyIsDown(82)) { //r ke
    loop();
  }
}
