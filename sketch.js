const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, gameState,engine, world,dustbin,paper, sling;
function preload(){
dustbinimg=loadImage("dustbingreen.png")}
function setup() {
  createCanvas(800, 400);
 

  engine = Engine.create();
  world = engine.world;
 
  bin= createSprite (720,320,20,20)
  bin.addImage(dustbinimg)
  bin.scale= 0.45
  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 50);
   sling = new Slingshot(paper.body,{x:200 , y:100})
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
  Engine.run(engine);
}

function draw() {
  
    rectMode(CENTER);
    background(255);
    dustbin.display();
    paper.display();
     sling.display();
  drawSprites ()
}


function keyPressed(){
  if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 330,
      y: -330
    });
  }
}
function mouseDragged(){
Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

 function mouseReleased(){
   sling.fly()
 }