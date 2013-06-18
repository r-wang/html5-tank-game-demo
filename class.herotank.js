/**
 * Class HeroTank, inherited from class Tank
 */
function HeroTank(cxt, x, y, direction, styledata) {
	//This line helps to inherit methods and fields from Tank class
	Tank.apply(this, [ cxt, x, y, direction, styledata ]);

	this.shoot = function() {
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
		herobullet = new Bullet(cxt, x, y, this.direction);
		herobullets.push(herobullet)
	}	
	

}