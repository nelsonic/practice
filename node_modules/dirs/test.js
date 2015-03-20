/*!
 * dirs <https://github.com/jonschlinkert/dirs>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var isDir = require('is-directory');
var dirs = require('./');


function isFile (fp) {
  return !isDir(fp);
}
function matches (re) {
  return function(filepath) {
    return re.test(filepath);
  }
}

describe('dirs', function () {
  it('should return an array of directories and files', function (done) {
    dirs('fixtures', function (err, files) {
      files.should.be.an.array;
      assert.equal(files.length > 1, true);
      done();
    });
  });

  it('should list directories', function (done) {
    dirs('fixtures', function (err, files) {
      files = files.filter(isDir);

      files.should.be.an.array;
      assert.equal(files.length > 1, true);
      assert.equal(files.filter(matches(/\.js/)).length === 0, true);
      done();
    });
  });

  it('should list files', function (done) {
    dirs('fixtures', function (err, files) {
      files = files.filter(isFile);

      files.should.be.an.array;
      assert.equal(files.length > 1, true);
      assert.equal(files.filter(matches(/\.js/)).length > 1, true);
      done();
    });
  });
});

describe('dirs sync', function () {
  it('should return an array of directories and files', function () {
    var files = dirs('fixtures');
    files.should.be.an.array;
    assert.equal(files.length > 1, true);
  });

  it('should list directories', function () {
    var files = dirs('fixtures').filter(isDir);
    files.should.be.an.array;
    assert.equal(files.length > 1, true);
    assert.equal(files.filter(matches(/\.js/)).length === 0, true);
  });

  it('should list files', function () {
    var files = dirs('fixtures').filter(isFile);
    files.should.be.an.array;
    assert.equal(files.length > 1, true);
    assert.equal(files.filter(matches(/\.js/)).length > 1, true);
  });
});
