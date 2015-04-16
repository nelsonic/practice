var http = require('https');

function request(options, callback) {
  var resStr = '';
  // Set up the request
  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    var resStr = '';
    res.on('data', function (chunk) {
      resStr += chunk;
    }).on('end', function () {
      if(options.headers['Content-Type'] === 'application/json') {
        var response = JSON.parse(resStr);
        if(options.method === "DELETE" && response.found === true) {
          response.deleted = true;
        } else {
          // do nothing ... istanbul!
        }
        callback(response);
      }
      else {
        callback(resStr); // return response as object
      }
    })
  }) // got a better idea? submit an issue! (lets do it!)

  return req;
}

function options(record, method) {
  var o = {
    host: '127.0.0.1',
    port: 9200,
    path: '/',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if(process.env.SEARCHBOX_SSL_URL) {
    var url = process.env.SEARCHBOX_SSL_URL;
    // e.g: "https://un:pw@dogwood-1234.eu-west-1.searchly.com"
    var unpw = url.split('://')[1].split(':');
    var un = unpw[0];
    var pw = unpw[1].split('@')[0];
    console.log(un +':'+pw);
    var auth = (new Buffer(un + ':' + pw, 'utf8')).toString('base64');
    o.headers['Authorization'] = 'Basic ' + auth;
    o.host = url.split('@')[1];
    o.port = 443;
  }
  console.log(' - - - - - - - - - - - - - -  options:')
  console.log(o);
  console.log(' - - - - - - - - - - - - - - - - - - -')
  return o;
}
process.env.SEARCHBOX_SSL_URL = 'https://un:pw@kili-eu-west-1.searchly.com'
var opts = options();
var username = 'username';
var password = 'passsword'
var basic = 'Basic ' +  (new Buffer(username + ':' + password, 'utf8')).toString('base64');
// var basic = 'Basic '+username+':'+password
// opts.headers.auth = basic;
// opts.headers['Authorization'] = basic;
console.log(opts);

request(opts, function(res){
  console.log(res);
}).end();
console.log(' - - - - - - - - - - - - - - - - - ');
// http.get("http://un:pw@dogwood-8420631.eu-west-1.bonsai.io", function(res) {
//   console.log("Got response: " + res.statusCode);
//   // console.log(res);
//   res.on("data", function(chunk) {
//     console.log("BODY: " + chunk);
//   });
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });
