/**
 * Description: File Path | File Path with Filename and extension.
 */

console.group('/((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/');
const exp01 = /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/;
console.log('file.js      ', exp01.test('file.js')) // false;
console.log('file.        ', exp01.test('file.')) // false;
console.log('c:/file.js   ', exp01.test('c:/file.js')) // true;
console.log('./file.js    ', exp01.test('./file.js')) // true;
console.groupEnd('/((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/');
