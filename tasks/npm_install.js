var exec = require('child_process').exec;

// module.exports = function installModules(cb) {
console.log('npm install --production');

// var npm = exec('cd tasks && npm', ['install', '--production'], { stdio: 'inherit' } );
var npm = exec('cp package.json ./tasks && cd tasks && npm install --production',
function(error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});

    // npm.on('close', function (code) {
    //     console.log('>>>',code);
    //     console.log('Totes installed');
    //     // return cb(fs.readFileSync(file), name);
    // });
    // return cb();
// };
