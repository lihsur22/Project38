var walls, w1, w2, w3, w4, w5, w;
var breaks, b1, b2, b3, b4, by = 200;
var player, playC, allPlayer;
var db, gameState = 0;
var form, game;
var backImg;

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-20);

  db = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  backImg = loadImage("images/bg.png");
}

function draw(){
  if(playC == 4 && gameState !== 2)
  {
    game.update(1);
  }
  if(gameState == 1)
  {
    clear();
    game.play();
  }
  if(gameState ==2)
  {
    game.end();
  }
  if(player.waitTime > 0)
  {
    player.waitTime = player.waitTime - 1;
  }
}