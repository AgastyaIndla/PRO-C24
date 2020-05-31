class Tanker {
  constructor() {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(170,320,50,50,options);
     this.width = 160;
     this.height = 110;
     this.image = loadImage("assets/unnamed.png");
     World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y,this.width,this.height);
      pop();
    };
}
