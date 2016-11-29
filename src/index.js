const server = require('./server.js');

server.start(err => {
  if (err) {
    throw new Error('server did not start');
  } else {
    console.log('server listening on ', server.info.uri);
  }
});
