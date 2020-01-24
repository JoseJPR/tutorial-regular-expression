/**
 * Description: Match Duplicates in a String | Search Duplicates.
 */

console.group('/(\b\w+\b)(?=.*\b\1\b)/');
const exp01 = /(\b\w+\b)(?=.*\b\1\b)/;
console.log('hi           ', exp01.test('hi')) // false;
console.log('hi hi        ', exp01.test('hi hi')) // true;
console.log('hi hihi      ', exp01.test('hi hihi')) // true;
console.groupEnd('/(\b\w+\b)(?=.*\b\1\b)/');
