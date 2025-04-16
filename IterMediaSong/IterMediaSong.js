var song, string, analyzer;
function preload(){
  song=loadSound('data/beat.mp3');
}


function setup() {
createCanvas(windowWidth, windowHeight);
getAudioContext().suspend();
analyzer=new p5.Amplitude();
background("green");
string='';
textAlign(CENTER,CENTER);
}

function draw() {
  let volume=analyzer.getLevel();
  let mappedVol=map(volume, 0, 1.0, 10, 200);
  background("green");
  textSize(mappedVol);
  text(string, width/2, height/2);
  console.log(volume);

}
function mousePressed(){
  getAudioContext().resume();
  loop();
  if(song.isPlaying()==true){
  song.stop();
  song.noloop();
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
