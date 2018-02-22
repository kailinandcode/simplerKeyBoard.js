//commit made by Kailin, 12:30am 2/22/18

/*the user can play over the original jazz song "You've Got That Thing" 
from the second row of the keyboard*/
var freqA = 139;
var freqS = 147;
var freqD = 156;
var freqF = 221;
var freqG = 164;
var freqH = 174;
var freqJ = 185;
var freqK = 233;
var freqL = 311;

//add a default frequency variable that's not freqA, freqS, freqD or freqF
var frequency = 150;

var oscA, oscS, oscD, oscF, oscG, oscH, oscJ, oscK, oscL;

var playing = false;

var textKey = 'hello';

function preload() {
  song = loadSound("06 You've Got That Thing.m4a");
}


function setup() {
  //background color has been changed
  backgroundColor = color(25, 10, 5);
  song.play();
  song.setVolume(0.3);
  //creates a new 500 x 200 canvas; change the text size to accomodate
  createCanvas(400,400);
  fill(255);
  textSize(24);
  textFont('Georgia');
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
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscH = new p5.Oscillator();
  oscH.setType('triangle');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();
  
  oscJ = new p5.Oscillator();
  oscJ.setType('triangle');
  oscJ.freq(freqJ);
  oscJ.amp(0);
  oscJ.start();
  
  oscK = new p5.Oscillator();
  oscK.setType('triangle');
  oscK.freq(freqK);
  oscK.amp(0);
  oscK.start();
  
  oscL = new p5.Oscillator();
  oscL.setType('triangle');
  oscL.freq(freqL);
  oscL.amp(0);
  oscL.start();
}

function draw() {
  background(backgroundColor);
  //vary the text size by frequency
  textSize(40);
  if (textKey == 'A') {
    text('you pressed an '+ '' + textKey, width/2, height/2);
  }
  else if (textKey != 'hello') {
    text('you pressed a '+ '' + textKey, width/2, height/2);
  }
  else {
    text('click to play', width / 2, height / 2);
  }
  //creating four rectangles, that resemble the four black keys on the keyboard
  noStroke();
  for (var i = 0; i < 9; i ++){
  fill(200-i*10, i*20, 15);
  rect(0, height-i*47.6, width, 3);
  }
  /*if the frequency is not the default, then we create an ellipse whose color and location
  depend on the key's frequency*/
  if (frequency != 150) {
    strokeWeight(3);
    fill(235);
    ellipse(width-frequency*2, height+frequency, 30, 30);
  }
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  var freq;
  if (key == 'A') {
    osc = oscA;
    freq = freqA;
    textKey = key;
  } else if (key == 'S') {
    osc = oscS;
    freq = freqS;
    textKey = key;
  } else if (key == 'D') {
    osc = oscD;
    freq = freqD;
    textKey = key;
  } else if (key == 'F') {
    osc = oscF;
    freq = freqF;
    textKey = key;
  } else if (key == 'G') {
    osc = oscG;
    freq = freqG;
    textKey = key;
  } else if (key == 'H') {
    osc = oscH;
    freq = freqH;
    textKey = key;
  } else if (key == 'J') {
    osc = oscJ;
    freq = freqJ;
    textKey = key;
  } else if (key == 'K') {
    osc = oscK;
    freq = freqK;
    textKey = key;
  } else if (key == 'L') {
    osc = oscL;
    freq = freqL;
    textKey = key;
  }
  frequency = freq;
  if (osc) {
    osc.amp(1, 0.05);
    playing = true;
    //change background color when pressed to be frequency-related
    backgroundColor = color(50, 255-freq, 200);
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
  } else if (key == 'G') {
    osc = oscG;
    freq = freqG;
  } else if (key == 'H') {
    osc = oscH;
    freq = freqH;
  } else if (key == 'J') {
    osc = oscJ;
    freq = freqJ;
  } else if (key == 'K') {
    osc = oscK;
    freq = freqK;
  } else if (key == 'L') {
    osc = oscL;
    freq = freqL;
  }
  if (osc) {
    osc.amp(0.1, 0.05);
    playing = false;
  }
}
