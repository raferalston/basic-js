

 class DepthCalculator {
    constructor() {
        this.depth = 1
    }
    calculateDepth(arr) {
        let tmp = []
        let flat = false
  
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i]
            if (Array.isArray(el)) {
              if (!flat) {
                this.depth++
                flat = true
              }
              tmp.push(...el)
            }
        }
        if (!flat) {
            let res = this.depth
            console.log(res);
            this.depth = 1
            return res
        } else {
            return this.calculateDepth(tmp)
        }
    }
  }

const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]) // 2);
depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]) // 2);
// depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]) // 3);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]) // , 4);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]) //, 5);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]) // , 15);
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]) // , 25);
// depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]) //, 31);


