const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(x) {
let count = 0

x.forEach((item, index) => {
  item.forEach((it, ind) => {
    if (it == '^^') {count = count + 1}
  })
})

  // let y = x.reduce((accumulator, item)=>{
  //   if (item.includes('^^')){
  //      accumulator += 1
  //   }
    return count
  // },0)
  // return y
}

module.exports = {
  countCats
};
