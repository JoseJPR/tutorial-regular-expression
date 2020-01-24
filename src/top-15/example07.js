/**
 * Description: Alphanumeric Characters | Alphanumeric with space.
 */

console.group('/^[a-zA-Z0-9 ]*$/');
const exp01 = /^[a-zA-Z0-9 ]*$/;
console.log('abcdf            ', exp01.test('abcdf')) // true;
console.log('abdf ghi         ', exp01.test('abd fghi')) // true;
console.log('abdf-ghi         ', exp01.test('abd-fghi')) // false;
console.log('2345             ', exp01.test('2345')) // true;
console.log('3 80             ', exp01.test('3 80')) // true;
console.log('3-80             ', exp01.test('3-80')) // false;
console.log('3.80             ', exp01.test('3.80')) // false;
console.groupEnd('/^[a-zA-Z0-9 ]*$/');
