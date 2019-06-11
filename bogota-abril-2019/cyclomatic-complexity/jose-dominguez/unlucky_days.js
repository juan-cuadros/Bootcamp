/**
 * Calculates the quantity of black fridays for the given year.
 * @param {number} year 
 */
function unluckyDays(year) {
    const perpetualCalendar = "1221212213113213122221122131122121221311321312222112213112212122131132131222211221311221212213113213112213113213122221122131122121221311321312222112213112212122131132131222211221311221212213113213122213113213122221122131122121221311321312222112213112212122131132131222211221311221212213113213122221122213122221122131122121221311321312222112213112212122131132131222211221311221212213113213122221122131";
    return parseInt(perpetualCalendar[year % 400]);
}