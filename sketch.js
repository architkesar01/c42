

var a,b,c;
var a1,a2,a3,a5,a4,iss;

var hasDocked=false

function preload(){

iss1=loadImage("iss.png")
a2=loadImage("spacebg.jpg")
a3=loadImage("spacecraft1.png")
a4=loadImage("spacecraft2.png")
a5=loadImage("spacecraft3.png")
a6=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
 iss= createSprite(400, 200, 50, 50);


iss.addImage(iss1);
b=createSprite(100,350,20,20)

b.addImage(a3);
b.scale=0.15

}
function draw() {
  background(a2);  
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      b.x-=30
      b.addImage(a4)
    }
    if(keyDown(RIGHT_ARROW)){
      b.x+=30
      b.addImage(a5)
    }
    if(keyDown(UP_ARROW)){
      b.y-=10
     // b.addImage(spacecraft4_img)
    }
    if(keyDown(DOWN_ARROW)){
      b.addImage(a6)
    }
  }

  if(b.y<=(iss.y+80)&&b.x<=(iss.x-25)){
    hasDocked=true
    console.log(hasDocked)
    textSize(24);
    fill(255)
    text("Docking Successful",300,350)
  }
  drawSprites();
}