
const daysInWeek = 7;
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dayValues(daysAsStrings) {
  return new Set(daysAsStrings.map((s) => daysOfTheWeek.indexOf(s)));
}

function* validDateGenerator(startDate, excludedDayValues, exclusionFilter) {

  let aDate = new Date(startDate.getTime())

  aDate.setDate(startDate.getDate() - 1);

  aDate.setHours(0);
  aDate.setMinutes(0);
  aDate.setSeconds(0);
  aDate.setMilliseconds(0);

  while(true) {
    aDate.setDate(aDate.getDate() + 1);

    if(excludedDayValues.has(aDate.getDay())) {
      continue;
    }

    if(exclusionFilter && exclusionFilter(aDate)) {
      continue;
    }

    yield new Date(aDate);
  }

}

function getDates(startDate, targetNumberOfDays, excludedDays = [], exclusionFilter) {

  const excludedDayValues = dayValues(excludedDays);

  if(excludedDayValues.size === daysInWeek) {
    // No days will match
    return [];
  }

  const generator = validDateGenerator(startDate, excludedDayValues, exclusionFilter);

  const validDates = [];

  while(validDates.length < targetNumberOfDays) {
    let nextDate = generator.next().value;
    validDates.push(nextDate);
  }

  return validDates;
}

module.exports = {
  getDates: getDates
}
