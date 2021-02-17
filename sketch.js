
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
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;

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
	rubber = new Rubber(700,100);
	iron = new Iron(100,450,100,50);
	sand1 = new Sand(400,300);
	sand2 = new Sand(375,300);
	sand3 = new Sand(350,300);
	sand4 = new Sand(325,300);
	sand5 = new Sand(310,300);
	sand6 = new Sand(295,300);
	sand7 = new Sand(280,300);
	sand8 = new Sand(265,300);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background('lightblue');
  Engine.update(engine);

  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  
  console.log(rubber);
  rubber.debug = true;

  //drawSprites();
 
}



