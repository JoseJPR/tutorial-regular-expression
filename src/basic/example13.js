/**
 * Description: Can contain character l or not.
 */

console.group('Hol?a');
const exp13 = /Hol?a/;
console.log('Hoa            ', exp13.test('Hoa')) // true;
console.log('Hola           ', exp13.test('Hola')) // true;
console.log('Hol            ', exp13.test('Hol')) // false;
console.groupEnd('Hol?a');
