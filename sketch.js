var canvas;
var backgroundImage;
var bgImg;
var database, gameState;
var form, player;
var playerCount;
var game
function preload() {
 backgroundImage = loadImage("./assets/background.jpg");
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  drawSprites();
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
