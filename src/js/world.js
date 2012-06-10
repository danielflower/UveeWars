if (!window.UVEEWAR) UVEEWAR = {};

/**
 * @param {CanvasRenderingContext2D} context
 * @param {UVEEWAR.Dimension} size
 * @constructor
 */
UVEEWAR.World = function (context, size) {
	this.size = size;
	var blots = [];
	var me = this;

	this.addBlot = function (blot) {
		blots.push(blot);
	};

	this.update = function () {
		var i, j;
		var deadBlots = [];
		for (i = 0; i < blots.length; i++) {
			var blot = blots[i];
			var blotIsDead = false;
			for (j = i + 1; j < blots.length; j++) {
				var other = blots[j];
				if (blot.isCollided(other)) {
					blotIsDead = true;
					if (deadBlots.indexOf(i) == -1)
						deadBlots.push(i);
					if (deadBlots.indexOf(j) == -1)
						deadBlots.push(j);
				}
			}
			if (!blotIsDead)
				updateBlot(me, blot);
		}
		for (i = 0; i < deadBlots.length; i++) {
			blots.splice(deadBlots[i], 1);
		}
	};

	this.draw = function () {
		context.fillStyle = '#FFFFFF';
		context.fillRect(0, 0, me.size.x, me.size.y);

		for (var i = 0; i < blots.length; i++) {
			blots[i].draw(context);
		}
	};
};
