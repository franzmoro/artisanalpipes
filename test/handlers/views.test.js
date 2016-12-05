const test = require('tape');
// const fileUtils = require('../utils/files.js');

module.exports = o => {
  test('home page is served', t => {
    const req = {
      method: 'GET',
      url: '/'
    };
    o.server.inject(req, res => {
      t.equal(res.statusCode, 200, '200 status code');
      o.redisClient.quit();
      // const actual = res.payload;
      // const template = fileUtils.readFile(
      //   __dirname,
      //   '../../src/layout/layout.html'
      // );
      // const homeViewMock = fileUtils.readFile(
      //   __dirname,
      //   '../mock_data/views/home.html'
      // );
      // const expected = fileUtils.trimLastLine(
      //   template.replace('<<<RIOT>>>', homeViewMock)
      // );
      // t.equal(actual, expected, 'correct response');
      t.end();
    });
  });
};
