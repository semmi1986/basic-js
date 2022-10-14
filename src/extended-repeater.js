const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
	//   throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here

	let newArrStr = [];
	let addArr = [];
	// string add
	let repeatStr = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1;
	let addStr = (options.hasOwnProperty('addition')) ? `${options.addition}` : '';
	let separ = (options.hasOwnProperty('separator')) ? options.separator : '+';
	// portion strstring
	let addRepeatStr = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1;
	let addSepar = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|';

	//new array depending of value repeatTimes and add addition to str
	//addRepeatStr=2 => ['addStr(addSepar)', 'addStraddStr(addSepar)']
	for (let i = 1; i <= addRepeatStr; i++) {
		addArr.push(addStr);
	}
	// repeatStr=2 => str.addStr.str.addStr(addSepar)

	for (let i = 1; i <= repeatStr; i++) {
		newArrStr.push(str + addArr.join(`${addSepar}`))
	}
	return newArrStr.join(`${separ}`)
}

module.exports = {
	repeater
};
