const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(a) {
  // throw new NotImplementedError('Not implemented');
  if (typeof a !== 'string') {
    return false
  }
  if (!+a) {
    return false
  }
  n0 = 15 / a
  r = Math.ceil(-5730 * (Math.log(1/n0) / 0.693))
  return r >= 0  ? r : false

}

module.exports = {
  dateSample
};
