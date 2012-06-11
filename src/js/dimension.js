if (!window.UVEEWAR) UVEEWAR = {};

/**
 * @param {Number} x
 * @param {Number} y
 * @constructor
 */
UVEEWAR.Dimension = function (x, y) {
	var me = this;
	this.x = x;
	this.y = y;
	/**
	 * @param {UVEEWAR.Dimension} other
	 */
	this.add = function (other) {
		me.x += other.x;
		me.y += other.y;
	};

	/**
	 * @param {UVEEWAR.Dimension} other
	 * @returns {Number}
	 */
	this.distance = function (other) {
		var xLength = Math.abs(me.x - other.x);
		var yLength = Math.abs(me.y - other.y);
		return Math.sqrt(xLength * xLength + yLength * yLength);
	};

    this.toString = function () {
        return '[' + me.x + ',' + me.y + ']';
    };

};
