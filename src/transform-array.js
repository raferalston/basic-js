const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  res = []
  curr = 0
  discardNext = false
  for (let i = 0; i < arr.length; i++) {
      if (!discardNext) {
          if (arr[i] === '--double-next') {
              res.push(arr[i+1])
          }
          else if (arr[i] === '--double-prev') {
              res.push(arr[i-1])
          }
          else if (arr[i] === '--discard-prev') {
              res.pop()
          }
          else if (arr[i] === '--discard-next') {
              discardNext = true
          }
          else {
              res.push(arr[i])
          }   
      } else if (discardNext && arr[i+1] !== '--double-prev' && arr[i+1] !== '--discard-prev'){
          discardNext = false
      }
  }
  res = res.filter(e => e)

  return res
}

module.exports = {
  transform
};
