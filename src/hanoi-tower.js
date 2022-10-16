const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed ) {
  if (disksNumber == 0) {return { turns: 0, seconds: 0 }}
  let turns = 0
  for (let i = 1; i<=disksNumber;i++){
    turns = turns * 2 + 1
  }
  let seconds = Math.floor(turns/(turnsSpeed/3600))
  let x = { turns: turns, seconds: seconds}
  return x
}

module.exports = {
  calculateHanoi
};
