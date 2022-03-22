const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(s) {
  let res = ''
  let resN = 0
  let currLetter = ''
  for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      if (i == 0) {
          currLetter = letter
          resN++
      } else {
          if (currLetter === letter) {
              resN++
          } else if (currLetter !== letter) {
              if (resN > 1) {
                res += resN + currLetter
              } else {
                res += currLetter
              }
              currLetter = letter
              resN = 1
          }
      }
  }
  if (resN > 1) {
      res += resN + currLetter
  } else {
      res += currLetter
  }
  return res
}

module.exports = {
  encodeLine
};
