import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater (str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!options["additionSeparator"]) options["additionSeparator"] = "|";
  if (!options["separator"]) options["separator"] = "+";
  if (!options["repeatTimes"]) options["repeatTimes"] = 1;
  if (!options["additionRepeatTimes"]) options["additionRepeatTimes"] = 1;
  if (options.addition === undefined) options.addition = '';
  else options.addition = String(options.addition);

  str = String(str);
  let strResult = '';

  for (let i = 1; i <= options.repeatTimes; i++) {
    strResult += str;
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      strResult += options.addition;
      if (j !== options.additionRepeatTimes) strResult += options.additionSeparator;
    }
    if (i !== options.repeatTimes) strResult += options.separator;
  }
  return strResult;
}
