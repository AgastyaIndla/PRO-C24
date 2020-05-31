class Ball {
    constructor(x,y,radius) {
      var options ={
          frictionAir: 0,
          friction: 0,
          frictionStatic: 1,
          inertia: Infinity,
          restitution: 1.0
      }

      this.body = Bodies.circle(x,y, radius, options);
      this.radius = radius;
      World.add(world,this.body);
      
    }
  
    display() {

      var r = Math.round(random(0,255));
      var g = Math.round(random(0,255));
      var b = Math.round(random(0,255));

      var pos = this.body.position;

      push();
      strokeWeight(6);
      stroke(r,g,b);
      fill(r,g,b);
      circle(pos.x,pos.y,this.radius);
      pop();
    }
  }