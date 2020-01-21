/**
 * Description: Contain at least one numbers between 0 and 9.
 */

console.group('[0-9]');
const exp03 = /[0-9]/;
console.log('abcdf          ', exp03.test('abcdf')) // false;
console.log('123            ', exp03.test('123')) // true;
console.log('1230           ', exp03.test('1230')) // true;
console.log('Test 987       ', exp03.test('Test 987')) // true;
console.groupEnd('[0-9]');
