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

    var dir = 'tasks/' // path.resolve(__dirname)
    zip = spawn('zip', ['-rq', '-J', '-X', file, dir], { stdio: 'inherit' });

    zip.on('close', function (code) {
        console.log('>>>',dir);
        console.log('Successfully Zipped.');
        // return cb(fs.readFileSync(file), name);
    });
// };
// zip -qr - tasks | pv -bep -s $(du -bs tasks | awk '{print $1}') > [tasks.zip]
