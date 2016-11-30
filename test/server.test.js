const test = require('tape');
const server = require('../src/server.js');

test('server starts', t => {
  server.start(err => {
    if (err) {
      console.error(err); // eslint disable line
      t.error('should not have errored');
    } else {
      t.pass('server starts');
    }
    server.stop();
    t.end();
  });
});
