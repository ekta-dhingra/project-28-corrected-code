
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var tree;
var stone,stoneImg;
var m1,m2,m3,m4,m5;
var string;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(150,380,120,200)
	tree = new Tree(400,50,400,500)
  stone = new Stone(150,400,18)
  

  stoneImg = loadImage("image/stone.png")
	m1 = new Mango(500,250,50,50)
	m2 = new Mango(550,100,50,50)
	m3 = new Mango(700,250,50,50)
	m4 = new Mango(420,200,50,50)
  m5 = new Mango(600,200,50,50)
  
  ground = createSprite(0,550,1600,30)

	string = new String(stone.body,{x:170,y:430})

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  
  
  boy.display()
  tree.display()
  stone.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  string.display()
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
    string.fly();
}

// function keyPressed(){
// if(keyCode=== 32){

// }
// }