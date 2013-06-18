/**
 * Class EnemyTank, inherited from class Tank
 */
function EnemyTank(cxt, x, y, direction, styledata) {
	//This line helps to inherit methods and fields from Tank class
	Tank.apply(this, [ cxt, x, y, direction, styledata ]);
	
	this.shoot = function() {
		if(!this.isAlive){
			return
		}
		var x;
		var y;
		switch (this.direction) {
		case this.UP:
			x = this.x + 9;
			y = this.y - 3;
			break;
		case this.DOWN:
			x = this.x + 9;
			y = this.y + 31;
			break;
		case this.RIGHT:
			x = this.x + 31;
			y = this.y + 9;
			break;
		case this.LEFT:
			x = this.x - 3;
			y = this.y + 9;
			break;

		}
		 enemybullet = new Bullet(cxt, x, y, this.direction);
		enemybullets.push(enemybullet)
	}
	
	
	this.ran = function() {
		if(!this.isAlive){
			return
		}
		var random = Math.random()*4;
		if (random >= 0 && random < 1) {
			this.direction = this.UP;
		} else if (random >= 1 && random < 2) {
			this.direction = this.DOWN;
		} else if (random >= 2 && random < 3) {
			this.direction = this.RIGHT;
		} else {
			this.direction = this.LEFT;
		}
	}
	var i=0;
	
	var j=0;
	this.move = function() {
		if(!this.isAlive){
			return
		}
		if((i==0)||(i==600)) {
			this.ran();
			i=0
		}
		i++;
		
		if((j==0)||(j==40)) {
			this.shoot();
			j=0
		}
		j++;
		switch (this.direction) {
		case this.UP:
			if((this.y-this.speed)>=0){
			this.moveUp();
			} else {
				this.ran();
			}
			break
		case this.DOWN:
			if((this.y+this.speed)<=30){
				this.moveDown();
				} else {
					this.ran();
				}			break
		case this.RIGHT:
			if((this.x+this.speed)<=470){
				this.moveRight();
				} else {
					this.ran();
				}			
			break
		case this.LEFT:
			if((this.x-this.speed)>=0){
				this.moveLeft();
				} else {
					this.ran();
				}
			break
		}
		

	}
}