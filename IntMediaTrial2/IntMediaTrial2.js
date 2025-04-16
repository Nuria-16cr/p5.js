function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
noStroke();
}


function draw() {
  for (let i=0; i<50; i++){
    fill(random(255), random(255), random(255));
    circle(random(width), random(height), random(40, 200));
    triangle(random(width), random(height), random(width), random(height), random(height), random(40, 200));
}
noLoop();
}
