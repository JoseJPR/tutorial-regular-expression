/**
 * Description: Time | HH:MM 12-hour Meridiems (AM/PM).
 */

console.group('/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/');
const exp01 = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
console.log('09:00 AM        ', exp01.test('09:00 AM')) // true;
console.log('9:00 AM         ', exp01.test('9:00 AM')) // true;
console.log('12:00 PM        ', exp01.test('12:00 AM')) // true;
console.log('19:00 PM        ', exp01.test('19:00 PM')) // true;
console.groupEnd('/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/');
