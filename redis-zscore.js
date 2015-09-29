// var redis_config =  {
//   port: 6379,
//   host: '127.0.0.1',
//   auth: '' // no password on localhost or travis
// }
// var redis = require('redis');
// var redisClient = redis.createClient(redis_config.port, redis_config.host);
// redisClient.auth(redis_config.auth);
var redisClient = require('redis-connection')();

redisClient.set('redis', 'LOCAL');
redisClient.get('redis', function (err, reply) {
  console.log(reply.toString())
  // t.equal(reply.toString(), 'LOCAL', '✓ LOCAL Redis is ' +reply.toString());
  // t.end();
});

/**** TESTING http://redis.io/commands/ZSCORE + ZCARD ****/

var url = 'https://github.com/dwyl/learn-redis';
var now   = Date.now();
var args = ['myzset', now, url];
console.log(args);
redisClient.zadd(args, function (err, data) {
  console.log(err, data);
  redisClient.zscore('myzset', url, function(err, data) {
    console.log(" - - - - -  zscore: "+data)
    redisClient.zcard('myzset', function(err, data){
      console.log(" - - - - -  zscore: "+data)
      redisClient.end();
    });
  });
});
