var AWS = require('aws-sdk');
var S3BUCKET = 'dwyl'
var s3 = new AWS.S3();
var fs = require('fs');
var filename = './email.js';
var file = fs.readFileSync(filename, 'utf8');


var params = {Bucket: S3BUCKET, Key: 'email.js', Body: file};

s3.putObject(params, function(err, data) {
  if (err)
    console.log(err)
  else
  	console.log("Successfully uploaded data to " + S3BUCKET + ' >> ' + filename);
});
