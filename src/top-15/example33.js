/**
 * Description: File Path | File Name with extension having 3 chars.
 */

console.group('/^[\w,\s-]+\.[A-Za-z]{3}$/');
const exp01 = /^[\w,\s-]+\.[A-Za-z]{3}$/;
console.log('file.js      ', exp01.test('file.js')) // false;
console.log('file.        ', exp01.test('file.')) // false;
console.log('c:/file.js   ', exp01.test('c:/file.js')) // false;
console.log('./file.js    ', exp01.test('./file.js')) // false;
console.log('file.yml     ', exp01.test('file.yml')) // true;
console.log('file.jsx     ', exp01.test('file.jsx')) // false;
console.groupEnd('/^[\w,\s-]+\.[A-Za-z]{3}$/');
