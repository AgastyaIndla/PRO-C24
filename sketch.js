// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

var engine,world;
var cannonBall,ground;
var tanker,ball1,ball2,ball3,ball4,ball5;
var attachment;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
   
    engine = Engine.create();
    world = engine.world;

   

    //canonBall = new CanonBall(600,200);
    ground = new Ground();
    ball1 = new Ball(500,-50,30);
    ball2 = new Ball(860,50,30);
    ball3 = new Ball(740,0,30);
    ball4 = new Ball(620,100,30);
    ball5 = new Ball(980,-100,30);
    tanker = new Tanker();
    cannonBall = new CannonBall(200,200);
    attachment = new ShootBall(cannonBall.body,{x:140,y:310});

}

function draw() {
    // Remember to update the Matter Engine and set the background.
    background(0,100);

    Engine.update(engine);
    text(mouseX+','+mouseY,200,200);

    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    cannonBall.display();
    tanker.display();
    attachment.display();
    keyReleased();
    reload();
}

function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode === 32){
        attachment.shoot();
        Matter.Body.applyForce(cannonBall.body,cannonBall.body.position,{x:100,y:-10});
    }
    
}

function reload(){
    // Reloading the bullet
    if(keyCode === 13){
        attachment.attach(cannonBall.body);
    }
}