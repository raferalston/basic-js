const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor() {
      this.depth = 1
  }
  calculateDepth(arr) {
      let tmp = []
      let flat = false
      let that = this
      for (let i = 0; i < arr.length; i++) {
          let el = arr[i]
          if (Array.isArray(el)) {
            if (!flat) {
              that.depth++
              flat = true
            }
            tmp.push(...el)
          }
      }
      if (!flat) {
        let res = this.depth
        this.depth = 1
        return res
      } else {
          return that.calculateDepth(tmp)
      }
  }
}

module.exports = {
  DepthCalculator
};
