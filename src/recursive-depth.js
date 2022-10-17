const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
   //  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	 let count = 1;
        for (let i of arr) {
			let maxCount = 1
          if (Array.isArray(i)) {
            maxCount += this.calculateDepth(i);
          }
			 if(maxCount > count){
				count = maxCount
			  }
        }
		 
        return count;
	}
}

module.exports = {
  DepthCalculator
};
