/**
 * Description: Password Strength | Moderate.
 */

console.group('/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/');
const exp01 = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
console.log('abc                ', exp01.test('abc')) // false;
console.log('abc1234            ', exp01.test('abc1234')) // false;
console.log('Abc1234            ', exp01.test('Abc1234')) // false;
console.log('%A/9               ', exp01.test('%A/9')) // false;
console.log('%Abcdf/98765       ', exp01.test('%Abcdf/98765')) // true;
console.groupEnd('/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/');
