var pkg = require('../package.json');
var get_npm_pacakge_version = require('./index.js');
get_npm_pacakge_version('hapi', function(err, version){
  console.log('Version on NPM:', version);
})
