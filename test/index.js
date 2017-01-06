const dateGenerator = require('../lib/index.js');

const assert = require('assert');

describe('Date Generator', () => {
  it('should generate dates', () => {
    const limit = 0;
    assert.equal(dateGenerator.getDates(new Date(), limit).length, limit);
  });
});
