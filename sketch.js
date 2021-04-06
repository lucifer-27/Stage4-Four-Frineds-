var database;
var form,player, game;
var gameState = 0;
var playerCount;
var allPlayers;
var P1,P2,P3,P4;
var Paddles;
var edges;
var ball,ballimg;
function preload(){
  ballimg = loadImage("Ball_image.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
  edges=createEdgeSprites();

}

function draw() {
  background(255);  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
 
}
