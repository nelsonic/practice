var QUnit    = require('qunitjs');        // require QUnit and all its friends
require('qunit-tap')(QUnit, console.log); // tell qunit-tap to use console.log for test output

// write a few tests
test("true is true", function() {
    equal( true, true, "message goes here");
});

QUnit.load(); // run our test suite.