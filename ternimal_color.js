var ansi = require('ansi-styles');
console.log(ansi.bgYellow.open + ansi.black.open + ' Hello world! ' +ansi.black.close + ansi.bgYellow.close);

var open  = '\u001b[43m' + '\u001b[30m'
var close = '\u001b[49m' + '\u001b[39m'

console.log(open + ' HAI! ' +close)
