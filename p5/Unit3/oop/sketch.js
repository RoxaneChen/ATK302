let bg;

let cars = [];

function setup() {
  bg = loadImage('assets/finding nemo.jpg');
  createCanvas(500, 500);
  noStroke();

  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }

}

function draw() {
     background(bg);

   for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].update();


  }

}


class Car {
  constructor() {
    this.pos = createVector(250, 250);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);
    this.size = random(24, 120) ;
  }

  display() {
   fill(this.r, this.g, this.b, this.a) ;
   //textSize(this.size) ;
   ellipse(this.pos.x, this.pos.y, 10, 10);
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ;
  }

}
