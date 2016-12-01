'use strict';

const Path = require('path');
const handlers = require('./handlers/index.js');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: handlers.home
}, {
  method: 'GET',
  path: '/pipes',
  handler: handlers.home
}, {
  method: 'GET',
  path: '/about',
  handler: handlers.about
}, {
  method: 'GET',
  path: '/checkout',
  handler: handlers.checkout
}, {
  method: 'GET',
  path: '/contact',
  handler: handlers.contact
}, {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: Path.join(__dirname, '../public')
    }
  }
}];
