var fixedRect, movingRect;
var horizontal, vertical;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = 'green';

  movingRect = createSprite(200,200,50,10);
  movingRect.shapeColor = 'green';

}

function draw() {
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  background(255,255,255); 
 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = 'red';
  fixedRect.shapeColor = 'yellow';
 }
 else{
  movingRect.shapeColor = 'green';
  fixedRect.shapeColor = 'green';
 }
  drawSprites();
}
function isTouching(object1,object2){
  horizontal = object1.width/2+object2.width/2;
  vertical = object2.height/2+object1.height/2;
 
  if(object1.x -object2.x <= horizontal &&object2.x-object1.x<=horizontal
    && object1.y-object2.y<=vertical && object2.y-object1.y<=vertical){
    return true;  
  }
  else{
    return false;
  }
}