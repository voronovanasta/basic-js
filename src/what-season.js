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
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';}
  if (!(date instanceof Date) || date.hasOwnProperty('getDate') && Object.getOwnPropertyNames(Object.getPrototypeOf(date))) {
    throw new Error('Invalid date!')};
  
  let seasons = ['winter', 'spring', 'summer', 'autumn']
  let countofMonth = date.getMonth() + 1;
  if(countofMonth <=2 || countofMonth === 12 ) return seasons[0];
  if(countofMonth >=3 && countofMonth <=5) return seasons[1]
  if(countofMonth >=6 && countofMonth <=8) return seasons[2]
  if(countofMonth >=9 && countofMonth <=11) return seasons[3]

}

module.exports = {
  getSeason
};
