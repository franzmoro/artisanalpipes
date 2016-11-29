'use strict'

require('env2')('./.env');
const Path = require('path');
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 4000,
  // tls: true
  // TODO https
});

server.register(
  [
    require('inert')
  ],
  err => {
    if (err) {
      throw new Error('plugin problem');
    }

    server.route(
      require('./routes.js')
    );
  }
);

module.exports = server;
