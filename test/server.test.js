'use strict';
const test = require('tape');

module.exports = o => {
  test('server starts', t => {
    o.server.start(err => {
      if (err) {
        console.error(err); // eslint disable line
        t.error('should not have errored');
      } else {
        t.pass('server starts');
      }
      o.server.stop();
      t.end();
    });
  });
};
