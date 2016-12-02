'use strict';

module.exports = {
  about: (req, reply) => {
    reply.view('about/index');
  },
  checkout: (req, reply) => {
    reply.view('checkout/index');
  },
  contact: (req, reply) => {
    reply.view('contact/index');
  },
  pipes: (req, reply) => {
    reply.view('pipes/index');
  }
};
