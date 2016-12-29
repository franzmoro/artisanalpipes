const apiKey = process.env.EASY_POST_KEY;
const easyPost = require('node-easypost')(apiKey);
const formatting = require('../_utils/format.js');
// const promisify = require('../_utils/promisify.js');

module.exports = (req, reply) => {
  const { to_address, basket } = req.query;

  const origin = {
    "name": "Artisanal Pipes",
    "street1": "Via Pietro Castelli 10",
    "city": "Messina",
    "state": "ME",
    "zip": "98122",
    "country": "IT",
    "phone": "333333333"
  };


  if (formatting.oneIsEmpty([to_address, basket])) {
    throw new Error('cannot have empty "basket" / "to" fields');
  } else {
    easyPost.Address.create(
      origin,
      // to_address,
      (err, toAddress) => {
      console.log('toAddress', toAddress);
      if (err) {
        console.log('err', err);
        reply({ message: 'there has been an error' });
      } else {
        toAddress.verify((err, response) => {
          if (err) {
            console.log('err', err);
            reply({ message: 'there has been an error' });
          } else if (response.message !== undefined && response.message !== null) {
              console.log('Address is valid but has an issue: ', response.message);
          } else {
            console.log('response', response);
          }
        });
      }
    });
  }
};
