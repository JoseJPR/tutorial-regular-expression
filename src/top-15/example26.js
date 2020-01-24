/**
 * Description: HTML Tags | Elements with Attributes.
 */

console.group('/<\/?[\w\s]*>|<.+[\W]>/');
const exp01 = /<\/?[\w\s]*>|<.+[\W]>/;
console.log('Hi             ', exp01.test('Hi')) // false;
console.log('<div>Hi</div>  ', exp01.test('<div>Hi</div>')) // true;
console.log('\nHi           ', exp01.test('\nHi')) // false;
console.log('<p>Hi</p>      ', exp01.test('<p>Hi</p>')) // true;
console.groupEnd('/<\/?[\w\s]*>|<.+[\W]>/');
