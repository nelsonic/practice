var ansi = require('ansi-styles');
console.log(ansi.bgYellow.open + ansi.black.open + ' Hello world! ' +ansi.black.close + ansi.bgYellow.close);

var cb  = '\u001b[46m' + '\u001b[30m'; // Background Cyan Font Color Black
var gb  = '\u001b[42m' + '\u001b[30m'; // Background Green Font Color Black
var end = '\u001b[49m' + '\u001b[39m'
// console.log('' + bgGreenBlack)
// console.log(bgCyanBlack + ' Hello! ' + bgGreenBlack)
// console.log(bgGreenBlack + ' HAI! ' +end + end)

var str   = '' + cb +'\n' + cb + ' Hello!'
str = str + '' + gb +'\n' + gb + ' Everything is Awesome '
str = str + gb + '' +end
console.log(str)
