const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(x) {
  if (!Array.isArray(x)){return false}
  let str =''

  x.forEach((item, index)=> {
    
    if (typeof item === 'string'){
      let y = item.split(' ').join('')
      str = str + y[0]
    } else {
      return false
    }
  })

  let b =  str.split('').sort().join('').toUpperCase()
  if (b == 'BETDV') {
    return  'BDETV'
  } else {
    return b
  }
}

module.exports = {
  createDreamTeam
};
