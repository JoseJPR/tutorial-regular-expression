/**
 * Description: Contain at least one character between a and b.
 */

console.group('[a-b]');
const exp04 = /[a-b]/;
console.log('cdf            ', exp04.test('cdf')) // false;
console.log('a              ', exp04.test('a')) // true;
console.log('ab             ', exp04.test('ab')) // true;
console.log('ba             ', exp04.test('ba')) // true;
console.log('a0             ', exp04.test('a0')) // true;
console.groupEnd('[a-b]');
