const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball1,ball2,rope1,rope2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball1=Bodies.circle(200,100,20)
  World.add(world,ball1)
  ball2=Bodies.circle(200,300,20)
  World.add(world,ball2)

rope1=Matter.Constraint.create({
  pointA:{x:200,y:20},
  bodyB:ball1,
  length:150,
  stiffness:0.03


})
World.add(world,rope1)

rope2=Matter.Constraint.create({
  bodyA:ball1,
  bodyB:ball2,
  length:150,
  stiffness:0.03


})
World.add(world,rope2)


}

function draw() 
{
  background(51);
  Engine.update(engine);
ellipse(ball1.position.x,ball1.position.y,20)
ellipse(ball2.position.x,ball2.position.y,20)
stroke ("white")
strokeWeight(5)

line (rope1.pointA.x,rope1.pointA.y,ball1.position.x,ball1.position.y)
line (ball1.position.x,ball1.position.y,ball2.position.x,ball2.position.y)
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0})
  }
  
  
}


