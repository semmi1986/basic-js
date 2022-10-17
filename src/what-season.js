const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
	return 'Unable to determine the time of year!';
 }

 if (typeof(date) == 'number') {
	throw Error('Invalid date!');
 }

 if (Object.getOwnPropertyNames(date).length > 0) {
	throw Error('Invalid date!');
 }

	switch (date.getMonth()) {
		case 0: {
			return 'winter';
		 }
		case 1: {
		  return 'winter';
		}
		case 2: {
		  return 'spring';
		}
		case 3: {
		  return 'spring';
		}
		case 4: {
		  return 'spring';
		}
		case 5: {
		  return 'summer';
		}
		case 6: {
		  return 'summer';
		}
		case 7: {
		  return 'summer';
		}
		case 8: {
		  return 'fall';
		}
		case 9: {
		  return 'fall';
		}
		case 10: {
		  return 'fall';
		}
		case 11: {
		  return 'winter';
		}
		default:
			break;
	 }

 }


module.exports = {
  getSeason
};
