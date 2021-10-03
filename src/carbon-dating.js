import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const f_sampleActivity = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(f_sampleActivity) || f_sampleActivity > MODERN_ACTIVITY || f_sampleActivity <= 0) 
    return false;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / f_sampleActivity) / (0.693 / HALF_LIFE_PERIOD) );
}
