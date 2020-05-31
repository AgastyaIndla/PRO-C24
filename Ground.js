class Ground {
  constructor() {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(600,400,1200,25,options);
    this.width = 1200;
    this.height = 25;
    World.add(world, this.body);
  };

  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("#654321");
    rect(pos.x,pos.y,this.width,this.height);
  }
}