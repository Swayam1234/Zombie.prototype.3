class Laser{
    constructor(gpos,angle){
        this.pos=createVector(gpos.x,gpos.y)
        this.velocity = p5.Vector.fromAngle(angle)
        this.velocity.mult(10);
    }
    display(){
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x,this.pos.y);
        pop();
    }
    update(){
        this.pos.add(this.velocity);
    }
    hit(zombie){
        var distance=dist(this.pos.x,this.pos.y,zombie.pos.x,zombie.pos.y);
        //console.log(distance);
        if(distance <zombie.r){
            return true;
        }else{
            return false;
        }
    }

    
}