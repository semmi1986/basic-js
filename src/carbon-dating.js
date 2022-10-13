const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
		// t=log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/0,693
	let t = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)*HALF_LIFE_PERIOD/0.693)

	if(typeof sampleActivity !== 'string'){
		return false;
	}else if(sampleActivity <= 0){
		return false;
	}else if(isNaN(+sampleActivity)){
		return false;
	}else if(t < 0){
		return false;
	}else{
		return t
	}

}

module.exports = {
  dateSample
};
