/**
 * Description: Contain at least one character between A and Z.
 */

console.group('[A-Z]');
const exp05 = /[A-Z]/;
console.log('cdf            ', exp05.test('cdf')) // false;
console.log('A              ', exp05.test('A')) // true;
console.log('ABCDZ          ', exp05.test('ABCDZ')) // true;
console.log('ZA             ', exp05.test('ZA')) // true;
console.log('a0             ', exp05.test('a0')) // false;
console.log('A0             ', exp05.test('A0')) // true;
console.groupEnd('[A-Z]');
