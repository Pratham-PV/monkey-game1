 var PLAY=1;
var END=0;
var monkey , monkey_running,Ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)

  monkey=createSprite(50,165,20,50)
  monkey.addAnimation("monkey_running")
  monkey.scale=0.5;
  
  Ground=createSprite(200,180,400,1);
  Ground.x=Ground.width/2;
  
  FoodGroup=createGroup();
  ObstacleGroup=createGroup();
  
    monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true;
  
  score=0;
}


function draw() {
  background(180);
  text("score ="+score,500,50)
  
  if(monkey.isTouching(obstacleGroup)){
     monkey.velocityX=0;
    ground.velocityX=0;
     }
  
  if(monkey.isTouching(foodGroup)){
     score=score+2;
    
     }
  
  
   if(gameState === PLAY){
     
     
   ground.velocityX = -(4 + 3* score/100);
   
score = score + Math.round(getFrameRate()/60);
   }
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
   if(keyDown("space")&& monkey.y >= 100) {
   monkey.velocityY = -12;
  trex.velocityY = trex.velocityY + 0.8
      
   spawnObstacles();
   }
   
   
  
  
  drawSprites();
}

