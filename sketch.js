var box;
function setup() {
  createCanvas(1600,1600);
box=createSprite(400, 400, 60, 60)
console.log(box)
}

function draw() 
{
  background("orange");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
drawSprites()

}




