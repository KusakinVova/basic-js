import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const numbers = [];
  arr.forEach((e) => {
    if (e !== -1) numbers.push(+e);
  });
  numbers.sort((a, b) => a - b);
  const result = [];
  let counter = 0;
  arr.forEach((e) => {
    if (e === -1) result.push(e);
    else result.push(numbers[counter++]);
  });
  return result;
}
