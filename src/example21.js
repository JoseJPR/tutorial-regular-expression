/**
 * Description: Start string pattern.
 */

console.group('/^Hello/i');
const exp20 = /^Hello/i;
console.log('Hello my friend    ', exp20.test('Hello my friend')) // true;
console.log('hello my friend    ', exp20.test('hello my friend')) // true;
console.log('Hi my friend       ', exp20.test('Hi my friend')) // false;
console.groupEnd('/^Hello/i');
