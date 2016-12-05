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
  pipes: o => (req, reply) => {
    o.redis.get('items', (err, response) => {
      if (err) {
        console.error(err);
        reply('There was an error').code(500);
      } else {
        const items = JSON.parse(response);
        reply.view('pipes/index', { items });
      }
    });
  }
};
