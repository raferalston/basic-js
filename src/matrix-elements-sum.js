const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(m) {
  let res = 0
  let len = m[0].length <= 1 ? 1 : m[0].length
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < m.length; j++) {
          if (m[j][i] === 0) {
              break
          } else {
              res += m[j][i]
          }
      }
      
  } 
  return res;
}

module.exports = {
  getMatrixElementsSum
};
