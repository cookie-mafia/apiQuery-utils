'use strict';

require('should');

const apiQueryUtils = require('./index.js');

describe('attributes', () => {
  it('version check', () => {
    apiQueryUtils.should.have.property('version');
  });
});

describe('utils', () => {
  describe('safeAttr', () => {
    it('should be able to safely return deeply nested value', () => {
      let sampleObject = {'first': {'second': {'data': 'find me'}}};

      apiQueryUtils
        .safeAttr(sampleObject, 'first', 'second', 'data')
        .should.equal(sampleObject.first.second.data);
    });

    it('should be able to safely return an empty object as default', () => {
      let sampleObject = {};

      JSON.stringify(apiQueryUtils
        .safeAttr(sampleObject, 'first', 'second', 'data'))
        .should.equal(JSON.stringify({}));
    });
  });
});
