class Box
{
  constructor(x, y, w,h, angle) 
  {
    let options = {
      'restitution':0,
      'friction':4.0,
      'density':1.0
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image= loadImage("./assests/wood2.png")
    Matter.Body.setAngle(this.body, angle);
    World.add(world, this.body);
  }

  show() {
    push();
    imageMode(CENTER);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    image(this.image,0,0, this.w, this.h);
    pop();
  }
}