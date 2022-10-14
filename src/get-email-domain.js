const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let j = []
  for (let i = 0; i < email.length; i++) {
	if (email[i] === '@') {
		j= email.slice(i+1)
	}
	
  }
  return j
}

module.exports = {
  getEmailDomain
};
