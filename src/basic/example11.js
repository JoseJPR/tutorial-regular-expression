/**
 * Description: With one or more numbers.
 */

console.group('\d+');
const exp11 = /\d+/;
console.log('               ', exp11.test('')) // false;
console.log('1              ', exp11.test('1')) // true;
console.log('ab1            ', exp11.test('ab1')) // true;
console.groupEnd('\d+');
