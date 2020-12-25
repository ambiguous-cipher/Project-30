class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visiblity = 255;
    console.log(this.visiblity);
  }

  display(r, g, b){
    if(this.body.speed < 6){
      super.display();}
    else{
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      pop();
    }
  }

  score(){
    if(this.visiblity < 0 && this.visiblity >= 105){
      score++;
    }
  }

};
