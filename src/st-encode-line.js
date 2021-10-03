import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let count = 1;
  let new_str = '';
  for (let i = 0; i < str.length; i++) {
    if( str[i] == str[i+1] ){
      count++;
      continue;
    }
    if( count > 1 ) {
      new_str += count + str[i];
      count = 1;
    }
    else{
      new_str += str[i];
      count = 1;
    }
  }
  return new_str;
}
