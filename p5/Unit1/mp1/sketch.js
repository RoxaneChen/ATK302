let e1, e2

function setup() {
  createCanvas(400, 600);
  rectMode(CENTER);
  noStroke(0);
  e1 = new Eye(209, 250, 20);
  e2 = new Eye(191, 250, 20);
}

function draw() {
  background('grey');
  fill(61, 22, 10);
  quad(150, 170, 250, 170, 300, 260, 100, 260);
  quad(100, 260, 300, 260, 250, 500, 150, 500);
  fill(116, 1, 24);
  quad(155, 175, 245, 175, 290, 260, 110, 260);
  quad(110, 260, 290, 260, 245, 495, 155, 495);
  //cloak
  fill(0);
  quad(140, 240, 260, 240, 240, 280, 160, 280);
  quad(160, 280, 240, 280, 255, 440, 145, 440);
  line(200, 170, 200, 500);

  //vampire head
  fill(30) ;
  ellipse(width/2, 250, 75, 75) ;
  fill(200);
  rect(width/2, 260, 47,47);
  stroke(1);
  line(182.5, 251, 189.75, 255);
  line(189.75, 255, 197, 251);
  line(217.5, 251, 210.25, 255);
  line(210.25, 255, 203, 251);
  //mouth
  line(182.5, 270, 217.5, 270);

  //fangs
  push();
  fill(250);
  triangle(211.75, 270, 205.75, 270, 208.75, 275 );
  triangle(188.25, 270, 191.25, 275, 194.25, 270)

  //Body
  fill(250);
  quad(176.5, 283.5, 223.5, 283.5, 219.5, 350, 180.5, 350);

  //arms
  fill(200);
  ellipse(195, 340, 15, 15);
  ellipse(205, 340, 15, 15);
  fill(0);
  quad(170, 325, 190, 332.5, 190, 347.5, 170, 340);
  quad(210, 332.5, 230, 325, 230, 340, 210, 347.5);

  //bow tie
  fill('red');
  quad(183, 285, 197, 290, 197, 295, 183, 300);
  quad(203, 290, 217, 285, 217, 300, 203, 295);
  ellipse(200, 292.5, 10, 10);

  //pants
  fill(30);
  quad(180.5, 350, 219.5, 350, 219.5, 420, 180.5, 420);
  fill(0);
  line(200,370, 200, 420);

  //feet
  fill(30);
  arc(190.25, 428, 19.5, 19.5, PI, TWO_PI);
  arc(209.75, 428, 19.5, 19.5, PI, TWO_PI);


  pop() ;

  //eyes here
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);

  e1.display();
  e2.display();

  //fill('white') ;
 // text(mouseX + ", " + mouseY, 10, 270) ;

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
  text("Delicious", 140, 530);
}

  }
