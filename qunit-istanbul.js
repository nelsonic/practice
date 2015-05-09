var order    = require('ordenado');
var QUnit    = require('qunit');        // require QUnit and all its friends
// QUnit.setup({ coverage: true });          //
// require('qunit-tap')(QUnit, console.log); // tell qunit-tap to use console.log for test output

var actual   = [];
var expected = [ 'one', 'two', 'three' ];

function callback(err, first, second){
  console.log(err, first, second);
}

order([
  function(callback){
    actual.push('one');
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback){
    actual.push('two');
    callback(null, 'three');
  },
  function(arg1, callback){
    // arg1 now equals 'three'
    actual.push('three');
    callback(null, 'done');
  }
], function (err, result) {
  // result now equals 'done'
  check();
  console.log(err, result);
});

var check = function(){
  // write a few tests
  QUnit.test("results appear in the order we expect them", function() {
    for(i=0; i<actual.length; i++){
      equal(actual[i],expected[i], ''+i + ' is ' + actual[i] +' | expected: '+ expected[i]);
    }
  });
  // console.log(actual);
}

// QUnit.load(); // run our test suite.
