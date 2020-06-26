var player, player_running;
var bGImage, bG;
var groung, groundImage;
var foodGroup, bananaImage;
var obstacles, obstaclesImage,obstaclesGroup;
var gameOver;
var score = 0;

function preload() {
  bGImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
bananaImage = loadImage("Banana.png");
obstaclesImage = loadImage("stone.png");
  
}


function setup() {
  createCanvas(800, 400);
  bG = createSprite(0,0,800,400)
  bG.addImage(bGImage);
  bG.scale = 2.0;
  bG.x = bG.width/2;
  bG.velocityX = -2;
  player = createSprite(100,340,20,50);
  player.addAnimation("running",player_running);
  player.scale = 0.1;
  ground = createSprite(400,350,800,10);
  ground.velocityX = -3;
  ground.x = ground.width/2;
  ground.visible = false;
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  
  
}


function draw() {
  background(255);
  if (ground.x < 0){
  ground.x = ground.width/2;
  
  }
  if (bG.x<0){
  bG.x = bG.width/2;
  }
  spawnFood();
  spawnObstacles();
  if (foodGroup.isTouching(player)){
  player.scale = 0.2
  }
switch(score){
  case 10: player.scale = 0.12;
    break;
    case 20: player.scale = 0.14;
    break;
    case 30: player.scale = 0.16;
    break;
    case 40: player.scale = 0.18;
    break;
    default:break;
}
  if (keyDown("space")){
  player.velocityY = -10;  
  }
  player.velocityY = player.velocityY + 1;
  player.collide(ground);
  if (obstaclesGroup.isTouching(player)){
      player.scale = 0.08;
      }
  drawSprites();
stroke("white"); 
  textSize(20); 
  fill("white");
  text("Score: "+ score, 500,50);
  
}
function spawnFood(){
if (frameCount%80 === 0){
banana = createSprite(600,250,40,10);
banana.addImage(bananaImage);
banana.scale = 0.05;
  banana.velocityX = -5;
  banana.lifetime = 120;
  player.depth = banana.depth+1;
  foodGroup.add(banana);
}} 
function spawnObstacles(){
if (frameCount%150 === 0){
obstacles = createSprite(800,350,10,40);
obstacles.addImage(obstaclesImage);
  obstacles.scale = 0.1;
obstacles.velocityX = -5;
obstacles.lifetime = 120
player.depth = obstacles.depth+1;
obstaclesGroup.add(obstacles);
}
}









