const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [...str.split('')] 
  let count = 1;
  let strCode='';
  for (let i = 0; i < arr.length; i++) {
	  if (arr[i] === arr[i+1]){
		  count ++;
	  }else{
		  strCode +=`${count}${arr[i]}`
		  // console.log(strCode);
		  count = 1
	  }
	  
  }
  
  return strCode.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
