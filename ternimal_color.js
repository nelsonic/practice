var ansi = require('ansi-styles');
console.log(ansi.bgYellow.open + ansi.black.open + ' Hello world! ' +ansi.black.close + ansi.bgYellow.close);
