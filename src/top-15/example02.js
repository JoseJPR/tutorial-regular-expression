/**
 * Description: Digits | Decimal Numbers.
 */

console.group('/^\d*\.\d+$/');
const exp01 = /^\d*\.\d+$/;
console.log('1.1        ', exp01.test('1.1')) // true;
console.log('9,9        ', exp01.test('9,9')) // false;
console.log('1          ', exp01.test('1')) // false;
console.groupEnd('/^\d*\.\d+$/');
