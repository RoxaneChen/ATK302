var song1;

function preload(){
 song1 = loadSound('assets/14.mp3');
}
function setup() {

  createCanvas(720,200);
  background(255,0,0);
  song1.play();


}

function draw() {

}

function mouseRelesed(){
  if (song1.isplaying()){
    song1.pause();
  }else{
    song1.play();
  }


}
