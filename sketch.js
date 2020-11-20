var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1= createSprite(10,400,50,20);
  obj2=createSprite(400,10,20,50);
  obj3=createSprite(50,20,10,400);
  obj4=createSprite(400,100,30,30);
  movingRect.velocityY = -5;
  obj4.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,obj4);

  drawSprites();
}

