/**
 * Description: Time | HH:MM:SS 24-hour.
 */

console.group('/(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/');
const exp01 = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/;
console.log('09:00           ', exp01.test('09:00')) // false;
console.log('9:00            ', exp01.test('9:00')) // false;
console.log('09:00:00        ', exp01.test('09:00:00')) // true;
console.log('12:00:00        ', exp01.test('12:00:00')) // true;
console.log('19:00:00        ', exp01.test('19:00:00')) // true;
console.groupEnd('/(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/');
