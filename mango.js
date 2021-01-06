class Mango {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            density: 1,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.rectangle(x,y,this.width,this.height)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.image = loadImage("image/mango.png")
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)

    image(this.image,500,250,50,50)
    image(this.image,550,100,50,50)
    image(this.image,700,250,50,50)
    image(this.image,420,200,50,50)
    image(this.image,600,200,50,50)


    pop();
    }
}