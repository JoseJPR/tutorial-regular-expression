/**
 * Description: Username | Alphanumeric string.
 */

console.group('/^[a-z0-9_-]{3,16}$/');
const exp01 = /^[a-z0-9_-]{3,16}$/;
console.log('ab              ', exp01.test('ab')) // false;
console.log('abc*bacdfd      ', exp01.test('abc*bacdfd')) // false;
console.log('abcdfabcdf      ', exp01.test('abcdfabcdf')) // true;
console.log('abcd1234567     ', exp01.test('abcd1234567')) // true;
console.groupEnd('/^[a-z0-9_-]{3,16}$/');
