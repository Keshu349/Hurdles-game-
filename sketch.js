var canvas, background;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, player1

function setup(){
canvas = createCanvas(400,400);
database = firebase.database();
game = new Game();
game.getState();
game.start();
player1 = createSprite(1,200);



}

function draw(){
  if (playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
      clear();
      game.play();
  }
  if (gameState === 2){
      game.end(); 
  } 
}