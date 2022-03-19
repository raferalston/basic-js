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
    } else {
        s = options.addition ? `${s}${options.addition}${options.separator}`.slice(0, -options.separator.length) : `${s}${options.separator}`.slice(0, -options.separator.length) 
    }
    console.log(s);
    return s
}

// repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })
repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }) 
//, 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
