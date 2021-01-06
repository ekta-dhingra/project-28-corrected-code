class Tree {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            density: 1,
            restitution: 0.04,
            friction: 1
        }

        this.body = Bodies.rectangle(x,y,this.width,this.height)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.image = loadImage("image/tree.png")
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)

   image(this.image,400,50,400,500)
    pop();
    }
}