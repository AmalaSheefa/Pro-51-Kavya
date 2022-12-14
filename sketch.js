var snake, realFruit1, realFruit2 , realFruit3, rottenFruit1, rottenFruit2, rottenFruit3;
var gameState= 0;

function preload(){
  realFruit1 = loadImage("assets/realFruit1.png");
  realFruit2 = loadImage("assets/realFruit2.png");
  realFruit3 = loadImage("assets/realFruit3.png");

  rottenFruit1 = loadImage("assets/badFruit1.png");
  rottenFruit2 = loadImage("assets/badFruit2.png");
  rottenFruit2 = loadImage("assets/badFruit3.png");

}

function setup() {
  createCanvas(800,400);
  snake=createSprite(400, 200, 50, 50);
  
  
  

  realFruitGroup = new Group();
  rottenFruitGroup = new Group();

}

function draw() {
  background(255,255,255);

  background("black");
  
  spawnRealFruits();
  spawnRottenFruits();
  drawSprites();
}

function spawnRealFruits()
{
if(frameCount % 75 === 0){
  realFruit=createSprite(300,100,20,20);

  realFruitGroup.add(realFruit);
 
  realFruit.scale =0.1;
  realFruit.x= Math.round(random(10,800));
  realFruit.y= Math.round(random(10,400));

  var rand = Math.round(random(1,3));
switch(rand) {
  case 1: realFruit.addImage(realFruit1);
          break;
  case 2: realFruit.addImage(realFruit2);
          break;
  case 3: realFruit.addImage(realFruit3);
          break;
  default: break;
}

 // if(snake.isTouching(realFruit)){

     
}
  
}

function spawnRottenFruits()
{
  if(frameCount % 105 === 0){
  rottenFruit=createSprite(200,50,20,20);

 rottenFruitGroup.add(rottenFruit);
  
  rottenFruit.scale = 0.2;
  rottenFruit.x = Math.round(random(5,800));
 rottenFruit.y = Math.round(random(5,400));

 var rand = Math.round(random(1,3));
switch(rand) {
 case 1: rottenFruit.addImage(rottenFruit1);
          break;
  case 2: rottenFruit.addImage(rottenFruit2);
        break;
 case 3: rottenFruit.addImage(rottenFruit3);
         break;
 default: break;
}
  }
}