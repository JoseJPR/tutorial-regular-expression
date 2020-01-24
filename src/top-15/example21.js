/**
 * Description: Time | HH:MM 12-hour.
 */

console.group('/^(0?[1-9]|1[0-2]):[0-5][0-9]$/');
const exp01 = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
console.log('09:00           ', exp01.test('09:00')) // true;
console.log('12:00           ', exp01.test('12:00')) // true;
console.log('19:00           ', exp01.test('19:00')) // false;
console.groupEnd('/^(0?[1-9]|1[0-2]):[0-5][0-9]$/');
