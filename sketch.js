
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,300,30);

	bob1 = new Bob(280,300,60);
	bob2 = new Bob(340,300,60);
	bob3 = new Bob(400,300,60);
	bob4 = new Bob(460,300,60);
	bob5 = new Bob(520,300,60);

	rope1 = new Rope(bob1.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();

  drawSprites();
 
}



