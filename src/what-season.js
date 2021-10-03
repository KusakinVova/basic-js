import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arSeasons = {
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [11, 0, 1],
    spring: [2, 3, 4],
  };

  try {
    if (date === null || date === undefined) return 'Unable to determine the time of year!'
    isNaN(date.getTime());
    return Object.keys(arSeasons).find(key => arSeasons[key].indexOf(date.getMonth()) > -1 )
  } catch {
    throw new Error('Invalid date!')
  }
}
