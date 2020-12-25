class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility= 225;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
 
          push();
          var angle = this.body.angle;
          fill("yellow")
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
           rect(0, 0, this.width, this.height);
          pop();
         }
         else{
          this.Visibility=this.Visibility-5;
           World.remove(world, this.body);
           
          
         }
        }

   score(){
          if(this.Visibility<0 && this.Visibility >-105){
            Score=Score+1;
          }
          }

      }

