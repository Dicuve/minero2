class Iron{
	constructor(x,y,width,height, options){
		var options = {
			'density':3,
			'friction': 1.5,
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
			var ironpos=this.body.position;	
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0,0,this.width,this.height);
			pop()
	}

}