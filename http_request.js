var http = require('https');

function request(options, callback) {
  var called = false;
  var resStr = '';
  // Set up the request
  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    var resStr = '';
    res.on('data', function (chunk) {
      // console.log(chunk);
      resStr += chunk;
    }).on('end', function () {
      // console.log(resStr);
      // var response = JSON.parse(resStr);
      // if(options.method === "DELETE" && response.found === true) {
      //   response.deleted = true;
      // } else {
      //   // do nothing ... istanbul!
      // }
      if(!called) {
        called = true;
        callback(resStr); // return response as object
      }
    })
  }) // got a better idea? submit an issue! (lets do it!)
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
  return req;
}

function options(record, method) {
  return {
    host: 'dogwood-8420631.eu-west-1.bonsai.io',
    port: 443,
    path: '/',
    method: 'GET',
    headers: {
      // 'transfer-encoding':''
    }
  };
}
// https://un:pw@dogwood-8420631.eu-west-1.bonsai.io
var opts = options();
var username = 'o';
var password = '6'
var basic = 'Basic ' +  (new Buffer(username + ':' + password, 'utf8')).toString('base64');
// var basic = 'Basic '+username+':'+password
// opts.headers.auth = basic;
opts.headers['Authorization'] = basic;
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