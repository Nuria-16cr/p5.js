let capture;
function setup() {
createCanvas(windowWidth, windowHeight);
capture=createCapture(VIDEO);
capture.hide();
}


function draw() {
background(255, 120);
//image(capture, 0, 0, width, height); for full screen
image(capture, mouseX, mouseY, 360, 240);
filter(BLUR, 2);
}
