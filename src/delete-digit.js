const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let arrNum = [...n.toString()];
	let maxValue = [];

	for (let i = 0; i < arrNum.length; i++) {
		let newArrNum = arrNum.map((item, index) => index === i ? '' : item).join('');
		console.log(newArrNum);

		maxValue.push(newArrNum);
	}

	return Math.max(...maxValue.map(Number))	
}

module.exports = {
  deleteDigit
};
