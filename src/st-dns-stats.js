import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let result = {};
  domains.forEach((domain) => {
    let subdomain = '';
    const rev_domain = domain.split('.').reverse();
    
    rev_domain.forEach((element) => {
      subdomain = `${subdomain}.${element}`;

      if (subdomain in result) result[subdomain]++;
      else result[subdomain] = 1;
    });
  });
  return result;
}
