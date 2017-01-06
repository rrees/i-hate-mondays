
function getDates(startDate, targetNumberOfDays, excludedDays = [], exclusionFilter) {
  function* validDateGenerator(startDate) {
    let aDate = startDate;
    while(true) {
      yield aDate;
      aDate.setDate(aDate.getDate() + 1);
    }

  }

  const generator = validDateGenerator(startDate);

  const validDates = [];

  while(validDates.length < targetNumberOfDays) {
    validDates.push(generator.next().value);
  }

  return validDates;
}

module.exports = {
  getDates: getDates
}
