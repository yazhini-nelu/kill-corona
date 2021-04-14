var bow,bowimg;
var ground;
var virus,virusimg;
var arrow,arrowimg;
function preload(){
bowimg=loadImage("bow1.png")
virusimg=loadImage("virus.png")
arrowimg=loadImage("arrow.png")
}
function setup(){
bow=createSprite(40,200,50,50)
bow.addImage(bowimg)
bow.scale=0.3
virus=createSprite(750,200,50,50)
virus.addImage(virusimg)
virus.scale=0.6
virus.velocityX=-8
virus.debug=true
virus.setCollider("circle",0,0,40);
virus.debug = false
  
 

arrow=createSprite(40,200,20,20)
arrow.addImage(arrowimg)

ground=createSprite(10,390,1600,20)
}
function draw(){
  background("lightblue")
createCanvas(800,400)
if(keyDown("space")){
arrow.velocityX=20
}
if(arrow.isTouching(virus)){
  arrow.velocity=0
  virus.velocity=0
}
drawSprites();
}