let e1, e2

function setup() {
  createCanvas(400  , 300);
  noStroke();
  e1 = new Eye(250, 100, 80);
  e2 = new Eye(164, 100, 80);

}

function draw() {
  background(100);

  // face here
  fill(200) ;
  ellipse(width/2, 140, 250, 240) ;

  fill('black');
  rect(95, 170, 220, 10) ;
  noFill() ;

  push() ;
  stroke('black') ;
  strokeWeight(8) ;
  triangle(117, 174, 146, 200, 168, 174) ;
  triangle(240, 174, 269, 200, 291, 174) ;

  pop() ;

  // eyes here
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);

  e1.display();
  e2.display();

  fill('white') ;
  text(mouseX + ", " + mouseY, 10, 270) ;

}

function Eye(tx, ty,ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {

  this.angle = atan2(my - this.y, mx - this.x);

};

  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);

if (mouseIsPressed) {
    fill('red');
} else {
    fill('black');
}


    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();

    fill('red');
    textSize(30);
    text("Delicious", 140, 290);
}


}
