class Rubber {
    constructor(x, y, radius,options) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Matter.Bodies.circle(x, y, 15, options, maxSides);
      this.radius = 15;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke('white');
      fill('blue');
      circle(0, 0, this.radius);
      pop();
    }
  };
  