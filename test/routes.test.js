const test = require('tape');
const server = require('../src/server.js');

test('routes:HOME', t => {
  const req = {
    method: 'GET',
    url: '/'
  };
  server.inject(req, res => {
    t.notEqual(res.statusCode, 404, 'home route exists');
    t.end();
  })
});
