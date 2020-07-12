var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var paper, ground,trashBase, trashRight, trashLeft
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(320,240,25);
	ground=new Ground (400,690,800,20);
	trashBase=new Trash(600,670,100,20);
	trashLeft=new Trash(540,655,20,50);
	trashRight=new Trash(660,655,20,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  trashBase.display();
  trashLeft.display();
  trashRight.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})
	}
}


