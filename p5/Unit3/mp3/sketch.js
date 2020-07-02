let cars = []; // an array for the objects
let frogPos ;
let state = -1 ;
let timer = 0 ;
let yoda, yodaRight, yodaLeft;
let bird;
let birds = [];
let song1, song2, song3;
let maxBirds = 10 ;

function preload() {
  song1 = loadSound("assets/donkey.mp3");
  song2 = loadSound("assets/skate.mp3");
  song3 = loadSound("assets/thrill.mp3");
  song1.loop();
  song2.loop();
  song3.loop();
  song1.pause();
  song2.pause();
  song3.pause();
}


function setup() {
  createCanvas(windowWidth, windowHeight);

birds[0] = loadImage("assets/bird1.png");
birds[1] = loadImage("assets/bird2.png");
birds[2] = loadImage("assets/bird3.png");
yodaRight = loadImage("assets/yodaRight.gif");
yodaLeft = loadImage("assets/yodaLeft.gif");
yoda = yodaRight;


bird = loadImage("assets/bird1.png");

  // spawn cars!!!
  for (var i = 0; i < maxBirds; i++) {
    cars.push(new Car());
  }



frogPos = createVector(width/2, height-120);
rectMode(CENTER);
ellipseMode(CENTER);
imageMode(CENTER);


function draw () {

  game() ;

switch(state){
   case -1:
   song1.play();
   myState = 0;
   break;

   case 0:
   background('grey') ; //put an image here later
   fill('white');
   text("welcome to my game!", 200, 200);
   break;

   case 1: // game state
   game();
   timer++ ;
   if (timer > 1000) {
      state = 3;
      stopTheSongs();
      song3.play();
      timer = 0;
   }

   break;

   case 2: // wi state
   background('green');
   fill(0);
   text("You Won!", 200, 200)

   break;

   case 3: // lose state
   background('blue');
   fill(0)
   text("Sorry you lost, try again", 200, 200);
   break;




}


}



function reset(){
  cars = [] ;
  timer = 0 ;
  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());  // put the objects onto the cars array
  }
}

function mouseReleased (){
  switch(state){
     case 0:
     state = 1 ;
     break;

     case 2: // win
     reset();
     state = 0 ;
     break;

     case 3: // lose
     reset();
     state = 0 ;
     break;

  }

}


function game() {
  background('white');

    // iterate through the array, display them, update them
    for (let i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].update();

    if(cars[i].pos.dist(frogPos) < 50){
      cars.splice(i,1); // delete a car
    }

    }

    //cheak if there are any cars left
    if(cars.length == 0) {
    state = 2 ; // go to win state
  }

    // draw a "frog" here
    fill('green') ;
    ellipse(frogPos.x, frogPos.y, 70, 70);
    //checkForKeys();
    frogPos.x = mouseX;
    frogPos.y = mouseY;
  }



 function checkForKeys() {
   if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
   if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
   if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
   if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

 }




  // this is the Car class!
  class Car {
    constructor() {
      // attributes
      this.pos = createVector(width / 2, height / 2); // where it starts
      this.vel = createVector(random(-3, 3), random(-3, 3)); // direction
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.a = random(255);
    }
    // methods

     display() { // this displays the object
        fill(this.r, this.g, this. b, this.a)
        ellipse(this.pos.x, this.pos.y, 30, 30);
       // image(img1, this.pos.x, this.pos.y, 100, 100) ;
     }

     update() { // this moves the object
       this.pos.add(this.vel);  // add the velocity to the position

       // loop the objects around the screen
       if (this.pos.x > width) this.pos.x = 0;
       if (this.pos.x < 0) this.pos.x = width;
       if (this.pos.y > height) this.pos.y = 0;
       if (this.pos.y < 0) this.pos.y = height;
     }

   }
