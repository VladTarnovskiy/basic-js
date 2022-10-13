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
function dateSample(x) {
  // if (x.isNaN()){return false}
  if (!x){return false}
  if (!(typeof x == 'string')){return false}
  if (x==NaN || x<=0){return false}

  let z = parseFloat(x)
  if (z<= 0 || z === NaN ){return false}
  let k = 0.693/5730
  let t = Number(Math.log(15/z)/k)

  if (isNaN(t) || t<0) {return false}
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
