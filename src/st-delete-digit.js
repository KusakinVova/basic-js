import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  n = String(n);
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    const max_tmp = n.substr(0, i) + n.slice(i + 1);
    if (max < +max_tmp) max = +max_tmp;
  }
  return max;
}
