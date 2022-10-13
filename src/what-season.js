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
function getSeason(x) {
  if (!x){return 'Unable to determine the time of year!'} 
  

  let z = x.getMonth()
  if (!Object.prototype.toString.call(z) === "[object Date]") {
    return 'Invalid date!'
  }
  if (11==z || z<=1){
    return 'winter'
  }  else if(2==z|| z<=4){
    return 'spring'
  }  else if(5==z || z<=7){
    return 'summer'
  }  else if(8==z || z<=10){
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
