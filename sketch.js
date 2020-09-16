const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var canvas,engine,world;
var box1,box2,ground;

function setup() {
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,200,50,50);//sq
  box2 = new Box(240,50,50,100);//rect
  ground = new Ground (200,390,400,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}