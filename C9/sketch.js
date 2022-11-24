var box 
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,20,20);
box.shapeColor = "yellow";
}

function draw() 
{
  background(30);

  if (keyDown(RIGHT_ARROW))
{
  box.position.x = box.position.x +4
}

if (keyDown(LEFT_ARROW))
{
  box.position.x = box.position.x -4
}

if (keyDown(UP_ARROW))
{
  box.position.y = box.position.y -4
}
 
if (keyDown(DOWN_ARROW))
{
  box.position.y = box.position.y +4
}

drawSprites()
}




