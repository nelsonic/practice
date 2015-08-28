var find = require('find');
var file = find.fileSync(/hi\.js$/, './');
console.log(file);