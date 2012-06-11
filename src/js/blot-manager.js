if (!window.UVEEWAR) UVEEWAR = {};

/**
 * @interface
 */
UVEEWAR.BlotManager = function () {
    /**
     * @param {UVEEWAR.World} world
     * @param {UVEEWAR.Blot} blot
     */
    this.updateBlot = function (world, blot) {};

    /**
     * @param {UVEEWAR.World} world
     * @returns {UVEEWAR.Blot}
     */
    this.createBlot = function (world) { return null; };

};
