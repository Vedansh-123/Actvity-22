const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,bodies,object;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
var options={
isStatic:true

}

var object1options={
  restitution:0.8
}

object=Bodies.rectangle(200,380,400,20,options);
World.add(world,object);

object1=Bodies.circle(200,100,20,object1options);
World.add(world,object1);

}

function draw() {
  background(0);

  Engine.update(engine);
rectMode(CENTER);
ellipseMode(RADIUS);

rect(object.position.x,object.position.y,400,20);
ellipse(object1.position.x,object1.position.y,20,20);
  drawSprites();
}