'use strict';

const Path = require('path');
const Hapi = require('hapi');

module.exports = config => {
  const server = new Hapi.Server();
  const redisClient = require('./redis.js')(config.redis);

  server.connection(config.server);

  server.register(
    [
      require('inert'),
      require('vision')
    ],
    err => {
      if (err) {
        throw new Error('plugin problem');
      }

      server.route(
        require('./routes.js')({
          redis: redisClient
        })
      );
      server.views({
        engines: {
          tag: require('hapi-riot')
        },
        relativeTo: __dirname,
        path: 'views',
        compileOptions: {
          compiledFileRoute: '/bundle.js',
          removeCache: config.nodeEnv === 'production',
          layoutPath: Path.join(__dirname, '/layout'),
          layout: true
        }
      });
    }
  );
  return {
    server,
    redisClient
  };
};
