if (!window.UVEEWAR) UVEEWAR = {};

function Dimension(x, y) {
	var me = this;
	this.x = x;
	this.y = y;
	/**
	 * @param {Dimension} other
	 */
	this.add = function (other) {
		me.x += other.x;
		me.y += other.y;
	};

	/**
	 * @param {Dimension} other
	 * @returns {Number}
	 */
	this.distance = function (other) {
		var xLength = Math.abs(me.x - other.x);
		var yLength = Math.abs(me.y - other.y);
		return Math.sqrt(xLength * xLength + yLength * yLength);
	};
}
