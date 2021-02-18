class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }  
        
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        //push();
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        var A1= pointA.x;
        var A2= pointA.y;
        var pos1 = pointB.x + this.offsetX
        var pos2 = pointB.y + this.offsetY;
        stroke("#fff");
        line(A1, A2, pos1, pos2);
        //pop();
    }
}