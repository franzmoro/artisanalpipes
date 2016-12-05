'use strict';

const config = {
  nodeEnv: 'test',
  server: {
    host: 'localhost',
    port: 9000
    /* tls: true
    TODO https */
  },
  redis: {
    REDIS_HOST: 'localhost',
    REDIS_PORT: '6379',
    REDIS_DB: 10
  }
};
const o = require('../src/server.js')(config);
o.redisClient.flushdb();
// SERVER CONFIG
require('./server.test.js')(o);
// ROUTES
require('./routes.test.js')(o);
// HANDLERS
require('./handlers/views.test.js')(o);
