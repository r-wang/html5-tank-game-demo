/**
 * Class Bomb
 * 
 * Bombing effects are achieved by displaying static bomb images in iterations
 * 
 * @param x
 *            horizontal position of the bomb
 * @param y
 *            vertical position of the bomb
 */
function Bomb(x, y) {
	this.x = x;
	this.y = y;
	this.isAlive = true;
	this.level = 3;
	this.changeLevel = function() {
		if (this.level > 0) {
			this.level--;
		} else {
			this.isAlive = false;
		}
	}
	this.render = function() {
		if (!this.isAlive) {
			return;
		}
		switch (this.level) {

		case 1:
			var img1 = new Image();
			img1.src = "bomb_1.gif";
			img1.onload = function() {
				cxt.drawImage(img1, x, y, 30, 30);
			}
		case 2:
			var img2 = new Image();
			img2.src = "bomb_2.gif";
			img2.onload = function() {
				cxt.drawImage(img2, x, y, 30, 30);
			}
		case 3:
			var img3 = new Image();
			img3.src = "bomb_3.gif";
			img3.onload = function() {
				cxt.drawImage(img3, x, y, 30, 30);

			}
		}
		this.changeLevel();

	}
}