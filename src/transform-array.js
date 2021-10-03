import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // '--double-next', '--discard-prev', '--double-prev', '--discard-next'
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  console.log(arr);
  let new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i]==='--double-next'){
      if(!arr[i+1]) continue;
      new_arr.push(arr[i+1]);
      continue;
    }
    if(arr[i]==='--double-prev'){
      if(!arr[i-1]) continue;
      new_arr.push(arr[i-1]);
      continue;
    }
    if(arr[i]==='--discard-prev'){
      if(!new_arr[i-1]) continue;
      new_arr.pop();
      continue;
    }
    if(arr[i]==='--discard-next'){
      if(!arr[i+1]) continue;
      i++; i++;
      continue;
    }
    
    new_arr.push(arr[i]);

  }
  console.log(new_arr);
  return new_arr;
}
