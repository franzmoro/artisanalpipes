require('env2')('./.env');

const config = {
  nodeEnv: process.env.NODE_ENV,
  server: {
    host: process.env.HOST,
    port: process.env.PORT
    /* tls: true
    TODO https */
  },
  redis: {
    REDIS_URL: process.env.REDIS_URL,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_DB: process.env.REDIS_DB
  }
};
const server = require('./server.js')(config).server;

server.start(err => {
  if (err) {
    throw new Error('server did not start');
  } else {
    console.log('server listening on ', server.info.uri);
  }
});
