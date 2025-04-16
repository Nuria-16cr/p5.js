let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio(); 
  background(255);
}

function draw() {
  background(255, 255, 0, 12);

  let vol = mic.getLevel();
  console.log('Mic Volume:', vol);

  let size = map(vol, 0, 0.2, 10, 400);

  fill(100, 0, 255);
  noStroke();
  ellipse(mouseX, mouseY, size);
}

function touchStarted() {
  getAudioContext().resume(); 
}
