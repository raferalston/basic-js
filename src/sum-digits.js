const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  n = String(n)
  n = n.split('')
  s = 0
  while (n.length > 1) {
    for (let i = 0; i < n.length; i++) {
        s += +n[i]
    }
    n = String(s).split('')
    if (n.length > 1) {
      s = 0
    }
  }
  return s
}

module.exports = {
  getSumOfDigits
};
