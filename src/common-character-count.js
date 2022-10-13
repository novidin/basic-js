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
  let count = 0;
  let string2 = s2;
  [...s1].forEach(el => {
    if (string2.indexOf(el) > -1) {
      string2 = string2.replace(el, '')
      count++
    }
  })
  return count
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};

