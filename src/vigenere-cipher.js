import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {

  alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(machine = true){
    this.machine = machine;
    return this.machine;
  }

  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');
    let messageSecret = [];
    let j=0;
    key = key.toUpperCase();
    message = message.toUpperCase();

    if(!this.machine) message = message.split('').reverse();

    for(let i = 0; i < message.length; i++){
      if(this.alph.includes(message[i])){
        let index = ((this.alph.indexOf(message[i])+this.alph.indexOf(key[j]))%26);
        let tmp = this.alph[index];
        messageSecret.push(tmp);
        j++;
        if (j == key.length) j = 0;
      }
      else {
        messageSecret.push(message[i]);
      }
    }
    return messageSecret.join('');
  }

  decrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');
    let messageSecret = [];
    let j = 0;
    key = key.toUpperCase();
    message = message.toUpperCase();

    if(!this.machine) message = message.split('').reverse();
      
    for(let i = 0; i < message.length; i++){
      if(this.alph.includes(message[i])){
        let index = (((this.alph.indexOf(message[i]) - this.alph.indexOf(key[j]))+26)%26);
        let tmp = this.alph[index];
        messageSecret.push(tmp);
        j++;
        if(j == key.length) j = 0;
      } 
      else {
        messageSecret.push(message[i]);      
      }
    }
    return messageSecret.join('');
  }
}
