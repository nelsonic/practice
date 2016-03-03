var http = require('http'); // tested at: https://github.com/dwyl/esta/blob/master/lib/http_request.js
module.exports = function request(options, callback) {
  var req = http.request(options, function(res) {
    options.method = options.method || 'GET'; // default to GET
    res.setEncoding('utf8');
    var resStr = '';
    res.on('data', function (chunk) {
      resStr += chunk;
    }).on('end', function () {
        var response = JSON.parse(resStr);
        return callback(null, response); // return response as object
    });
  })
  // if you have a better suggestion for error handling please submit an issue!
  req.on('error', function(e) {
    console.log('>> Problem with http request: ' + e.message);
    return callback(e);
  });
  req.end();
}
