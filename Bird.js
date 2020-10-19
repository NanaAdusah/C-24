class Bird {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 80, 80, options);
    this.width = 80;
    this.height = 80;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.y = mouseY;
    pos.x = mouseX;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("red");
    fill("pink");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
