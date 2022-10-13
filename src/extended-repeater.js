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
function repeater(str, options) {
  repeatOptions = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  }
  Object.assign(repeatOptions, options)

  let additions = '';
  let result = '';
  for (let i = 0; i <= repeatOptions.additionRepeatTimes - 1; i++) {
    let addition = repeatOptions.addition
    if (i !== repeatOptions.additionRepeatTimes - 1) addition += repeatOptions.additionSeparator;
    additions += addition
  }

  for (let i = 0; i <= repeatOptions.repeatTimes - 1; i++) {
    result += str + additions
    if (i !== repeatOptions.repeatTimes - 1) result += repeatOptions.separator;
  }

  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
