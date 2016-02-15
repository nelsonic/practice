var fs    = require('fs');
var path  = require('path');
var spawn = require('child_process').spawn;

// module.exports = function zip(cb, name) {
    var name = require('../package.json').name;
    var file = name+'.zip', fileBuffer, zip, exists;

    try {
        exists = fs.lstatSync(file);
    } catch(e) {
        exists = false;
    }

    if (exists) {
        fs.unlinkSync(file);
        console.log('Successfully deleted the old zip.');
    }

    var dir = path.resolve(__dirname)
    zip = spawn('zip', ['-r', '-j', '-X', file, dir]);

    zip.stdout.on('data', function(data) {
        console.log('stdout: ' + data.toString());
    });

    zip.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    zip.on('close', function (code) {
        console.log('>>>',__dirname);
        console.log('Successfully Zipped.');
        // return cb(fs.readFileSync(file), name);
    });
// };
// zip -qr - tasks | pv -bep -s $(du -bs tasks | awk '{print $1}') > [tasks.zip]
