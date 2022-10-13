const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const arr = [...str];
  let char = arr[0];
  let counter = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === char) {
      counter++;
    } else {
      result += (counter === 1 ? '' : counter) + char;
      counter = 1;
      char = arr[i];
    }
    if (i === arr.length - 1) result += (counter === 1 ? '' : counter) + char;
  }
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};

