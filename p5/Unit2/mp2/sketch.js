let song;
let bg;
let pic1,pic2,pic3,pic4;
let state = 0;
let timer = 0;
let x = 0;
let velocity = 3;
let f;


function preload() {
 song = loadSound('assets/nmare.mp3');
 song.loop();
 f = loadFont('assets/2.ttf');
}



function setup() {
  createCanvas(1100, 654);
  bg = loadImage('assets/Night.jpg');
  pic1 = loadImage("assets/witch.jpg");
  pic2 = loadImage("assets/21.jpg");
  pic3 = loadImage("assets/22.jpg");
  pic4 = loadImage("assets/23.jpg");
  imageMode(CENTER);
  textSize(100);
  textAlign(CENTER);
  //fontSize(40);
  textFont(f);
}

function draw() {
  image(bg,width/2,height/2);
  fill(0);
  image(pic1, x, 40, 80, 60);
  x = x + velocity;
  if (x > width) {
    x = 0;
  }


  timer = timer + 1;
  if (timer > 100) {
    timer = 0;
    state++;
    if (state > 2) state = 0;
  }



  switch (state) {
    case 0:
      fill(255);
      text("This Is Halloween!", 550, 600)
      break;

    case 1:
      fill(255);
      image(pic2,1000,500,250,350);
      image(pic4,700,500,300,400);
     // text("No Death!", 860, 600);
      break;

    case 2:
      fill(255);
      image(pic3,350,500,400,500);
      //text("No Screaming!", 150, 520);
      break;

  }

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
 if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    image(pic3,350,500,400,500);
  } else {
    song.play();
    image(bg,width/2,height/2);
  }

  function touchStarted() {
  getAudioContext().resume();
}





}
