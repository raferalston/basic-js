const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let tmp = -Infinity
  let sNum =  n.toString(10)
  for (let i = 0; i < sNum.length; i++) {
      if (i > 0 || i < sNum.length) {
          let currNum = sNum.slice(0, i) + sNum.slice(i+1)
          if (+currNum > tmp) {
              tmp = currNum
          }
      } 
  }
  return +tmp
}

module.exports = {
  deleteDigit
};
