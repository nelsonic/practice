var fs = require('fs');
var path = require('path');
var filepath = path.resolve(__dirname + '/counter.txt');
fs.writeFileSync(filepath, 0);
console.log(0);
