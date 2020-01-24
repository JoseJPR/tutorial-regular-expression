/**
 * Description: Slug | Slug.
 */

console.group('/^[a-z0-9]+(?:-[a-z0-9]+)*$/');
const exp01 = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
console.log('hi           ', exp01.test('hi')) // true;
console.log('hi-bye       ', exp01.test('hi-bye')) // true;
console.log('hi--bye      ', exp01.test('hi--bye')) // false;
console.log('hi-$-bye     ', exp01.test('hi-$-bye')) // false;
console.groupEnd('/^[a-z0-9]+(?:-[a-z0-9]+)*$/');
