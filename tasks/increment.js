var fs = require('fs');
var path = require('path');
var filepath = path.resolve(__dirname + '/counter.txt');
// console.log(filepath)
var file = fs.readFile(filepath, 'utf8', function(err, data){
  var counter = parseInt(data, 10) || 0;
  counter++;
  fs.writeFile(filepath, counter, function(err){
     console.log(counter);
  });
});
