var spawn = require('cross-spawn-async');

var process = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
