const test = require('tape');
const server = require('../../src/server.js');

test('home page is served', t => {
  const req = {
    method: 'GET',
    url: '/'
  };
  server.inject(req, res => {
    t.equal(res.statusCode, 200, '200 status code');
    t.ok(res.payload, 'home', 'correct response');
    t.end();
  });
});
