'use strict'
const handlers = require('./handlers/index.js');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: handlers.home
}];
