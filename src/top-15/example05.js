/**
 * Description: Digits | Whole + Decimal + Fractions.
 */

console.group('/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/');
const exp01 = /[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/;
console.log('1            ', exp01.test('1')) // true;
console.log('-2           ', exp01.test('-2')) // false;
console.log('-2.2         ', exp01.test('-2.2')) // false;
console.log('3.1          ', exp01.test('3.1')) // false;
console.log('2/3          ', exp01.test('2/3')) // false;
console.log('-2/3         ', exp01.test('-2/3')) // false;
console.log('-2/-3        ', exp01.test('-2/-3')) // false;
console.log('a            ', exp01.test('a')) // false;
console.log('a/b          ', exp01.test('a/b')) // false;
console.groupEnd('/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/');
