let bottomImg, topImg;
let imagesLoaded = false;
let loadError = false;

function preload() {
  bottomImg = loadImage('./data/B&W.jpg', 
    () => console.log('Bottom image loaded'),
    () => { console.error('Bottom image failed to load'); loadError = true; });
  
  topImg = loadImage('./data/Chris.JPG',
    () => console.log('Top image loaded'),
    () => { console.error('Top image failed to load'); loadError = true; });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Check if images loaded
  if (loadError) {
    background(255, 0, 0); // Red background if error
    textSize(32);
    text('Image failed to load!', 20, height/2);
    return;
  }
  
  // Resize images
  bottomImg.resize(width, height);
  topImg.resize(width, height);
  
  // Draw initial image
  image(bottomImg, 0, 0);
  imagesLoaded = true;
}

function draw() {
  if (!imagesLoaded) {
    background(220);
    textSize(20);
    text('Loading images...', 20, 40);
  }
}

function mouseDragged() {
  if (imagesLoaded) {
    copy(topImg, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
  }
}
