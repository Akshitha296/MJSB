var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundBody
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	pac1 = new Thing(950, 380, 200, 10);
	pac2 = new Thing(1050, 335, 10, 100);
	pac3 = new Thing(850, 335, 10, 100);

	ball = new Ahem(250, 380, 50, 50);
	World.add(world, ball);

	packageBody = Bodies.circle(width/2 , 80 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	groundBody = Bodies.rectangle(400, 380, 800, 10, {isStatic:true});
	World.add(world, groundBody);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  pac1.display();
  pac2.display();
  pac3.display();
  ball.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//Matter.Body.setStatic(ball, false);
  }
}