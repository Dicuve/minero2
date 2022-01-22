class Obsidiana{
	constructor(x,y,width,height, options){
		var options = {
			'density':4,
			'friction': 3,
			'restitution':0.3
		  };
	
		this.x=x;
		this.y=y;
        this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
		World.add(world, this.body);

	}
	display()
	{
			var obspos=this.body.position;	
			push()
			translate(obspos.x, obspos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("purple");
			rect(0,0,this.width,this.height);
			pop()
	}

}