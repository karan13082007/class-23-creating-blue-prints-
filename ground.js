    class ground {
        constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        //Creates the physical object
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(worldV, this.body);
        }
        display(){
        var pos =this.body.position;
        
        rectMode(CENTER);
        fill("green");
        
        rect(pos.x, pos.y, this.width, this.height);
        
        }
    };