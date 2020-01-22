/**
 * Description: Can contain cero or more numbers.
 */

console.group('\d*');
const exp12 = /\d*/;
console.log('               ', exp12.test('')) // true;
console.log('1              ', exp12.test('1')) // true;
console.log('ab1            ', exp12.test('ab1')) // true;
console.groupEnd('\d*');
