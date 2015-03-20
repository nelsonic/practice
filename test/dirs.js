var list = require('dirs');

var setup = require('./dirs-setup');

setup(function(){
	// async
	list(__dirname, function (err, files) {
	  if (err) console.log(err);
	  console.log(" - - - - - - - async - - - - - - - - - - ")
	  console.log(files)
	});

	// sync
	var files = list(__dirname);
	console.log(files);
})