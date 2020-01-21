/**
 * Description: No case sensitive.
 */

console.group('/Hola/i');
const exp15 = /Hola/i;
console.log('Hola           ', exp15.test('Hola')) // true;
console.log('hola           ', exp15.test('hola')) // true;
console.log('HOLA           ', exp15.test('HOLA')) // true;
console.groupEnd('/Hola/i');
