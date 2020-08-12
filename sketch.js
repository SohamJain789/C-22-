//nameSpacing = giving short form to long name in matter.js(tis is a physics engine)
//we need engine to create a physics engine 
//we need world to create a physical wrorld where we can add bodies 
//we need bodies to create physical object in the world
//step 1 == addmatter.js in index .html
//step 2 == nameSpacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    //step 3 create engine and the world
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    //step 4 == create body and add it to the world
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var ball_options = {
    //add restitution property to make the ball bounce 
     restitution: 1.0
    }
    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //step 5 == display the body
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    //to display the ball 
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);


}
