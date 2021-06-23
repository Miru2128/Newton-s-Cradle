const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObj;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var ropeObj1, ropeObj2, ropeObj3, ropeObj4, ropeObj5;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//roof
	roofObj = new roof(370,100,250,20);

	//bob
	bobObj1 = new bob(310,300,15);
	bobObj2 = new bob(340,300,15);
	bobObj3 = new bob(370,300,15);
	bobObj4 = new bob(400,300,15);
	bobObj5 = new bob(430,300,15);

	//rope
	ropeObj1 = new rope(bobObj1.body, roofObj.body, -30*2,0);
	ropeObj2 = new rope(bobObj2.body, roofObj.body, -15*2,0);
	ropeObj3 = new rope(bobObj3.body, roofObj.body, 0*2,0);
	ropeObj4 = new rope(bobObj4.body, roofObj.body, 15*2,0);
	ropeObj5 = new rope(bobObj5.body, roofObj.body, 30*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  roofObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  ropeObj1.display();
  ropeObj2.display();
  ropeObj3.display();
  ropeObj4.display();
  ropeObj5.display();

  
  drawSprites();

}


function keyPressed(){
	//applying force to the first bob when up arrow is pressed
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body, bobObj1.body.position, {x:-30, y:155})
	}
}

