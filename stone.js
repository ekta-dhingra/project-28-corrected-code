class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            density: 1.2,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
       
        World.add(world,this.body)
        this.image = loadImage("image/stone.png")
    }
    display(){
    //var angle = this.body.angle
    push();
     translate(this.body.position.x,this.body.position.y);
    // rotate(angle)
    imageMode(CENTER);
    image(this.image,0,0 ,this.radius*2, this.radius*2)
    pop();
    }
}