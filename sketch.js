
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;

var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;
var ballDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1275, 600);

	engine = Engine.create();
	world = engine.world;

	ballDiameter = 40;

	roof1 = new roof(635,100,700,50);
	
	ball1 = new ball(635,400,100);
	ball2 = new ball(735,400,100);
	ball3 = new ball(535,400,100);
	ball4 = new ball(835,400,100);
	ball5 = new ball(435,400,100);

	chain1 = new rope(ball3.body,roof1.body,-ballDiameter*2,0);
	chain2 = new rope(ball2.body,roof1.body,ballDiameter*2,0);
	chain3 = new rope(ball1.body,roof1.body,0,0);
	chain4 = new rope(ball4.body,roof1.body,ballDiameter*4,0);
	chain5 = new rope(ball5.body,roof1.body,-ballDiameter*4,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display(); 

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY});
}


