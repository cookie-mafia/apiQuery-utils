'use strict';

require('should');

const apiQueryUtils = require('./index.js');

describe('attributes', () => {
  it('version check', () => {
    apiQueryUtils.should.have.property('version');
  });
});
