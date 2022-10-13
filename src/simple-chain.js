const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(value);
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    console.log(this.chain)
    if (position < 1 || position > this.chain.length || isNaN(position)) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chain = this.chain.filter((el, i) => i !== (position - 1));
    console.log(this.chain)
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const result = this.chain;
    this.chain = [];
    return result.map((el, i, arr) => {
      if (arr.length === 1) return `( ${el} )`;
      if (i === 0) return `( ${el} )~`;
      if (i === arr.length -1) return `~( ${el} )`;
      return `~( ${el} )~`
    }).join('')
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
