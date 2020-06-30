let state = 0;
let timer = 0;
let x = 0;
let velocity = 1;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {

  background(250);
  fill(0);
  rect(width/ 2, height/ 2, 200, 600);

  //car code
  fill('blue');
  rect(x, 770, 75, 20);
  rect(x,750,55,20);
  ellipse(x-20,790,20,20);
  ellipse(x+20,790,20,20);
  fill(250);
  rect(x+10,765,15,5);
  ellipse(x-20,790,10,10);
  ellipse(x+20,790,10,10);
  fill('green');
  rect(x+300,750,100,50);
  rect(x+362,755.5,25,35);
  ellipse(x+270,790,30,30);
  ellipse(x+330,790,30,30);
  fill(250);
  ellipse(x+270,790,20,20);
  ellipse(x+330,790,20,20);
  x = x + velocity ;
  if ( x >width){
    x = 0;
}

  switch (state) {

    case 0://red
      text("0", 100, 100);
      fill('red');
      ellipse(width / 2, height / 2 -170, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 0;
      break;

    case 1:
            text("2", 100, 100);
        fill ('grey');
      ellipse(width / 2, height / 2 -170, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill ('grey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 5;
      break;

    case 2:
      text("1", 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 -170, 150, 150);
      ellipse(width/ 2, height/ 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 10;
      break;

  }

  timer = timer + 1;
  if (timer > 100){
    timer = 0;
     state++;
  if (state > 2) state = 0;
  }

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;


 }
