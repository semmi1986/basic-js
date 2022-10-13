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
function getDNSStats(domains) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const domainsObj = {};

  for (let i = 0; i < domains.length; i++) {
	 let summAppDns = '';
	 let appDns = domains[i].split('.').reverse();
  //   console.log(appDns);

	 for (let j = 0; j < appDns.length; j++) {
	  // console.log(appDns[j]);
		let simbolDns = '.' + appDns[j];
		summAppDns += simbolDns;
	  //  console.log(summAppDns);
		

	  domainsObj[summAppDns] ? domainsObj[summAppDns]++ : domainsObj[summAppDns] = 1;

	  //  console.log(domainsObj[summAppDns]);
	 }

  }

  // console.log(domainsObj);
  return domainsObj;

}

module.exports = {
  getDNSStats
};
