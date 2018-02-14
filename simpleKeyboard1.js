var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var frequency = 150;

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  backgroundColor = color(255, 200, 25);
  createCanvas(500, 200);
  textSize(24);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  background(backgroundColor);
  textSize(frequency - 125);
  text('click to play', width / 2, height / 2);
  noStroke();
  fill(0);
  rect(240, 140, 10, 60);
  rect(220, 140, 10, 60);
  rect(260, 140, 10, 60);
  rect(280, 140, 10, 60);
  if (frequency != 100) {
    strokeWeight(3);
    stroke(0);
    fill(frequency - 100);
    ellipse(frequency+50, 130, 30, 30);
  }
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  var freq;
  if (key == 'A') {
    osc = oscA;
    freq = freqA;
  } else if (key == 'S') {
    osc = oscS;
    freq = freqS;
  } else if (key == 'D') {
    osc = oscD;
    freq = freqD;
  } else if (key == 'F') {
    osc = oscF;
    freq = freqF;
  }
  frequency = freq;
  if (osc) {
    osc.amp(0.5, 0.2);
    playing = true;
    backgroundColor = color(freq, freq-10, 150);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  var freq;
  if (key == 'A') {
    osc = oscA;
    freq = freqA;
  } else if (key == 'S') {
    osc = oscS;
    freq = freqS;
  } else if (key == 'D') {
    osc = oscD;
    freq = freqD;
  } else if (key == 'F') {
    osc = oscF;
    freq = freqF;
  }
  if (osc) {
    osc.amp(0, 0.2);
    playing = false;
    backgroundColor = color(freq, freq, 75);
  }
}
