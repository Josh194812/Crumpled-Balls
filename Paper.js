class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'frictionair':5.0,
          'friction':,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.x=x;
      this.y=y;
      this.r=20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0, 0, 20,20);
      pop();
    }
  };