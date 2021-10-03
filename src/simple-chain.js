import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arChain: [],
  
  getLength() {
    return this.arChain.length;
  },
  
  addLink(value = "") {
    this.arChain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {  
    if ( position < 1 || 
        position > this.arChain.length - 1 || 
        typeof position !== 'number'
    ) {
      this.arChain = [];
      throw Error('You can\'t remove incorrect link!');
    } 
    
    this.arChain.splice(position - 1, 1);
    return this;
    
  },

  reverseChain() {
    this.arChain.reverse();
    return this;
  },

  finishChain() {
    const result = this.arChain.join('~~');
    this.arChain = [];
    return result;
  }
};
