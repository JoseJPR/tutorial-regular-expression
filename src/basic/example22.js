/**
 * Description: End string pattern.
 */

console.group('/friend$/i');
const exp21 = /friend$/i;
console.log('Hi my friend    ', exp21.test('Hi my friend')) // true;
console.log('Hi my Friend    ', exp21.test('Hi my Friend')) // true;
console.log('Hi my friends   ', exp21.test('Hi my friends')) // false;
console.groupEnd('/friend$/i');
