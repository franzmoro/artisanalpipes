const test = require('tape');
const server = require('../src/server.js');

test('server starts', t => {
  server.start(err => {
    if (err) {
      t.error('should not have errored');
    } else {
      t.pass('server starts');
    }
    server.stop();
    t.end();
  });
});