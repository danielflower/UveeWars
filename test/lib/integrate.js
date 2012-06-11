/*global JsHamcrest, JsMockito, fail */
JsHamcrest.Integration.JsTestDriver();
JsMockito.Integration.JsTestDriver();

/**
 * @param {Number} x
 * @param {Number} y
 * @return {UVEEWAR.Dimension}
 */
function at(x, y) {
	return new UVEEWAR.Dimension(x, y);
}
