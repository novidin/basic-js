const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = [...n.toString()];
  const numbers = digits.map((el, i, arr) => Number(arr.join('').replace(el, '')));
  return Math.max(...numbers);
  
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

