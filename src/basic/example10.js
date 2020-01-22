/**
 * Description: No contain character that isn´t numbers.
 */

console.group('[^\d]');
const exp10 = /[^\d]/;
console.log('abcdfefghi     ', exp10.test('abcdfe')) // true;
console.log('1              ', exp10.test('1')) // false;
console.groupEnd('[^\d]');
