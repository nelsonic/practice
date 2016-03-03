var pkg = require('../package.json');
var get_npm_pacakge_version = require('./index.js');
get_npm_pacakge_version(pkg.name, function(err, version){
  console.log(pkg.name +' Version on NPM:', version);
})
