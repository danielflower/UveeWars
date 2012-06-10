/*global JsHamcrest, JsMockito, fail */
JsHamcrest.Integration.JsTestDriver();
JsMockito.Integration.JsTestDriver();

/**
 * A hack to make failed JSMockito verifications make the test fail.
 * @param verificationFunction A function calling verify on one or more mocks.
 */
function failOnError(verificationFunction) {
    "use strict";
    try {
        verificationFunction();
    } catch (ex) {
        fail(ex + "\n" + verificationFunction);
    }
}

/**
 * @param {Number} x
 * @param {Number} y
 * @return {UVEEWAR.Dimension}
 */
function at(x, y) {
	return new UVEEWAR.Dimension(x, y);
}
