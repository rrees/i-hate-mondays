const dateGenerator = require('../lib/index.js');

const assert = require('assert');

describe('Date Generator', () => {
  it('should generate the require number of dates', () => {
    const limit = 2;
    assert.equal(dateGenerator.getDates(new Date(), limit).length, limit);
  });
});
