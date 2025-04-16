function setup() {
createCanvas(windowWidth, windowHeight);
background("blue");
let myButton=createButton("PRESS THIS BUTTON" );
myButton.position(100, 100);
myButton.mousePressed(spawn);

}


function draw() {

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}
function spawn(){
 let otherbutton =createButton("new"); 
 otherbutton.position(random(width), random(height));
 otherbutton.mousePressed(spawn);

}
