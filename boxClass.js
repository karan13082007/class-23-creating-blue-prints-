class boxClass {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      //Creates the physical object
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(worldV, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      angleMode(RADIANS);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
     // rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };