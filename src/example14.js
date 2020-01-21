/**
 * Description: Correct format Date.
 */

console.group('\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{1,2}');
const exp14 = /\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{1,2}/;
console.log('10/10/2020 09:30   ', exp14.test('10/10/2020 09:30')) // true;
console.log('10-10-2020 09:30   ', exp14.test('10-10-2020 09:30')) // false;
console.log('10//2020 09:30     ', exp14.test('10//2020 09:30')) // false;
console.groupEnd('\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{1,2}');
