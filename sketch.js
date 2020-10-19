var r1
var r2
function setup() {

  createCanvas(800,400);
  r1=createSprite(400, 200, 50, 50);
  r2=createSprite(300,20,45,45)

}

function draw() {
  background(255,255,255);  

  r2.y=mouseY
  r2.x=mouseX

  if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r2.width/2+r1.width/2&&
    r1.y-r2.y<r1.height/2+r2.height/2&&r2.y-r1.y<r2.height/2+r1.height/2){
    r1.shapeColor="blue"
    r2.shapeColor="green"

  
    }
  
    else{
      r1.shapeColor="red"
      r2.shapeColor="red"
 
    }
  
  
  
    drawSprites();
}