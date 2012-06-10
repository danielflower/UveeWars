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

    /**
     * @param {CanvasContext} context
     */
	this.draw = function (context) {
		context.strokeStyle = "#000000";
		context.fillStyle = "#FFFF00";
		context.beginPath();
		context.arc(me.location.x, me.location.y, me.size / 2, 0, Math.PI * 2, true);
		context.closePath();
		context.stroke();
		context.fill();
	};

    this.toString = function () {
        return "Blot at " + me.location;
    };

};

