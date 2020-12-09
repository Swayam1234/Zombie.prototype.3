class Zombie3 {
    constructor(){
      this.pos = createVector(random(width),random(height))
      this.image = loadImage("Zombie/Zombie.2.PNG");
      this.velocity=p5.Vector.random2D();
    }
  display(){
    push();
  image(this.image,this.pos.x,this.pos.y);
    pop();
  }
  ReSpawn(){
    if(this.pos.x>width + this.r){ 
        this.pos.x =-this.r;
    }else if(this.pos.x<-this.r){
     this.pos.x = width + this.r;
     } if(this.pos.y>height + this.r){
     this.pos.y =-this.r; }
     else if(this.pos.y<-this.r){
    this.pos.y = height + this.r; }
    }
  update(){
    this.pos.add(this.velocity);
  }
  }
