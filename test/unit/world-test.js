/*global TestCase, JsHamcrest, assertThat */
TestCase("WorldTest", new function () {
	"use strict";
	var matching = JsHamcrest.Matchers;
    var mock = JsMockito.mock;
    var when = JsMockito.when;

	this["test Blots can be added to world"] = function () {
        var world = new UVEEWAR.World(mock(Object), mock(UVEEWAR.Dimension));
        var blot1 = mock(UVEEWAR.Blot);
        var blot2 = mock(UVEEWAR.Blot);

        world.addBlot(blot1);
        world.addBlot(blot2);

        assertThat(world.getBlots(), matching.equalTo([blot1, blot2]));
    };

    this["test Calling update removes blots that are collided"] = function () {
        var world = new UVEEWAR.World(mock(Object), mock(UVEEWAR.Dimension));
        var safeBlot = mock(UVEEWAR.Blot, 'safeBlot');
        when(safeBlot).isCollided(matching.anything()).thenReturn(false);

        var collidedBlot1 = mock(UVEEWAR.Blot, 'collidedBlot1');

        var anotherSafeBlot = mock(UVEEWAR.Blot, 'anotherSafeBlot');
        when(anotherSafeBlot).isCollided(matching.anything()).thenReturn(false);

        var collidedBlot2 = mock(UVEEWAR.Blot, 'collidedBlot2');

        when(collidedBlot1).isCollided(matching.is(collidedBlot2)).thenReturn(true);
        when(collidedBlot2).isCollided(matching.is(collidedBlot1)).thenReturn(true);

        world.addBlot(safeBlot);
        world.addBlot(collidedBlot1);
        world.addBlot(anotherSafeBlot);
        world.addBlot(collidedBlot2);

        world.update();

        assertThat(world.getBlots(), matching.equalTo([safeBlot, anotherSafeBlot]));
    };

});

