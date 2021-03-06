let cars = [];
let pic1, pic2, pic3,pic4;
let frogPos;
let myState = -1;
let timer = 0;
let yoda, yodaRight, yodaLeft;
let bird;
let birds = [];
let song1, song2, song3;
let maxBirds = 10;
//let f;

function preload() {
  //f = loadFont('assets/Godzilla.ttf');
  song1 = loadSound("assets/welcome.mp3");
  song2 = loadSound("assets/play.mp3");
  song3 = loadSound("assets/lose.mp3");
  song1.loop();
  song2.loop();
  song3.loop();
  song1.pause();
  song2.pause();
  song3.pause();
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  pic1 = loadImage("assets/welcome1.png");
  pic2 = loadImage("assets/play.jpg");
  pic3 = loadImage("assets/lose1.png");
  pic4 = loadImage("assets/win.png")
  imageMode(CENTER);

  birds[0] = loadImage("assets/fire5.png");
  birds[1] = loadImage("assets/fire6.png");
  birds[2] = loadImage("assets/fire7.png");
  yodaRight = loadImage("assets/09.jpg");
  yodaLeft = loadImage("assets/03.jpg");
  yoda = yodaRight;

  //textMode(CENTER);
  //textSize(80);
  //textAlign(CENTER);
  //textFont(f);


  bird = loadImage("assets/fire5.png");

  // spawn cars!!!
  for (var i = 0; i < maxBirds; i++) {
    cars.push(new Car());
  }



  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  //textMode(CENTER);
}

function draw() {

  switch (myState) {

    case -1:
      song1.play();
      myState = 0;
      break;

    case 0: // splash screen
      // welcome to my game, click to start
      image(pic1, width/2, height/2, windowWidth, windowHeight);
      //fill('white');
      //textMode(CENTER);
      //text("welcome to the game! ", 100, 100);
      //text("Damour' world", 100, 200);
      break;

    case 1: // the game state

      game();
      //image(pic2, width / 2, height / 2, windowWidth, windowHeight);
      timer++;
      if (timer > 1000) {
        myState = 3; // going to the lose state
        stopTheSongs();
        song3.play();
        timer = 0;
      }
      break;

    case 2: // the win state
      image(pic4, width/2, height/2, windowWidth, windowHeight);
      //fill('white');
      //text("YOU WON!!!", 100, 100);
      break;

    case 3: // the lose state
      image(pic3, width/2, height/2, windowWidth, windowHeight);
      //fill('white');
      //text("YOU LOST!", 100, 100);
      break;

  }
}

function stopTheSongs() {
  song1.pause();
  song2.pause();
  song3.pause();
}

function mouseReleased() {
  switch (myState) {
    case 0: // click to go to the game state
      stopTheSongs();
      song2.play();
      myState = 1;
      break;

    case 2: // the win state!
      stopTheSongs();
      resetTheGame();
      myState = -1;
      break;

    case 3: // the lose myState
      stopTheSongs();
      resetTheGame();
      myState = -1;
      break;

  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length));
  this.timer = 0;
  this.maxTimer = random(10, 30); // use this for timer code


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //    rect(this.pos.x, this.pos.y, 100, 50);
    //    ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    //    ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    //  image(bird, this.pos.x, this.pos.y, 100, 100);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {

      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0;
    }



  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < maxBirds; i++) {
    cars.push(new Car());
  }
  timer = 0;

}


function game() {
  image(pic2, width/2, height/2, windowWidth, windowHeight);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    // make sure car isn't really close to frog!!!!
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); // take the car out!!
      // if the car's type is a killer type, myState = 3

    }
  }

  if (cars.length == 0) {
    myState = 2; // the win state!!!
    stopTheSongs();
    song3.play();
  }

  // draw the frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x, frogPos.y, 440,270);
  checkForKeys();
}

function touchStarted() {
  getAudioContext().resume();
}
