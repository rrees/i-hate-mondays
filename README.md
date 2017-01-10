# I hate Mondays

A library to generate arrays of dates that exclude certain days

## Usage

Has one exported function `getDates`.

### Parameters

* A date object indicating when you want the range to start from
* The number of days you want to have in the range
* An array of string day names that you want to exclude from the range (optional)
* An exclusion filter function that should return true if the date is to be excluded (optional)

## Examples

```
const dateGenerator = require('i-hate-mondays');

const dates = dateGenerator.getDates(new Date(2017, 0, 9), 2, ['Monday']);

// dates is: [ 2017-01-10T00:00:00.000Z, 2017-01-11T00:00:00.000Z ]

```

## Testing

`npm run test`
