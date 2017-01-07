
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dayValues(daysAsStrings) {
  return daysAsStrings.map((s) => daysOfTheWeek.indexOf(s));
}

function* validDateGenerator(startDate, excludedDays, exclusionFilter) {
  const excludedDayValues = dayValues(excludedDays);

  let aDate = startDate;

  while(true) {
    if(excludedDayValues.indexOf(aDate.getDay()) === -1) {
      yield aDate;
    }
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
