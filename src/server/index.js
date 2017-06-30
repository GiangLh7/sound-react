const port = process.env.PORT;
const hapi = require('hapi');
const conf = require('./conf/settings');
const routes = require('./routes');
const debug = require('debug');

const server = new hapi.Server(conf.get('hapi:conf'));
server.connection({ port: port || 8082, routes: { cors: true } });

server.register(require('inert'), (err) => {
  if (err) {
    debug('Failed to load inert');
  }
  server.route(routes);
});

server.register(require('vision'), (err) => {
  
  if (err) {
    debug('Failed to load vision');
  }
  
  server.views({
    engines: {
      html: require('handlebars')
    },
    path: __dirname,
    isCached: conf.get('NODE_ENV') !== 'development', // Do not cache templates if on development
  });
});

server.start(() => {
  debug('Server running at:', server.info.uri);
});