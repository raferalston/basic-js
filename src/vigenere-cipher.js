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
  constructor(r=true) {
      this.r = r
      this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
      this.cypher = []
      for (let i = 0; i < this.alphabet.length; i++) {
          this.cypher.push(this.alphabet)
          this.alphabet = this.alphabet.slice(1) + this.alphabet[0]
      }
      this.fText = ''
  }

  encrypt(word, key) {
      // https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher
      // work on algebraic solution
      if (!word || !key) {
        throw new Error('Incorrect arguments!')
      }
      word = word.toLowerCase()
      key = key.toLowerCase()
      this.fText = ''
      for (let i = 0; i < word.length; i++) {
          for (let j = 0; j < this.alphabet.length; j++) {
              if (word[i] === this.alphabet[j]) {
                  this.fText += word[i].toLowerCase()
                  break
              }
          }
      }
      let res = ''
      if (this.fText.length > key.length) {
          key = key.repeat(Math.ceil(this.fText.length / key.length))
          key = key.slice(0, -(key.length - this.fText.length))
      }
      
      let fTextIndex = 0
      for (let i = 0; i < word.length; i++) {
          let letter = word[i]
          let flag = false
          for (let j = 0; j < this.alphabet.length; j++) {
              if (letter === this.alphabet[j]) {
                  flag = true
                  break
              }
          }
          if (flag) {
              let x = this.alphabet.indexOf(this.fText[fTextIndex])
              let y = this.alphabet.indexOf(key[fTextIndex])
              res += this.cypher[x][y]
              fTextIndex++
          } else {
              res += letter
          }
      }
      if (this.r) {
          return res.toUpperCase()
      } else {
          return res.split('').reverse().join('').toUpperCase()
      }
  }    

  decrypt(word, key) {
    if (!word || !key) {
      throw new Error('Incorrect arguments!')
    }
      word = word.toLowerCase()
      key = key.toLowerCase()
      this.fText = ''
      for (let i = 0; i < word.length; i++) {
          for (let j = 0; j < this.alphabet.length; j++) {
              if (word[i] == this.alphabet[j]) {
                  this.fText += word[i].toLowerCase()
                  break
              }
          }
      }

      let res = ''
      if (this.fText.length > key.length) {
          key = key.repeat(Math.ceil(this.fText.length / key.length))
          if (this.fText.length > key.length) {
              key = key.slice(0, -(key.length - this.fText.length))
          }
      }
      let fTextIndex = 0
      for (let i = 0; i < word.length; i++) {
          let letter = word[i]
          let flag = false
          for (let j = 0; j < this.alphabet.length; j++) {
              if (letter == this.alphabet[j]) {
                  flag = true
                  break
              }
          }
          if (flag) {
              let x = this.alphabet.indexOf(key[fTextIndex])
              let y = this.cypher[x].indexOf(this.fText[fTextIndex])
              res += this.alphabet[y]
              fTextIndex++
          } else {
              res += letter
          }
      }
      if (this.r) {
          return res.toUpperCase()
      } else {
          return res.split('').reverse().join('').toUpperCase()
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
