const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: [],
  getLength() {
    return this.value.length
  },
  addLink(v) {
      if (Object.keys(arguments).length === 0) {
          this.value.push('( )')
      } else {
          this.value.push(`( ${v} )`)
      }
      return chainMaker
  },
  removeLink(p) {
    if (!this.value[p-1] || this.value.length < p) {
        this.value = []
        throw new Error('You can\'t remove incorrect link!')
    }
    this.value.splice(p-1, 1)
    return chainMaker
  },
  reverseChain() {
      this.value.reverse()
      return chainMaker
  },
  finishChain() {
    res = this.value.join('~~')
    this.value = []
    return res
  }
};

module.exports = {
  chainMaker
};
