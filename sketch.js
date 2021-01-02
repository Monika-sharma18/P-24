
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=new ground(width/2,570,width,20);
	dustbin1=new Dustbin(1200,555,140,10);
	dustbin2=new Dustbin(1120,510,20,100);
	dustbin3=new Dustbin(1260,510,20,100);
	
	paper=new Paper(200,500,40);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
  drawSprites();
}


function keyPressed(){
if(keyCode ===UP_ARROW){ 
	Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85})
	
}
	
}
