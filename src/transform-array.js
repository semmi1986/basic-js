const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here;
  if (!Array.isArray(arr)) {
	throw new Error(`'arr' parameter must be an instance of the Array!`);
 }
let result = [];

let discardNex = '--discard-next',
		discardPrev='--discard-prev',
		doubleNext = '--double-next',
		doublePrev = '--double-prev';

for (let i = 0; i < arr.length; i++) {
	if(arr[i] === undefined) continue;

	switch (arr[i]) {
		case discardNex:
			arr[i + 1] = undefined;
			continue;
		case discardPrev:
			result = result.slice(0, i - 1);
			continue;
		case doubleNext:
			result.push(arr[i + 1]);
			continue;
		case doublePrev:
			result.push(arr[i - 1]);
			continue;
		default:
			break;
	}
	result.push(arr[i])
}
	return result.filter(item => item !== undefined)

}

module.exports = {
  transform
};
