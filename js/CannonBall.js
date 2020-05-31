class CannonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.circle(x,y,30,options);
    this.width = 10;
    this.image = loadImage("assets/canonBall.png");
    World.add(world,this.body);
  };

  display(height){
    var pos = this.body.position;
    this.height = height;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 20,20);
    pop();
  };
};
