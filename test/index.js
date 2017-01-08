const dateGenerator = require('../lib/index.js');

const assert = require('assert');

describe('Date Generator', () => {
  it('should generate the require number of dates', function () {
    const limit = 2;
    assert.equal(dateGenerator.getDates(new Date(), limit).length, limit);
  });

  it('should skip to the next valid date if started on an excluded day', function () {
    const dates = dateGenerator.getDates(new Date(2017, 0, 9), 1, ['Monday']);
    assert.equal(dates.length, 1);
    assert.equal(dates[0].getDate(), 10);
    assert.equal(dates[0].getDay(), 2);
  });

  it('should exclude specified days from a range', function () {
    const dates = dateGenerator.getDates(new Date(2017, 0, 5), 3, ['Saturday', 'Sunday']);

    const expectedDaysOfTheWeek = [4, 5, 1];
    const dayNumericValues = dates.map((d) => d.getDay());

    assert.deepEqual(dayNumericValues, expectedDaysOfTheWeek);
  });

  it('should set the time element to be midnight', function () {
    const dates = dateGenerator.getDates(new Date(2016, 10, 1), 10);

    assert(dates[0].getDate(), 1);
    assert(dates[9].getDate(), 10);

    dates.forEach((date) => {
      assert.equal(date.getHours(), 0);
      assert.equal(date.getMinutes(), 0);
      assert.equal(date.getSeconds(), 0);
    });
  });
});
