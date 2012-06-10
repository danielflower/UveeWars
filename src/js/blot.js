if (!window.UVEEWAR) UVEEWAR = {};

/**
 * @param {UVEEWAR.Dimension} location
 * @param {Number} size
 * @constructor
 */
UVEEWAR.Blot = function (location, size) {
	var me = this;
	this.size = size;
	this.location = location;
	this.velocity = new UVEEWAR.Dimension(1, 1);

	/**
	 * @param {UVEEWAR.Blot} other
	 */
	this.isCollided = function (other) {
		var dist = me.location.distance(other.location);
		return dist < ((me.size / 2) + (other.size) / 2);
	};

};

