/**
 * Class Bullet, inherited from class Agent
 */
function Bullet(cxt, x, y, direction) {
	//This line helps to inherit methods and fields from Tank class
	Agent.apply(this, [ cxt, x, y, direction ]);
	
	this.isAlive = true;
	this.speed = 12;

	this.moveUp = function() {
		this.y -= this.speed
		this.direction = this.UP
	}
	this.moveDown = function() {
		this.y += this.speed
		this.direction = this.DOWN
	}
	this.moveLeft = function() {
		this.x -= this.speed
		this.direction = this.LEFT
	}
	this.moveRight = function() {
		this.x += this.speed
		this.direction = this.RIGHT
	}

	this.render = function() {
		if (this.isAlive) {
			cxt.fillStyle = "#FEF26E";
			cxt.fillRect(this.x, this.y, 2, 2);
		}
	}

	this.move = function() {
		if (this.x > 500 || this.y > 400 || this.x <= -2 || this.y <= -2) {
			this.isAlive = false;
			return;
		}
		switch (this.direction) {
		case this.UP:
			this.moveUp();
			break;
		case this.DOWN:
			this.moveDown();
			break;
		case this.RIGHT:
			this.moveRight();
			break;
		case this.LEFT:
			this.moveLeft();
			break;
		}
	}

}