var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  /*reset background color to rose pink*/
  backgroundColor = color(225,199,199);
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
  /*making a new canvas size 600 x 400*/
  createCanvas(600, 400);
  background(225, 199, 199);
  /*fill rectangles with mossy green*/
  fill(92,116,91);
  noStroke();
  /*creates four equal sized, evenly spaced rectangles representing different keys*/
  rect(400, 20, 300, 30);
  rect(400, 70, 300, 30);
  rect(400, 120, 300, 30);
  rect(400, 170, 300, 30);
  text('click here,\nthen press a\n key to play', width / 10, 20);
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
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
    /*display the letter of the key*/
    textSize(30);
    text(key, 30, 20);
    /*change background color to freq as red*/
    backgroundColor = color(freq, 255, 255);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
    backgroundColor = color(255, 0, 255);
  }
}
