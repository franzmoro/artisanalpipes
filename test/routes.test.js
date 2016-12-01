const test = require('tape');
const server = require('../src/server.js');
const fs = require('fs');
const path = require('path');

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

test('routes:STATIC-CONTENT (style.css)', t => {
  const req = {
    method: 'GET',
    url: '/css/style.css'
  };
  server.inject(req, res => {
    const actual = res.payload;
    const expected = fs.readFileSync(
      path.join(__dirname, '../public/css/style.css'),
      'utf-8'
    );
    t.equal(actual, expected, 'serves style.css file compiled from sass');
    t.end();
  });
});

test('routes:INDEX', t => {
  const req = {
    method: 'GET',
    url: '/'
  };
  server.inject(req, res => {
    t.notEqual(res.statusCode, 404, 'route exists');
    t.end();
  });
});

test('routes:ABOUT', t => {
  const req = {
    method: 'GET',
    url: '/about'
  };
  server.inject(req, res => {
    t.notEqual(res.statusCode, 404, 'route exists');
    t.end();
  });
});

test('routes:CONTACT', t => {
  const req = {
    method: 'GET',
    url: '/contact'
  };
  server.inject(req, res => {
    t.notEqual(res.statusCode, 404, 'route exists');
    t.end();
  });
});

test('routes:CHECKOUT', t => {
  const req = {
    method: 'GET',
    url: '/checkout'
  };
  server.inject(req, res => {
    t.notEqual(res.statusCode, 404, 'route exists');
    t.end();
  });
});

test('routes:PIPES', t => {
  const req = {
    method: 'GET',
    url: '/pipes'
  };
  server.inject(req, res => {
    t.notEqual(res.statusCode, 404, 'route exists');
    t.end();
  });
});
