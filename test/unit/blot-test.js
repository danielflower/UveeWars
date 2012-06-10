/*global TestCase, JsHamcrest, assertThat */
TestCase("BlotTest", new function () {
	"use strict";
	var matching = JsHamcrest.Matchers;

	this["test when the circles representing two blots are in the same place then they are collided"] = function () {
		var blot1 = new UVEEWAR.Blot(at(100, 100), 10);
		var blot2 = new UVEEWAR.Blot(at(100, 100), 1);
		assertThat(blot1.isCollided(blot2), matching.is(true));
	};

	this["test when the circles representing two blots overlap then they are collided"] = function () {
		var blot1 = new UVEEWAR.Blot(at(105, 100), 10);
		var blot2 = new UVEEWAR.Blot(at(100, 100), 10);
		assertThat(blot1.isCollided(blot2), matching.is(true));
	};

	this["test when the circles representing two blots do not overlap then they are not collided"] = function () {
		var blot1 = new UVEEWAR.Blot(at(120, 100), 10);
		var blot2 = new UVEEWAR.Blot(at(100, 100), 10);
		assertThat(blot1.isCollided(blot2), matching.is(false));
	};


});