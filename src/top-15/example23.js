/**
 * Description: Time | HH:MM 24-hour with leading 0.
 */

console.group('/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/');
const exp01 = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
console.log('09:00           ', exp01.test('09:00')) // true;
console.log('9:00            ', exp01.test('9:00')) // true;
console.log('12:00           ', exp01.test('12:00')) // true;
console.log('19:00           ', exp01.test('19:00')) // true;
console.groupEnd('/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/');
