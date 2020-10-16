var movingrect,fixedrect,rect2


function setup() {
createCanvas(1200,800);
  fixedrect=createSprite(200,200,50,80)
  rect2=createSprite(200,70,70,30)
  fixedrect.debug=true
  rect2.debug=true
  rect2.shapeColor="green"
  fixedrect.shapeColor="green"
  
  movingrect=createSprite(400,200,80,30)
  movingrect.debug=true
  movingrect.shapeColor="green"
}

function draw() {
  background("black");
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY  

 if(isTouching(movingrect,fixedrect))
 {
movingrect.shapeColor="blue"
fixedrect.shapeColor="blue"

 }
 else
 {
movingrect.shapeColor="green"
fixedrect.shapeColor="green"

 }
  drawSprites();
}

