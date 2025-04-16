//sketch highly inspired by https://editor.p5js.org/chuffrey/sketches/Bkk7EKNoe
var centerVec;
var vel;
var acc;

var p = [];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  reset();
  for (var i = 0; i < 20; i++) {
    p.push(new Particle());
  }
  vel = createVector();
} 

function draw() { 
  // Dynamic background color based on mouse position
  let bgColor = color(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 200, 10);
  background(bgColor);

  // Add velocity toward mouse position, with a limit
  vel.add(p5.Vector.sub(createVector(mouseX, mouseY), centerVec).limit(2));
  vel.limit(10);
  vel.mult(0.9);
  
  // Update center position and bounce off edges
  centerVec.add(vel);
  if (centerVec.x < 0) xEdge();
  if (centerVec.x > width) xEdge();
  if (centerVec.y < 0) yEdge();
  if (centerVec.y > height) yEdge();
  
  // Draw the center point with dynamic color (based on its x position)
  strokeWeight(8);
  stroke(map(centerVec.x, 0, width, 0, 255), 255, 255);
  point(centerVec.x, centerVec.y);

  // Update and display all particles with the original behavior
  for (var i = 0; i < p.length; i++) {
    p[i].update();
    p[i].show();
  }
}

function reset() {
  centerVec = createVector(mouseX, mouseY);
  vel = createVector();
}

function xEdge() {
  vel.x *= -1;
}

function yEdge() {
  vel.y *= -1;
}

function keyPressed() {
  reset();
}

// Particle class with random colors
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(0, 0);
    this.size = random(5, 15);
    this.color = color(random(255), random(255), random(255), 180);  // Random color with transparency
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
