
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var hammer;
var stone;
var ground;
var rubber;
var iron;

// function preload()
// {
	
// }

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(350,400);
	ground = new Ground(400,695,800,10);
	stone = new Stone(500,600,100,100);
	//rubber = new Rubber(700,100,15);
	iron = new Iron(100,450,100,50);
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background('lightblue');
  Engine.update(engine);

  ground.display();
  stone.display();
  //rubber.display();
  iron.display();
  hammer.display();
  

  //drawSprites();
 
}



