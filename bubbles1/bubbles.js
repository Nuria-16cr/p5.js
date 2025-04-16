let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    bubbles.push(new Bubble());
  }
  noStroke();
}

function draw() {
  background(30, 30, 50, 25); 

  for (let b of bubbles) {
    b.update();
    b.show();
  }
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(5, 20);
    this.speed = random(0.5, 2);
    this.col = color(random(100,255), random(100,255), 255, 150);
  }

  update() {
    this.y -= this.speed;

    // Reset when off-screen
    if (this.y < -this.r) {
      this.y = height + this.r;
      this.x = random(width);
    }


    let d = dist(this.x, this.y, mouseX, mouseY);
    

    if (d < 80) {
      let force = map(d, 0, 80, 2, 0);
      this.x += (this.x - mouseX) * force * 0.1;
      this.y += (this.y - mouseY) * force * 0.1;
    }
  }

  show() {
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
}
