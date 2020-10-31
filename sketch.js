
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var groundObject;
var world,boy;
var launcheringForce = 100;
function preload()
{
  boy=loadImage("boy.png")
	
}

function setup() {
	createCanvas(2000, 1100);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
  stoneObject=new Stone(235,420,30);

mango1=new Mango(1100,100,35);
mango2=new Mango(1170,700,30);
mango3=new Mango(1010,140,30);
mango4=new Mango(1000,70,35);
mango5=new Mango(1100,70,30);
mango6=new Mango(1000,230,70);
mango7=new Mango(900,230,40);
mango8=new Mango(1140,150,40);
mango9=new Mango(1100,235,40);
mango10=new Mango(1200,200,40);
mango11=new Mango(1120,50,40);
mango12=new Mango(900,160,40);
treeObject=new Tree(1050,580);
groundObject = new Ground(width/2,600,width,20);


launcherObject = new Launcher(stoneObject.body,{x:230,y:420});


Engine.run(engine);
  
}


function draw() {
  background(235);

text(25);
text("Press Space to get second Chance to Play!!",50,50);
image (boy, 200,340,200,300);





  groundObject.display();
  treeObject.display();
  stoneObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();


  launcherObject.display();
  
  detectcollision(stoneObject,mango1);
  detectcollision(stoneObject,mango2);
  detectcollision(stoneObject,mango3);
  detectcollision(stoneObject,mango4);
  detectcollision(stoneObject,mango5);
  detectcollision(stoneObject,mango6);
  detectcollision(stoneObject,mango7);
  detectcollision(stoneObject,mango8);
  detectcollision(stoneObject,mango9);
  detectcollision(stoneObject,mango10);
  detectcollision(stoneObject,mango11);
  detectcollision(stoneObject,mango12);

 drawSprites();
}

function mouseDragged(){

      Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
  if (keyCode === 32)  {
  Matter.Body.setPosotion(stoneObject.body,{x : 235, y : 420, r : 70});
  launcherObject.attach(stoneObject.body);
   }
}
function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<= lmango.r+lstone.r)
  {
   Matter.Body.setStatic(lmango.body,false);
  }

}




