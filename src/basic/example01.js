/**
 * Description: Comparte characters with 'abc'.
 */

console.group('abc');
const exp01 = /abc/;
console.log('abcdf          ', exp01.test('abcdf')) // true;
console.log('abdfghi        ', exp01.test('abdfghi')) // false;
console.groupEnd('abc');
