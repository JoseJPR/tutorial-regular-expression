/**
 * Description: Contain any character.
 */

console.group('\w');
const exp07 = /\w/;
console.log('-              ', exp07.test('-')) // false;
console.log('A              ', exp07.test('A')) // true;
console.log('ABCDZ          ', exp07.test('ABCDZ')) // true;
console.log('ZA             ', exp07.test('ZA')) // true;
console.log('0              ', exp07.test('0')) // true;
console.log('A0             ', exp07.test('A0')) // true;
console.groupEnd('\w');
