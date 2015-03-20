var list = require('dirs');
var isDir = require('is-directory');

// var setup = require('./dirs-setup'); // creates sample directory tree

var called = 0;

// create a sample directory tree structure with branches and files
// setup(function() {

// async
list(__dirname, function (err, files) {
  if (err) console.log(err);
  called++;
  console.log(" - - - - - - - async - - - - - - - - - -> " + called)
  console.log(files)
});

// sync
var files = list(__dirname);
console.log(" - - - - - - - sync - - - - - - - - - -")
console.log(files);

// This also gets called multiple times...! :-(
var files = list(__dirname).filter(isDir);
console.log(" - - - - - - - list(__dirname).filter(isDir) - - - - - - - - - -")
console.log(files);

// })