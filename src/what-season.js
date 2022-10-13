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
  console.log('date', date)
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  if (!date) return 'Unable to determine the time of year!';
  try {
    const time = date.getTime();
    let month = date.getMonth();
    if (month === 11) month = 0;
    return seasons[Math.round(month / 3)];
  } catch (error) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
