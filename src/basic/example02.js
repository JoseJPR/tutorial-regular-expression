/**
 * Description: Contain any numbers of 0123456789.
 */

console.group('[0123456789]');
const exp02 = /[0123456789]/;
console.log('abcdf          ', exp02.test('abcdf')) // false;
console.log('123            ', exp02.test('123')) // true;
console.log('1230           ', exp02.test('1230')) // true;
console.log('Test 987       ', exp02.test('Test 987')) // true;
console.groupEnd('[0123456789]');
