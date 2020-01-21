/**
 * Description: Patterns.
 */

console.group('/orange|red/');
const exp19 = /orange|red/;
console.log('This car is orange         ', exp19.test('This car is orange')) // true;
console.log('This car is red            ', exp19.test('This car is red')) // true;
console.log('This car is orange and red ', exp19.test('This car is orange and red')) // true;
console.log('This car is blue           ', exp19.test('This car is blue')) // false;
console.groupEnd('/orange|red/');
