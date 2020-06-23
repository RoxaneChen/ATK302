let state = 0 ;
let song1,song2,song3;

fuction preload() {
song1 = loadSound("assets/")
song2 = loadSound("assets/")
song3 = loadSound("assets/")
}








}

function draw() {
  background(100);
  switch(state){

  case 0 :
  text("1",100,100)
  song1.play();
  break ;

  case 1:
    text("listen 1",100,100);
  break ;

  case 2:

song2.play()
 state = 3;
  break ;

  case 3:
    text("Listen to song2",100,100)
    break;
}

}

function mouseRelesed(){
song1,pause() ;
song2,pause() ;
song3,pause() ;

state++;

  }
}
