
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload() {

}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200, 350);

	box = new Box(1400, 350, 200, 20);
	boxL = new Box(1310, 310, 20, 100);
	boxR = new Box(1490, 310, 20, 100);

	ground = new Ground(800, 360, 1600, 20)

	// Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	paper.display();
	
	box.display();
	boxL.display();
	boxR.display();

	ground.display();

	Engine.update(engine);

	KeyPressed();
	

}

function KeyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:28,y:-25});

	}
	keyCode = 0

}



