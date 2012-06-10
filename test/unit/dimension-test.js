/*global TestCase, JsHamcrest, assertThat */
TestCase("DimensionTest", new function () {
	"use strict";
	var matching = JsHamcrest.Matchers;

	this["test A dimension has the size given in constructor"] = function () {
		var dimension = new UVEEWAR.Dimension(100, 200);
		assertThat(dimension.x, matching.is(100));
		assertThat(dimension.y, matching.is(200));
	};

	this["test Distance between two points is correct"] = function () {
		var d1 = new UVEEWAR.Dimension(10, 100);
		var d2 = new UVEEWAR.Dimension(30, 50);
		assertThat(d1.distance(d2), matching.closeTo(53.851, 0.001));
	};

	this["test Distance between two negatively positioned points is correct"] = function () {
		var d1 = new UVEEWAR.Dimension(-10, -100);
		var d2 = new UVEEWAR.Dimension(-30, -50);
		assertThat(d1.distance(d2), matching.closeTo(53.851, 0.001));
	};

});