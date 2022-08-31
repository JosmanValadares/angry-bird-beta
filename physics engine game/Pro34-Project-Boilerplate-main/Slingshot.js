class Slingshot{
    constructor(bodyA, pointB) {

        var options ={
            bodyA: bodyA, 
            pointB: pointB, 
            stiffness:0.1,
            length:10
        }
        this.bodyA =bodyA
        this.pointB =pointB
        this.sling= Constraint.create(options)
        // this.slingPatchImg= loadImage("./assets/sling3.png")

        World.add(world, this.sling)
    }

    break(){
        
        this.sling.bodyA =null
        
    }

    show(){
        if( this.sling.bodyA){
        strokeWeight(5)
        fill("Black")
        line(this.bodyA.position.x-10, this.bodyA.position.y, this.pointB.x -10, this.pointB.y+2)
        line(this.bodyA.position.x-10, this.bodyA.position.y, this.pointB.x +10, this.pointB.y-2)
       // image(this.slingPatchImg, this.bodyA.position.x-15,this.bodyA.position.y-15, 15,30)
        }
    }

    
  attach(body){
    this.sling.bodyA = body

  }
}