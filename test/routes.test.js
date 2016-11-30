const test = require('tape');
const server = require('../src/server.js');
const fs = require('fs');
const path = require('path');

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

test('routes:STATIC-CONTENT (bundle.js)', t => {
  const req = {
    method: 'GET',
    url: '/bundle.js'
  };
  server.inject(req, res => {
    const actual = res.payload;
    const expected = fs.readFileSync(
      path.join(__dirname, '../public/bundle.js'),
      'utf-8'
    );
    t.equal(actual, expected, 'serves bundle js file');
    t.end();
  });
});
