let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textSize(20)
}

function draw() {

switch(state){
  case 0 :
  background('pink');
  text("Slime Princess, you're alright!",115,150)
  break ;

  case 1:
  background('red');
  text("Flame Princess, you're okay.",115,200);
  break ;

  case 2:
  background('blue');
  text("Wildberry Princess, could be better.",80,250);
  break ;
}

}

function mouseReleased(){
  state = state + 1;
  if (state > 2){
    state = 0;
 }

}
