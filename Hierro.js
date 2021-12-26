class Hierro{
    constructor(x,y,width,height)
	{
	var options = {
		
		'friction': 3,
		'restitution':0.8,
		'density':30
	  };
		
		
	  this.body = Bodies.rectangle(x,y,width,height,options);
		//Especificar que el diseño del cuerpo lleva ancho y alto
		this.width =width;
		this.height =height;
		World.add(world, this.body);
	}
	display()
	{
			var stonepos=this.body.position;	
			var angle=this.body.angle//angle	
			push()
			translate(stonepos.x, stonepos.y);
			
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");

			/*Dices que la clase va a mostrar un rectángulo
			pero no das nums. porque solo es el diseño*/
  			 rect(0,0,this.width,this.height)
			pop()
	}

}







