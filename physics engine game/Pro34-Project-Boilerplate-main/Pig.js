class Pig{

    constructor(x,y,r){

        var options={
            restitution:0.5,
            density:2,
            bounciness:0.05
        }

        this.image = loadImage("./assests/king_pig.png");
        this.r = r;

        this.body = Matter.Bodies.circle(x,y,this.r, options);
        Matter.World.add(world, this.body)
    }

    show(){
        var pos = this.body.position;
        
        push();
        imageMode (CENTER);
        image(this.image, pos.x,pos.y,60,60)
        pop ();
    }
}