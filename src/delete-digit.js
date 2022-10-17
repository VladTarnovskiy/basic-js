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
function deleteDigit( n ) {
  let nArr = String(n).split('');

  for (let i = 0; i < nArr.length; i++){
    if(nArr[0] < nArr[1] ){
     nArr.shift();
     return Number(nArr.join(''))
    }
  }

  let min = String(Math.min(...nArr))
  let arr = nArr.findIndex(item => item === min)
  let res = nArr.filter( (item, index) => index !== arr)

  return Number(res.join(''))
}

module.exports = {
  deleteDigit
};
