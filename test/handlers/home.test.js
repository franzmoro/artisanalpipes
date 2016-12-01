const test = require('tape');
const fs = require('fs');
const Path = require('path');
const server = require('../../src/server.js');

const fileUtils = require('../utils/files.js');

test('home page is served', t => {
  const req = {
    method: 'GET',
    url: '/'
  };
  server.inject(req, res => {
    t.equal(res.statusCode, 200, '200 status code');
    const actual = res.payload;
    const template = fileUtils.readFile(
      __dirname,
      '../../src/layout/layout.html'
    );
    const homeViewMock = fileUtils.readFile(
      __dirname,
      '../mock_data/views/home.html'
    );
    const expected = fileUtils.trimLastLine(
      template.replace('<<<RIOT>>>', homeViewMock)
    );
    t.equal(actual, expected, 'correct response');
    t.end();
  });
});
