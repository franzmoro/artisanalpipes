require('env2')('./.env');
const redis = require('redis');

module.exports = config => {
  const port = config.REDIS_PORT || 6379;
  const host = config.REDIS_HOST || 'localhost';
  const db = config.REDIS_DB || 0;

  const client = redis.createClient(port, host);

  client.select(db);

  client.on('connect', () => {
    console.log(`connected to redis: ${host}:${port}`);
  });

  client.on('error', err => {
    console.log('There was an error connecting to redis://', err);
  });

  return client;
};
