require('env2')('./.env');
const redis = require('redis');

module.exports = config => {

  let client;
  if (config.REDIS_URL) {
    client = redis.createClient(config.REDIS_URL);
    client._connectionURL = config.REDIS_URL;
  } else {
    const port = config.REDIS_PORT || 6379;
    const host = config.REDIS_HOST || 'localhost';
    const db = config.REDIS_DB || 0;
    client = redis.createClient(port, host);
    client.select(db);
    client._connectionURL = `redis://${host}:${port}/${db}`;
  }

  client.on('connect', () => {
    console.log(`connected to redis: ${client._connectionURL}`);
  });

  client.on('error', err => {
    console.log('There was an error connecting to redis://', err);
  });

  return client;
};
