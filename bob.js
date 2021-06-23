class bob{
    constructor(x, y,radius){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }

        this.radius=radius;
        
        //creating a circle
        this.body=Bodies.circle(x,y,radius,options);

        World.add(world,this.body);

    }

    
    display(){
        ellipseMode(RADIUS);

        fill("magenta");
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}