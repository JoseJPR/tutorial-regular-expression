/**
 * Description: Digits | Whole + Decimal Numbers.
 */

console.group('/^\d*(\.\d+)?$/');
const exp01 = /^\d*(\.\d+)?$/;
console.log('1          ', exp01.test('1')) // true;
console.log('1.1        ', exp01.test('1.1')) // true;
console.log('1,1        ', exp01.test('1,1')) // false;
console.groupEnd('/^\d*(\.\d+)?$/');
