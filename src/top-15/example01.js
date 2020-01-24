/**
 * Description: Digits | Whole Numbers.
 */

console.group('/^\d+$/');
const exp01 = /^\d+$/;
console.log('1234          ', exp01.test('1234')) // true;
console.log('2.3           ', exp01.test('2.3')) // false;
console.log('3,2           ', exp01.test('3,2')) // false;
console.groupEnd('/^\d+$/');
