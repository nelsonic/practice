var pkg = require('./package.json'); // open the full package.json file.
var version_parts = pkg.version.split('.'); // e.g: ['1', '0', '4']
var old_version_patch = parseInt(version_parts.splice(2), 10); // 1.0.4 >> 4
var new_version_patch = old_version_patch + 1; // e.g 4 + 1 = 5
var new_version = '' + version_parts.concat([new_version_patch]).join('.');
var new_pkg = Object.assign({}, pkg, {version: new_version}); // update version
require('fs').writeFileSync('./package.json', JSON.stringify(new_pkg, null, 2));
console.log('Package Version Updated From:', pkg.version, 'to:', new_version);
