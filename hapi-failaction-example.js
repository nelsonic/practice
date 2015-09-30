var Hapi   = require('hapi'); https://github.com/nelsonic/learn-hapi
var Inert  = require('inert');
var Joi    = require('joi');
var server = new Hapi.Server({ debug: false })

var register_fields = {
  email : Joi.string().email().required(),
  name  : Joi.string().alphanum().min(1).required()
};

function register_handler(request, reply, source, error) {
  console.log(request.payload);
  console.log(' - - - - - - - - - - - - - - - - - - - - -');
  console.log(source)
  console.log(' - - - - - - - - - - - - - - - - - - - - -');
  console.log(error)
  return reply('welcome!');
}

server.connection({ port: process.env.PORT || 8000 });
server.register(Inert, function (err) {
  if (err) { console.error('Failed to load plugin: ', err); }
  // console.log(__dirname + '/index.html');
  server.route([{
    method: 'GET',
    path: '/',
    handler: {
        file: __dirname + '/index.html'
    }
  },
  {
    method: '*',
    path: '/register',
    config: {
      validate: {
        payload : register_fields,
        failAction: 'log'
      }
    },
    handler: register_handler
  }]);
});

server.start(function() {
  console.log('Visit: http://127.0.0.1:'+server.info.port);
});
