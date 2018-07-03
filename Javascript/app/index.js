/*
// Draw some text to the screen:
drawName('Hello World!');
// Animate the text!
bounceBubbles();
*/

/*
// Color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 75];
purple = [280, 50, 60];

// Letters in the message will cycle through these colors:
letterColors = [red, orange, green, blue, purple];

message = 'Hello World!';

drawName(message, letterColors);
bounceBubbles();
*/

/*Three variables let you experiment with the animation physics: mouseResponseThreshold, friction, and rotationForce.
mouseResponseThreshold affects how close the mouse pointer needs to be to affect the dots that make up the letters. 
The larger the number, the more powerful the effect of the mouse interaction.
Experiment with changing the mouseResponseThreshold to different numbers and running your code!*/

// Define color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
letterColors = [red, orange, green, blue, purple];

// This variable controls the smallest distance at which a mouse will 
mouseResponseThreshold = 40;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.85;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.0;

message = 'Hello World!';

drawName(message, letterColors);
bounceBubbles();
