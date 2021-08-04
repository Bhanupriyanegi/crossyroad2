class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.spt=createSprite(this.x,this.y,550,550);
        this.spt.shapeColor="orange";
        
        this.spt.scale=0.05;  
    }
       move(xdir,ydir) {
           this.spt.x+= xdir*grid;
           this.spt.y+= ydir*grid;

       }
   
    }
