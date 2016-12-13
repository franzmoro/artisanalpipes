'use strict';

const Path = require('path');
const handlers = require('./handlers/index.js');

module.exports = o => {

  return [{
    // VIEWS
    method: 'GET',
    path: '/',
    handler: handlers.views.pipes(o)
  }, {
    method: 'GET',
    path: '/about',
    handler: handlers.views.about
  }, {
    method: 'GET',
    path: '/contact',
    handler: handlers.views.contact
  }, {
    method: 'GET',
    path: '/pipes',
    handler: handlers.views.pipes(o)
  }, {
    method: 'GET',
    path: '/checkout',
    handler: handlers.views.checkout
  }, {
    method: 'GET',
    path: '/shipping',
    handler: handlers.views.shipping
  }, {
    method: 'GET',
    path: '/billing',
    handler: handlers.views.billing
  }, {
    // STATIC CONTENT
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../public')
      }
    }
  }];
};
