/**
 * Description: Dates | YYYY-MM-dd using separator -.
 */

console.group('/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/');
const exp01 = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
console.log('2020-12-12           ', exp01.test('2020-12-12')) // true;
console.log('2020-12-2            ', exp01.test('2020-12-2')) // false;
console.log('2020-9-2             ', exp01.test('2020-9-2')) // false;
console.log('12-12-2020           ', exp01.test('12-12-2020')) // false;
console.log('12/12/2020           ', exp01.test('12/12/2020')) // false;
console.groupEnd('/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/');
