let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  

  let circle = new Circle(mouseX, mouseY);
  circles.push(circle);
  
  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];
    c.update();
    c.show();
 
    if (c.alpha <= 0) {
      circles.splice(i, 1);
    }
  }
}

class Circle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.size = random(20, 80);
    this.color = color(random(255), random(255), random(255));
    this.alpha = 255;
  }

  update() {
    this.alpha -= 2;
  }

  show() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
