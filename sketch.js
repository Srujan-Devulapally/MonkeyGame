var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime=0
function preload(){
 
 
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");

}



function setup() {
 createCanvas(400,400)
 monkey = createSprite(80,315,20,20)
 monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
 
 ground = createSprite(400,350,900,10)
 ground.velocityX=-4
 ground.x=ground.width/2
 
 FoodGroup=new Group();
 obstacleGroup=new Group();
 
}


function draw() {
 background(220)
 if(ground.x<0){
 ground.x=ground.width/2
 }
   stroke("black")
 textSize(20)
 fill("black")
 survivalTime = survivalTime+ Math.round(getFrameRate()/60)
 text("Surivival Time:"+survivalTime,100,50)
 
 if(keyDown("space") ){
   monkey.velocityY=-16
   
 }
  
  if(FoodGroup.isTouching(monkey)){
      FoodGroup[0].destroy();
    }

 monkey.velocityY=monkey.velocityY+0.8
 monkey.collide(ground)
  if(obstacleGroup.isTouching(monkey)){
  monkey.velocity=0
  FoodGroup.velocity=0
  obstacleGroup.velocity=0
}
 Food();
Obstacles();
drawSprites() ;
}
function Food(){
 if(frameCount%80===0){
   var banana= createSprite(400,200,40,40)
   banana.y=Math.round(random(120,200))
   banana.addImage(bananaImage)
   banana.velocityX=-4
   banana.scale=0.1
   banana.lifetime=100
   
   
FoodGroup.add(banana)
 }

}
function Obstacles(){
 if(frameCount%100===0){
   var obstacle =createSprite(400,330,40,40)
   obstacle.addImage(obstacleImage)
   obstacle.velocityX=-4
   obstacle.lifetime=100
   obstacle.scale=0.1
   obstacleGroup.add(obstacle)
 }
 
}