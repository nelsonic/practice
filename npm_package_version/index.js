var request = require('./http_request.js');
var assert  = require('assert');

module.exports = function (repo_name, callback) {
  var options = {
    'host': 'registry.npmjs.org',
    'path': '/' + repo_name      // e.g: /mocha
  }
  request(options, function response (err, data) {
    assert(!err);
    var version = data['dist-tags'].latest;
    return callback(err, version);
  });
}
