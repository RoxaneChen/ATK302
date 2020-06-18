function setup() {
  createCanvas(400, 400);
  rectMode('CENTER')
}

function draw() {
 noStroke();
 background("pink");

 fill('grey')
 ellipse(200,250,200,200)
 ellipse(120,140,120,120)
 ellipse(400-120,140,120,120)

  fill('white')
 ellipse(120,140,80,80)
 ellipse(400-120,140,80,80)


  fill('black')
 ellipse(200,280,20,20)

  fill('white')
 ellipse(240,240,30,30)
 ellipse(160,240,30,30)

  fill('black')
 ellipse(250,240,15,15)
 ellipse(170,240,15,15)

  fill('black')
  rect(60,270,100,5)
  rect(70,290,100,5)
  rect(200+50,270,100,5)
  rect(200+40,290,100,5)

  fill('white')
  ellipse(200,310,10,10)

}
