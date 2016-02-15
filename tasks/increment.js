var fs = require('fs');
var path = require('path');
var filepath = path.resolve(__dirname + '/counter.txt');
// console.log(filepath)
var file = fs.readFileSync(filepath, 'utf8');
var counter = parseInt(file, 10) || 0;
counter++;
fs.writeFileSync(filepath, counter);
console.log(counter);
