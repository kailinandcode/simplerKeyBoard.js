
var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqG = 146.83;

//add a default frequency variable that's not freqA, freqS, freqD or freqF
var frequency = 150;

var oscA, oscS, oscD, oscF, oscG;

var playing = false;

var textKey = 'hello';

function setup() {
  //background color has been changed
  backgroundColor = color(255, 200, 25);
  //creates a new 500 x 200 canvas; change the text size to accomodate
  createCanvas(550, 200);
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
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
}

function draw() {
  background(backgroundColor);
  //vary the text size by frequency
  textSize(frequency - 100);
  if (textKey == 'A') {
    text('this is an '+ '' + textKey, width/2, height/2);
  }
  else if (textKey != 'hello') {
    text('this is a '+ '' + textKey, width/2, height/2);
  }
  else {
    text('click to play', width / 2, height / 2);
  }
  //creating four rectangles, that resemble the four black keys on the keyboard
  noStroke();
  fill(0);
  rect(240, 140, 10, 60);
  rect(220, 140, 10, 60);
  rect(260, 140, 10, 60);
  rect(280, 140, 10, 60);
  rect(300, 140, 10, 60);
  /*if the frequency is not the default, then we create an ellipse whose color and location
  depend on the key's frequency*/
  if (frequency != 150) {
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
  }
  frequency = freq;
  if (osc) {
    osc.amp(0.5, 0.2);
    playing = true;
    //change background color when pressed to be frequency-related
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
  } else if (key == 'G') {
    osc = oscG;
    freq = freqG;
  }
  if (osc) {
    osc.amp(0, 0.2);
    playing = false;
    //change background color when released to be frequency-related
    backgroundColor = color(freq, freq, 175);
  }
}
