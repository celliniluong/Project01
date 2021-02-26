/***********************************************************************************
	Projec01 - Eames Personality Test
	by Cellini Luong

  By using simple states, I will create a non-linear interaction taking users through a personality test to
  determine which Eames chair style matches their personality the best.

***********************************************************************************/

// Global Variables
var gDebugMode = false;
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
  fontThinner = loadFont('assets/fontThinner.ttf');
  
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('fontThin');

  // Setting colors
  tan = color(239, 233, 225);
  blue = color(23, 103, 144);
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
  drawFunction = drawInstructions;
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

// -- Drawing out the question screens

// Q1
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
   fill(blue);
   textAlign(CENTER);
   text("QUESTION ONE", midX, midY - 200);

   // Key Selection
   fill(red);
   text("Press A", midX - 240, midY + 156);
   text("Press B", midX + 240, midY + 156);

   // Question
   fill(0);
   textSize(70);
   text("I prefer to spend time with ___.", midX, midY - 90);

   // Answer Choices
   textSize(56);
   text("Myself", midX - 240, midY + 104);
   text("Others", midX + 240, midY + 104);
}

// Q2
drawQuestionTwo = function() {
  // Answer Outlines
   strokeWeight(1);
   fill(tan);
   stroke(yellow);
   rect(midX - 420, midY + 26, 360, 180);
   rect(midX + 60, midY + 26, 360, 180);

  // Question Number
   strokeWeight(0);
   textSize(32);
   fill(blue);
   textAlign(CENTER);
   text("QUESTION TWO", midX, midY - 200);

   // Key Selection
   fill(red);
   text("Press C", midX - 240, midY + 156);
   text("Press D", midX + 240, midY + 156);

   // Question
   fill(0);
   textSize(70);
   text("I have my coffee in the ___ room.", midX, midY - 90);

   // Answer Choices
   textSize(56);
   text("Dining", midX - 240, midY + 104);
   text("Living", midX + 240, midY + 104);
}

//Q3 - A
drawQuestionThreeA = function() {
  // Answer Outlines
   strokeWeight(1);
   fill(tan);
   stroke(yellow);
   rect(midX - 420, midY + 26, 360, 180);
   rect(midX + 60, midY + 26, 360, 180);

  // Question Number
   strokeWeight(0);
   textSize(32);
   fill(blue);
   textAlign(CENTER);
   text("QUESTION THREE", midX, midY - 200);

   // Key Selection
   fill(red);
   text("Press 1", midX - 240, midY + 156);
   text("Press 2", midX + 240, midY + 156);

   // Question
   fill(0);
   textSize(70);
   text("I prefer a ___ design.", midX, midY - 90);

   // Answer Choices
   textSize(56);
   text("Statement", midX - 240, midY + 104);
   text("Simple", midX + 240, midY + 104);
}

//Q3 - B
drawQuestionThreeB = function() {
  // Answer Outlines
   strokeWeight(1);
   fill(tan);
   stroke(yellow);
   rect(midX - 420, midY + 26, 360, 180);
   rect(midX + 60, midY + 26, 360, 180);

  // Question Number
   strokeWeight(0);
   textSize(32);
   fill(blue);
   textAlign(CENTER);
   text("QUESTION THREE", midX, midY - 200);

  // Key Selection
   fill(red);
   text("Press X", midX - 240, midY + 156);
   text("Press Y", midX + 240, midY + 156);

  // Question
   fill(0);
   textSize(70);
   text("My style is more ___.", midX, midY - 90);

  // Answer Choices
   textSize(56);
   text("Industrial", midX - 240, midY + 104);
   text("Elegant", midX + 240, midY + 104);
}

//-- Drawing the final results page: Lounge, Fiberglass, Wire, LCW

// Personality Type - Lounge
drawLounge = function() {
   image(images[3], midX - 312, midY);

   // H1
   fill(0);
   textFont('FontBold');
   textSize(64);
   textAlign(LEFT);

   text("Eames Lounge Chair + Ottoman", midX + 2, midY - 182, 520, 500);

  // H3
   fill(purple);
   textFont('FontThin');
   textSize(30);
   textAlign(LEFT);

   text("Your personality type is a match for:", midX + 2 , midY - 214);

   // H2
   fill(0);
   textLeading(44);

   let t = "The powerful soloist. The Eames Lounge Chair has the ability to complement any interior with its soft, yet sleek build. A truly timeless piece that proves comfort and style do not have to be mutually exclusive.";
   text(t, midX + 2, midY - 4, 580, 550);
}

// Personality Type - Fiberglass
drawFiberglass = function() {
  image(images[2], midX - 320, midY);

  // H1
   fill(0);
   textFont('FontBold');
   textSize(64);
   textAlign(LEFT);

   text("Eames Molded Fiberglass Chair", midX - 10, midY - 182, 520, 500);

  // H3
   fill(blue);
   textFont('FontThin');
   textSize(30);
   textAlign(LEFT);

   text("Your personality type is a match for:", midX - 10 , midY - 214);

   // H2
   fill(0);
   textLeading(44);

   let t = "An iconic design. The Molded Fiberglass Chair charts the Eameses’ fascination with emerging materials. This legendary design will bring sculptural integrity to any room or corner.";
   text(t, midX - 10, midY - 4, 580, 550);
}

// Personality Type - Wire
drawWire = function() {
image(images[0], midX - 320, midY);

  // H1
   fill(0);
   textFont('FontBold');
   textSize(64);
   textAlign(LEFT);

   text("Eames Wire Chair w/ Bikini Pad", midX - 10, midY - 182, 580, 500);

  // H3
   fill(red);
   textFont('FontThin');
   textSize(30);
   textAlign(LEFT);

   text("Your personality type is a match for:", midX - 10 , midY - 214);

   // H2
   fill(0);
   textLeading(44);

   let t = "Minimal and masculine. The Eames Wire Chair w/ Bikini Pad adds an industrial touch to any open space. Its permeable nature and soft padding form a harmonic balance.";
   text(t, midX - 10, midY - 4, 580, 550);
}

// Personality Type - LCW
drawLCW = function() {
image(images[1], midX - 320, midY);

  // H1
   fill(0);
   textFont('FontBold');
   textSize(64);
   textAlign(LEFT);

   text("Eames Molded Plywood LCW", midX - 10, midY - 182, 580, 500);
  
  // H3
   fill(yellow);
   textFont('FontThin');
   textSize(30);
   textAlign(LEFT);

   text("Your personality type is a match for:", midX - 10 , midY - 214);

   // H2
   fill(0);
   textLeading(44);

   let t = "Molded magnificence. Low-slung and expertly crafted, the LCW cradles you in a comfortable position. The flat planes and curvaceous nature bring an elegant simplicity to any room.";
   text(t, midX - 10, midY - 4, 540, 550);
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
    if(key === '1') {
      drawFunction = drawLounge;
    }
    else if(key === '2') {
      drawFunction = drawFiberglass;
    }
  }

  if( drawFunction === drawQuestionThreeB ) {
    if(key === 'x') {
      drawFunction = drawWire;
    }
    else if(key === 'y') {
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