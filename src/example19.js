/**
 * Description: Limit words.
 */

console.group('/\bInter\b/i');
const exp18 = /\bInter\b/i;
console.log('Internet       ', exp18.test('Internet')) // false;
console.log('Inter          ', exp18.test('Inter')) // true;
console.log('inter          ', exp18.test('inter')) // true;
console.log('Internet       ', exp18.test('Internet')) // false;
console.groupEnd('/\bInter\b/i');
