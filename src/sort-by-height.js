const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let tmp = []
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      tmp.push(arr[i])
    }
  }
  tmp.sort((a,b) => a - b)

  let currIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res.push(-1)
    } else {
      res.push(tmp[currIndex])
      currIndex++

    }
  }
  return res
}

module.exports = {
  sortByHeight
};
