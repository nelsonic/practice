var AWS = require('aws-sdk');
var S3BUCKET = 'dwyl'
var s3 = new AWS.S3();

 // s3.createBucket({Bucket: 'myBucket'}, function() {

  var params = {Bucket: S3BUCKET, Key: 'myKey', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)

          console.log(err)

      else       console.log("Successfully uploaded data to myBucket/myKey");

   });

// });
