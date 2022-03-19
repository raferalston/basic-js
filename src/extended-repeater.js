const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(s, options) {
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  if (options.addition !== undefined) {
    options.addition = options.additionRepeatTimes ?
      options.additionSeparator ? `${options.addition}${options.additionSeparator}`.repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length)
        : options.addition.repeat(options.additionRepeatTimes)
      : options.addition
  }
  if (options.repeatTimes !== undefined) {
    s = options.addition ? `${s}${options.addition}${options.separator}`.repeat(options.repeatTimes).slice(0, -options.separator.length) : `${s}${options.separator}`.repeat(options.repeatTimes).slice(0, -options.separator.length)

  }
  else {
    s = options.addition ? `${s}${options.addition}${options.separator}`.slice(0, -options.separator.length) : `${s}${options.separator}`.slice(0, -options.separator.length)
  }
  return s
}

module.exports = {
  repeater
};
