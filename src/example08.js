/**
 * Description: Compare string with date format.
 */

console.group('\d\d[-/]\d\d[-/]\d\d\d\d');
const exp08 = /\d\d[-/]\d\d[-/]\d\d\d\d/;
console.log('1-1-2020       ', exp08.test('1-1-2020')) // false;
console.log('01-01-2020     ', exp08.test('01-01-2020')) // true;
console.log('01/01/2020     ', exp08.test('01/01/2020')) // true;
console.log('2020-01-01     ', exp08.test('2020-01-01')) // false;
console.groupEnd('\d\d[-/]\d\d[-/]\d\d\d\d');
