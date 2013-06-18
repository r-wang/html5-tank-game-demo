/**
 * Class Agent represents a generalized agent for the tank game, such as a tank
 * or a bullet.
 * 
 * @param cxt
 *            html5 canvas context with which the agent is to be rendered
 * @param x
 *            horizontal position for agent
 * @param y
 *            vertical position for agent
 * @param direction
 *            direction towards which the agent faces
 * @param colorset
 *            agent data set
 */
function Agent(cxt, x, y, direction, styledata) {
	this.cxt = cxt;
	this.x = x;
	this.y = y;
	this.speed = 4;
	this.direction = direction;
	this.styledata = styledata;

	this.UP = 0;
	this.DOWN = 1;
	this.LEFT = 2;
	this.RIGHT = 3;

	this.render = function() {
	}
}