var spawn = require('child_process').spawn,
    ls    = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

// ls.stdout.on('data', function (data) {
//   console.log('stdout: ' + data);
// });
//
// ls.stderr.on('data', function (data) {
//   console.log('stderr: ' + data);
// });

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
