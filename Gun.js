class Gun{
    constructor(x,y){
    this.pos=createVector(x,y); 
    this.r=100
    this.image=loadImage("Zombie/Gun1.png");
    this.heading=0;
    };
    isTouching(){
        
    }
    display(x,y){
        this.pos.x=x;
        this.pos.y=y;
       // console.log(this.pos);
    this.heading = Math.atan2(mouseY-this.pos.y, mouseX-this.pos.x);
   //image(this.image,this.pos.x,this.pos.y,400,400);
   push();
   angleMode(RADIANS);
   translate(this.pos.x,this.pos.y);
   rotate(this.heading)
   scale(0.2);
   imageMode(CENTER);
   /*stroke(255);
   fill(0);
   triangle(-this.r,this.r,this.r,this.r,0,-this.r);*/
   image(this.image,0,0,400,400);
   pop();
    }
}