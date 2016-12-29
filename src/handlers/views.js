
'use strict';

module.exports = {
  about: (req, reply) => {
    reply.view('about/index');
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
  },
  checkout: (req, reply) => {
    reply.view('checkout/index', { stage: 0 });
  },
  shipping: (req, reply) => {
    reply.view('shipping/index', { stage: 1 });
  },
  billing: (req, reply) => {
    reply.view('billing/index', { stage: 2 });
  }
};
