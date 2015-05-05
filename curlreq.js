var curl = require('curlrequest');
var http = require('http');
var port  = process.env.PORT || 8080; // heroku define port or use 1337 1000
var ip    = require('./lanip');

// how do we pass a url from the client to the proxy server?
function parseurl(request) {
  var url = request.url;
  // console.log(url);
  var o = { // the options we are going to pass in to our http.request
    method  : request.method, // pass on request method
    headers : request.headers // pass headers through
  };
  // remove the leading forward slash from url ... explanation of one-liner:
  // stackoverflow.com/questions/2992276/replace-first-character-of-string
  o.url = url.indexOf('/') == 0 ? url.substring(1) : url;

  o.encoding = 'utf8';
  // delete request.headers.host http://git.io/vJ0oF
  delete o.headers.host;
  // delete 'accept-encoding' to avoid https://github.com/dwyl/pwb/issues/12
  delete o.headers['accept-encoding'];
  return o;
}

function handler(request,response) {
    var options = parseurl(request);
    console.log(' - - - - - - - - - - - - - - - - - - - - - - options:');
  	console.log(options);
  	console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - ');

    curl.request(options, function (err, res, meta) {
      // console.log(meta);
      // console.log(res.toString());
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(res.toString())
    });
}



http.createServer(function(request, response) {

  if(request.url.length > 1) {
    handler(request, response);
  }
  else {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(index);
  }
}).listen(port);

console.log('Now Visit: http://' + ip + ':' +port);

// curl.request({ url: 'http://google.com'}, function (err, stdout, meta) {
//     // console.log('%s %s', meta.cmd, meta.args.join(' '));
//     console.log(stdout);
// });