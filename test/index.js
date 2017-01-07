const dateGenerator = require('../lib/index.js');

const assert = require('assert');

describe('Date Generator', () => {
  it('should generate the require number of dates', () => {
    const limit = 2;
    assert.equal(dateGenerator.getDates(new Date(), limit).length, limit);
  });

  it('should skip to the next valid date if started on an excluded day', function() {
    const dates = dateGenerator.getDates(new Date(2017, 0, 9), 1, ['Monday']);
    assert.equal(dates.length, 1);
    assert.equal(dates[0].getDate(), 10);
    assert.equal(dates[0].getDay(), 2);
  });
});
