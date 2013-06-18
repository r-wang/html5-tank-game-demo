/**
 * class Tank, inherited from class Agent
 * 
 * @param cxt
 *            html5 canvas context with which the tank is to be rendered
 * @param x
 *            horizontal position for tank
 * @param y
 *            vertical position for tank
 * @param direction
 *            direction towards which the tank faces
 * @param colorset
 *            tank data set
 */
function Tank(cxt, x, y, direction, styledata) {
	//This line helps to inherit methods and fields from Agent class
	Agent.apply(this, [ cxt, x, y, direction, styledata ]);
	
	this.colorset = this.styledata;
	this.isAlive = true;
	this.moveUp = function() {
		this.direction = this.UP

		if((this.y-this.speed)<0){
			return;
			} 
		this.y -= this.speed
	}
	this.moveDown = function() {
		this.direction = this.DOWN

		if((this.y+this.speed)>370){
			return
		}	
		this.y += this.speed
	}
	this.moveLeft = function() {
		this.direction = this.LEFT

		if((this.x-this.speed)<0){
			
			return true;				
}
		this.x -= this.speed
	}
	this.moveRight = function() {
		this.direction = this.RIGHT

		if((this.x+this.speed)>470){
			return
			} 
		this.x += this.speed
	}
	

	/**
	 * Renders the tank to html5 canvas according to each instance object's x
	 * and y positions, direction and colorset
	 */
	this.render = function() {

		if(!this.isAlive){
			return;
		}

		// consider directions
		switch (this.direction) {
		case this.UP:
		case this.DOWN:
			cxt.fillStyle = this.colorset[0];
			cxt.fillRect(this.x, this.y, 5, 30);
			cxt.fillRect(this.x + 15, this.y, 5, 30);
			cxt.fillRect(this.x + 6, this.y + 5, 8, 20);
			cxt.fillStyle = this.colorset[1];
			cxt.beginPath();
			cxt.arc(this.x + 10, this.y + 15, 4, 0, 2.0 * Math.PI, true);
			cxt.closePath();
			cxt.fill();
			cxt.lineWidth = 2;
			cxt.beginPath();
			cxt.moveTo(this.x + 10, this.y + 15);

			if (this.direction == this.DOWN) {
				cxt.lineTo(this.x + 10, this.y + 30);
			} else {
				cxt.lineTo(this.x + 10, this.y);
			}
			cxt.closePath();
			cxt.strokeStyle = this.colorset[0];
			cxt.stroke();
			break;
		case this.RIGHT:
		case this.LEFT:
			cxt.fillStyle = this.colorset[0];
			cxt.fillRect(this.x, this.y, 30, 5);
			cxt.fillRect(this.x, this.y + 15, 30, 5);
			cxt.fillRect(this.x + 5, this.y + 6, 20, 8);
			cxt.fillStyle = this.colorset[1];
			cxt.beginPath();
			cxt.arc(this.x + 15, this.y + 10, 4, 0, 2.0 * Math.PI, true);
			cxt.closePath();
			cxt.fill();
			cxt.lineWidth = 2;
			cxt.beginPath();
			cxt.moveTo(this.x + 15, this.y + 10);

			if (this.direction == this.RIGHT) {
				cxt.lineTo(this.x + 30, this.y + 10);
			} else {
				cxt.lineTo(this.x, this.y + 10);
			}
			cxt.closePath();
			cxt.strokeStyle = this.colorset[0];
			cxt.stroke();

		}


	}
	
	
	
	
	
	
	
}