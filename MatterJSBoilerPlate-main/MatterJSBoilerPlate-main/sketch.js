
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var lado_esquerdo
var lado_direito

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(260, 100, 20, ball_options)
	World.add(world, ball)

	ground=new Ground(800, 680, 1600, 20)

	lado_esquerdo=new Ground(1100, 600, 20, 120)
	lado_direito=new Ground(1350, 600, 20, 120)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ellipse(ball.position.x, ball.position.y, 20)
  ground.show()
  lado_direito.show()
  lado_esquerdo.show()


}

 function keyPressed() {
	if (keyCode===8) {
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85})
	}




 }

