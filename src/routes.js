'use strict';

const Path = require('path');
const handlers = require('./handlers/index.js');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: handlers.home
}, {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: Path.join(__dirname, '../public')
    }
  }
}];
