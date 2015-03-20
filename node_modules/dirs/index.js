/*!
 * dirs <https://github.com/jonschlinkert/dirs>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');
var isDir = require('is-directory');

var dirs = module.exports = function dirs(dir, cb) {
  if (typeof cb !== 'function') {
    return dirs.sync(dir);
  }

  if (!dir.length) {
    return cb(null, []);
  }

  fs.readdir(dir, function (err, files) {
    if (err) {
      return cb(err);
    }

    var arr = [];

    files.forEach(function (filepath) {
      filepath = [dir, filepath].join('/');
      if (isDir(filepath)) {
        arr = arr.concat(dirs(filepath));
      }
      arr.push(filepath);
    });

    return cb(null, arr);
  });
};


dirs.sync = function dirsSync(dir) {
  return fs.readdirSync(dir)
    .reduce(function (acc, filepath) {
      filepath = [dir, filepath].join('/');

      if (isDir(filepath)) {
        acc = acc.concat(dirs(filepath));
      }

      acc.push(filepath);
      return acc;
    }, []);
};
