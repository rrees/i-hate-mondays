function* validDateGenerator(startDate, excludedDays, exclusionFilter) {
  let aDate = startDate;
  while(true) {
    yield aDate;
    aDate.setDate(aDate.getDate() + 1);
  }

}

function getDates(startDate, targetNumberOfDays, excludedDays = [], exclusionFilter) {

  const generator = validDateGenerator(startDate, excludedDays, exclusionFilter);

  const validDates = [];

  while(validDates.length < targetNumberOfDays) {
    validDates.push(generator.next().value);
  }

  return validDates;
}

module.exports = {
  getDates: getDates
}
