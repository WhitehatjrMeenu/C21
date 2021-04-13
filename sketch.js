var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box=createSprite(300,300,100,50);
  box.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(box,movingRect))
  {
    fill("Yellow");
     text("They are touching", 100,100);
     box.shapeColor= "red";
     movingRect.shapeColor = "red";
     destroy

  }
  else if(isTouching(fixedRect,movingRect))
  {
      fill("orange")
      text(" Wow, they are touching",200,300);
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";

  }

  
  drawSprites();
}

/*movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";*/
