const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  r1 = {}
  r2 = {}
  for (let i = 0; i < s1.length; i++ ) {
      if (r1[s1[i]]) {
          r1[s1[i]]++
      } else {
          r1[s1[i]] = 1
      }
  }
  for (let j = 0; j < s2.length; j++) {
      if (r2[s2[j]]) {
          r2[s2[j]]++
      } else {
          r2[s2[j]] = 1
      }
  }
  result = 0
  if (s1.length >= s2.length) {
      for (let o in r1) {
          if (r1[o] <= r2[o] && r1[o] && r2[o]) {
              result += r1[o]
          } else if (r1[o] > r2[o] && r1[o] && r2[o]) {
              result += r2[o]
          }
      }
  }
  else {
      for (let o in r2) {
          if (r1[o] <= r2[o] && r1[o] && r2[o]) {
              result += r1[o]
          } else if (r1[o] > r2[o] && r1[o] && r2[o]) {
              result += r2[o]
          }
      }
  }
  return result
}

module.exports = {
  getCommonCharacterCount
};
