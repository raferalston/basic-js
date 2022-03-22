const { NotImplementedError } = require('../extensions/index.js');

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
 function getDNSStats(d) {
  res = {}
  for (let i = 0; i < d.length; i++) {
      let currentDns = d[i].split('.')
      if (currentDns) {
          let tmpRes = ''
          for (let j = currentDns.length-1; j >= 0; j--) {
             let currentName = '.' + currentDns[j]
             tmpRes += currentName
             if (res[tmpRes]) {
                 res[tmpRes]++
             } else {
                 res[tmpRes] = 1
             }
          }
      }
  }
  return res
}

module.exports = {
  getDNSStats
};
