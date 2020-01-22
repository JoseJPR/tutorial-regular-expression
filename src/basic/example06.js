/**
 * Description: Contain any number.
 */

console.group('\d');
const exp06 = /\d/;
console.log('abcdf          ', exp06.test('abcdf')) // false;
console.log('123            ', exp06.test('1')) // true;
console.log('1230           ', exp06.test('1230')) // true;
console.log('Test 987       ', exp06.test('Test 987')) // true;
console.groupEnd('\d');
