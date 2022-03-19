const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(a) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!a) {
    return 'Unable to determine the time of year!';
  }
  if (!(a instanceof Date) || Object.keys(a).length > 0) {
    throw new Error('Invalid date!');
}
  if (!(a instanceof Date)) {
    return 'Unable to determine the time of year!';
  }
  m = a.getMonth()
  if (m == 11 || m <= 1) {
    return 'winter'
  } else if (m <= 4) {
    return 'spring'
  } else if (m <= 7) {
    return 'summer'
  } else {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
