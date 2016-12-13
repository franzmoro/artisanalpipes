'use strict';

const test = require('tape');
const fs = require('fs');
const path = require('path');

module.exports = o => {

  test('routes:STATIC-CONTENT (bundle.js)', t => {
    const req = {
      method: 'GET',
      url: '/bundle.js'
    };
    o.server.inject(req, res => {
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
    o.server.inject(req, res => {
      const actual = res.payload;
      const expected = fs.readFileSync(
        path.join(__dirname, '../public/css/style.css'),
        'utf-8'
      );
      t.equal(actual, expected, 'serves style.css file compiled from sass');
      t.end();
    });
  });

  [
    { title: 'INDEX', method: 'GET', path: '/'},
    { title: 'about', method: 'GET', path: '/about'},
    { title: 'contact', method: 'GET', path: '/contact'},
    { title: 'pipes', method: 'GET', path: '/pipes'},
    { title: 'checkout', method: 'GET', path: '/checkout'},
    { title: 'shipping', method: 'GET', path: '/shipping'},
    { title: 'billing', method: 'GET', path: '/billing'}
  ].map(route => {
    test(`routes:VIEWS:${route.title}`, t => {
      const req = {
        method: route.method,
        url: route.path
      };
      o.server.inject(req, res => {
        t.notEqual(res.statusCode, 404, 'route exists');
        t.end();
      });
    });
  });
};
