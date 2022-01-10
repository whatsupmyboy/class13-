var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var img1, img2,img3,img4,img5,img6,obstickle;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 img1= loadImage("obstacle1.png");
 img2= loadImage("obstacle2.png");
 img3= loadImage("obstacle3.png");
 img4= loadImage("obstacle4.png");
 img5= loadImage("obstacle5.png");
 img6= loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
 spawnObstickle(); 
  drawSprites();
}
function spawnObstickle (){
  if (frameCount % 40 === 0) {
    obstickle= createSprite(600,100,40,10);
    obstickle. velocityX = -21
    obstickle.lifetime= 30
    var rand = Math.round(random(1,6))
    switch(rand){

case 1: obstickle.addImage(img1)
break;
case 2: obstickle.addImage(img2)
break;
case 3: obstickle.addImage(img3)
break;
case 4: obstickle.addImage(img4)
break;
case 5: obstickle.addImage(img5)
break;
case 6: obstickle.addImage(img6)
break;
default:break
}
}
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 1;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
  
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

