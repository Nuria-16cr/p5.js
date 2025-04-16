var song, string, analyzer, mic;
function preload(){
  song=loadSound('data/beat.mp3');
}


function setup() {
createCanvas(windowWidth, windowHeight);
getAudioContext().suspend();
mic=new p5.AudioIn();
mic.start();
analyzer=new p5.Amplitude();
background("green");
string='';
textAlign(CENTER,CENTER);
angleMode(DEGREES);
}

function draw() {
  let volume=mic.getLevel();
  let mappedVol=map(volume, 0, 1.0, 10, width);
  background(255, 255, 0, 12);
  textSize(mappedVol);
  circle(mouseX, mouseY, mappedVol);
  push();
  translate(width/2, height/2);
  rotate(mappedVol);
  text(string, 0, 0);
  pop();
  console.log(volume);

}
function mousePressed(){
if (song.isPlaying() == true){
  song.stop();
}
else{
  song.play();
  song.loop();
}
}
function keyPressed() {
  if(key =='s'){
    background("pink");
    song.play();
  }
  string+=key;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
}
