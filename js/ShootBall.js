class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.attachment = Constraint.create(options);
        World.add(world, this.attachment);

    }

    attach(body){
        this.attachment.bodyA = body;
    }

    shoot(){
        this.attachment.bodyA = null;
    }

    display(){
        if(this.attachment.bodyA){
            var pointA = this.attachment.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke(255, 255, 255, 0.5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
            
    }

}