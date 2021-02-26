/***********************************************************************************
	Projec01 - Eames Personality Test
	by Cellini Luong

  By using simple states, I will create a non-linear interaction taking users through a personality test to
  determine which Eames chair style matches their personality the best.

***********************************************************************************/

// Global Variables
var gDebugMode = true;
var images = [];
var drawFunction;
var gTextOffset = 20;

var midX;
var midY;

var tan, blue, red, yellow, purple;

var fontThin;
var fontBold;


// load all images into an array
function preload() {
  images[0] = loadImage('assets/Wire.png');
  images[1] = loadImage('assets/LCW.png');
  images[2] = loadImage('assets/Fiberglass.png');
  images[3] = loadImage('assets/Lounge.png');
  images[4] = loadImage('assets/SWire.png');
  images[5] = loadImage('assets/SLCW.png');
  images[6] = loadImage('assets/SFiberglass.png');
  images[7] = loadImage('assets/SLounge.png');

  fontThin = loadFont('assets/FontThin.ttf');
  fontBold = loadFont('assets/FontBold.otf');
  
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('fontThin');

  // Setting colors
  tan = color(239, 233, 225);
  blue = color(23, 103, 44);
  red = color(241, 92, 77);
  yellow = color(244, 208, 70);
  purple = color(97, 27, 54);

  // Setting Variables
  midX = windowWidth/2;
  midY = windowHeight/2;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // Setting Splash as initial screen
  drawFunction = drawQuestionOne;
}

// Background, Debug, Calling Simple States
function draw() {
  background(tan);

  // Debug Mode
  if( gDebugMode == true ) {
    drawDebugInfo();
  }

  drawFunction();
}

//-- drawOne() will draw the image at index 0 from the array
drawQuestionOne = function() {

  // Answer Outlines
   strokeWeight(1);
   fill(tan);
   stroke(yellow);
   rect(midX - 420, midY + 26, 360, 180);
   rect(midX + 60, midY + 26, 360, 180);

  // Question Number
   strokeWeight(0);
   textSize(32);
   fill(purple);
   fill(0);
   textAlign(CENTER);
   text("QUESTION ONE", midX, midY - 200);

   // Key Selection
   text("Press A", midX - 240, midY + 160);
   text("Press B", midX + 240, midY + 160);

   // Question
   fill(0);
   textSize(70);
   text("I prefer to spend time with ___.", midX, midY - 90);

   // Answer Choices
   textSize(56);
   text("Myself", midX - 240, midY + 100);
   text("Others", midX + 240, midY + 100);


}

//-- drawTwo() will draw the image at index 1 from the array
drawQuestionTwo = function() {

   fill(240,120,0);
   text("Q2", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawQuestionThreeA = function() {
  
   fill(40,230,120);
   text("Q3a", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawQuestionThreeB = function() {

   fill(255,255,178);
   text("Q3b", width/2, height - gTextOffset);
}

//-- Drawing the final results page: Lounge, Fiberglass, Wire, LCW
drawLounge = function() {

   fill(230,50,50);
   text("Lounge", width/2, height - gTextOffset);
}

drawFiberglass = function() {

   fill(230,50,50);
   text("Fiberglass", width/2, height - gTextOffset);
}

drawWire = function() {

   fill(230,50,50);
   text("Wire", width/2, height - gTextOffset);
}

drawLCW = function() {

   fill(230,50,50);
   text("LCW", width/2, height - gTextOffset);
}
//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   fill(0);
   text("Splash", width/2, height - gTextOffset);
}

drawQuote = function() {
   fill(0);
   text("Quote", width/2, height - gTextOffset);
}

drawInstructions = function() {
  fill(0);
  text("Instructions", width/2, height - gTextOffset);
}



// Associating keys typed (user's answers) to next question based on question tree
function keyTyped() {

  if( drawFunction === drawQuestionOne ) {
    if(key === 'a') {
      drawFunction = drawQuestionTwo;
    }
    else if(key === 'b') {
      drawFunction = drawQuestionTwo;
    }
  }

  if( drawFunction === drawQuestionTwo ) {
    if(key === 'c') {
      drawFunction = drawQuestionThreeA;
    }
    else if(key === 'd') {
      drawFunction = drawQuestionThreeB;
    }
  }

  if( drawFunction === drawQuestionThreeA ) {
    if(key === 'e') {
      drawFunction = drawLounge;
    }
    else if(key === 'f') {
      drawFunction = drawFiberglass;
    }
  }

  if( drawFunction === drawQuestionThreeB ) {
    if(key === 'g') {
      drawFunction = drawWire;
    }
    else if(key === 'h') {
      drawFunction = drawLCW;
    }
  }


}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawQuote;
  }
  else if( drawFunction === drawQuote ) {
    drawFunction = drawInstructions;
  }
  else if( drawFunction === drawInstructions ) {
    drawFunction = drawQuestionOne;
  }
}

//Draw debug mode
function drawDebugInfo() {
  fill(255);
  noStroke()
  text("x: " + mouseX + "  Y: " + mouseY, 100, height - 60);
}