const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverseOff = true) {
    this.reverseOff = reverseOff;
    this.ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(str, key) {
    if (!key || !str) throw new Error('Incorrect arguments!');
    const k = [...key.toUpperCase()]
    let keyIndex = 0;
    const res = [...str.toUpperCase()].map((el) => {
      if (!this.ALPHA.includes(el)) return el;
      const letter = this.ALPHA[(this.ALPHA.indexOf(el) + this.ALPHA.indexOf(k[keyIndex])) % 26];
      keyIndex++;
      if (keyIndex === key.length)  keyIndex = 0; 
      return letter
    })  
    if (!this.reverseOff) return  res.reverse().join('');
    return res.join('');
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  decrypt(str, key) {
    if (!key || !str) throw new Error('Incorrect arguments!');
    const k = [...key.toUpperCase()]
    let keyIndex = 0;
    const res = [...str.toUpperCase()].map((el) => {
      if (!this.ALPHA.includes(el)) return el;
      let letterIndex = this.ALPHA.indexOf(el) - this.ALPHA.indexOf(k[keyIndex]);
      if (letterIndex < 0) letterIndex = 26 + letterIndex;
      const letter = this.ALPHA[letterIndex];
      keyIndex++;
      if (keyIndex === key.length)  keyIndex = 0; 
      return letter
    }) 
    if (!this.reverseOff) return  res.reverse().join('');
    return res.join('');
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
}

module.exports = {
  VigenereCipheringMachine
};


