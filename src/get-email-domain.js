const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arrEmail = email.split('')
  const indexFirst = arrEmail.findIndex(el => el === '@')
  const changeEmail = arrEmail.slice(indexFirst + 1, arrEmail.length)
  if(changeEmail.find(el => el === '@') === '@'){
    const indexSecond = changeEmail.findIndex(el => el === '@')
    const modifyArr = changeEmail.slice(indexSecond + 1, changeEmail.length)

    return modifyArr.join('')
  }

  return changeEmail.join('')
}

module.exports = {
  getEmailDomain
};
