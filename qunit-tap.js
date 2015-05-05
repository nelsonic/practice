var QUnit    = require('qunitjs');
var qunitTap = require('qunit-tap');
qunitTap(QUnit, console.log);

test("true is true", function() {
    equal( true, true, "message goes here");
});

QUnit.load();