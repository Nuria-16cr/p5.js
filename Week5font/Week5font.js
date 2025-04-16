let font, points, sampleF;
function preload(){
font=loadFont('data/Gotham-Black.otf');
}
function setup() {
createCanvas(windowWidth, windowHeight);
background("blue");
sampleF =0.2;
points = font.textToPoints(
"Nuria", width/4-200, height/2, 400, {
sampleFactor: sampleF, 
simplifyThreshold:0
});
rectMode(CENTER);
}


function draw() {
  background("blue");
 sampleF = map(mouseX, 0, width, 0, 1);
 points = font.textToPoints(
"Nuria", width/4-200, height/2, 400, {
sampleFactor: sampleF, 
simplifyThreshold:0
});
for (let i=0; i<points.length; i++){
  fill(random(256), random(256), random(256));
  circle(points[i].x+random(5), points[i].y+random(5), 10);
  stroke("yellow");
  //line(points[i].x,points[i].y, mouseY, mouseX);
}
}
