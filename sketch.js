/***********************************************************************************
	Projec01 - Eames Personality Test
	by Cellini Luong

  	As a tribute to legendary designers, Charles and Ray Eames, I have created an Eames chair personality test.
  	This interaction will take place as an online quiz and is designed for mid-century modern lovers and chair enthusiasts.
  	Though every Eames chair shares a similar modern, yet functional quality, they undoubtedly each have their own uniqueness to them.
  	This personality quiz will ask you questions in order to determine which chair resonates the most with your personality.

***********************************************************************************/

// Global Variables

//Debug Mode
var gDebugMode = false;

//Array of images
var images = [];
var drawFunction;

// Variables for placement
var midX;
var midY;

// Color variables
var tan, blue, red, yellow, purple;

// Font variables
var fontThin;
var fontBold;

// load all images into an array
function preload() {
  
  // PNG of illustrations
  images[0] = loadImage('assets/Wire.png');
  images[1] = loadImage('assets/LCW.png');
  images[2] = loadImage('assets/Fiberglass.png');
  images[3] = loadImage('assets/Lounge.png');
  images[4] = loadImage('assets/SWire.png');
  images[5] = loadImage('assets/SLCW.png');
  images[6] = loadImage('assets/SFiberglass.png');
  images[7] = loadImage('assets/SLounge.png');

  // Loading Fonts
  fontThin = loadFont('assets/FontThin.ttf');
  fontBold = loadFont('assets/FontBold.otf');
  fontThinner = loadFont('assets/fontThinner.ttf');
}

// Setting up canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Setting colors
  tan = color(239, 233, 225);
  blue = color(23, 103, 144);
  red = color(241, 92, 77);
  yellow = color(244, 208, 70);
  purple = color(97, 27, 54);

  // Setting Variables
  midX = windowWidth/2;
  midY = windowHeight/2;

  // Text and image setup
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);
  textFont('fontThin');

  // Setting Splash as initial screen
  drawFunction = drawSplash;
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
   image(images[0], midX - 300, midY);

  // H1
   fill(0);
   textFont('FontBold');
   textSize(64);
   textAlign(LEFT);
   text("Eames Wire Chair w/ Bikini Pad", midX - 10, midY - 142, 580, 500);

  // H3
   fill(red);
   textFont('FontThin');
   textSize(30);
   textAlign(LEFT);
   text("Your personality type is a match for:", midX - 10 , midY - 174);

   // H2
   fill(0);
   textLeading(44);
   let t = "Minimal and masculine. The Eames Wire Chair w/ Bikini Pad adds an industrial touch to any open space. Its permeable nature and soft padding form a harmonic balance.";
   text(t, midX - 10, midY + 24, 580, 550);
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

// Splash Screen
drawSplash = function() {
   
   // Eames Header
   fill(0);
   textAlign(RIGHT);
   textFont('FontBold');
   textSize(180);
   text("EAMES", midX - 10, midY + 40);

   // Description
   textAlign(LEFT);
   textFont('fontThin');
   textSize(64);
   let t = "A personality test for chair enthusiast";
   text(t, midX + 30, midY - 90, 550, 300);

   // Instructions
   textSize(32);
   fill(red);
   text("Click this screen to CONTINUE", midX + 20, midY + 110);
}

// Quote Screem
drawQuote = function() {
   // Row of chair images
   image(images[4], midX - 350, midY - 140);
   image(images[5], midX - 125, midY - 140);
   image(images[6], midX + 125, midY - 140);
   image(images[7], midX + 350, midY - 140);

   // Quote
   textAlign(CENTER);
   fill(0);
   textSize(70);
   text("The details are not the details. They make the design.", midX - 500, midY, 990, 600);

   // Instruction
   textSize(32);
   fill(red);
   text("Click this screen for INSTRUCTIONS", midX, midY + 216);
}

// Instruction Screen
drawInstructions = function() {

   // Header
   textAlign(CENTER);
   fill(blue);
   textSize(70);
   text("INSTRUCTIONS", midX, midY - 100);

   // Description
   fill(0);
   textSize(32);
   textLeading(60);

   let t = "Answer questions about yourself to reveal your Eames chair type. Press the corresponding key below each answer choice to select.";
   text(t, midX - 475, midY - 40, 950, 300);

   // Instruction
   fill(red);
   text("Click this screen to START", midX, midY + 120);

}

// Associating keys typed (user's answers) to next question based on question tree
function keyTyped() {

  // Navigation - Q1
  if( drawFunction === drawQuestionOne ) {
    if(key === 'a') {
      drawFunction = drawQuestionTwo;
    }
    else if(key === 'b') {
      drawFunction = drawQuestionTwo;
    }
  }

  // Navigation - Q2
  if( drawFunction === drawQuestionTwo ) {
    if(key === 'c') {
      drawFunction = drawQuestionThreeA;
    }
    else if(key === 'd') {
      drawFunction = drawQuestionThreeB;
    }
  }

  // Navigation - Q3A
  if( drawFunction === drawQuestionThreeA ) {
    if(key === '1') {
      drawFunction = drawLounge;
    }
    else if(key === '2') {
      drawFunction = drawFiberglass;
    }
  }

  // Navigation - Q3B
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
  // Navigation - Splash, Quote, Instrutions
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
  textSize(32);
  textAlign(LEFT);
  text("x: " + mouseX + "  Y: " + mouseY, 100, height - 60);
}