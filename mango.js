class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("mango.png");

		this.mangoBody=Bodies.circle(this.x, this.y, (this.r-20)/2, options)


		World.add(world, this.mangoBody);


	}
	display()
	{
			
			var mangoPos=this.mangoBody.position;	


			


			push()
			translate(mangoPos.x, mangoPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			fill(255,0,255)
			
			//ellipse(0,0,this.r, this.r);
			pop()


	}

}