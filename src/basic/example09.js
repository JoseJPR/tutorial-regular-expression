/**
 * Description: No contain between 0-4.
 */

console.group('[^0-4]');
const exp09 = /[^0-4]/;
console.log('1234           ', exp09.test('1234')) // false;
console.log('9875           ', exp09.test('9875')) // true;
console.groupEnd('[^0-4]');
