/**
 * Description: Email | Common email Ids.
 */

console.group('/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/');
const exp01 = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
console.log('me@josejpr.com           ', exp01.test('me@josejpr.com')) // true;
console.log('me@josejpr.co            ', exp01.test('me@josejpr.co')) // true;
console.log('me@josejprcom            ', exp01.test('me@josejprcom')) // false;
console.log('me@josejpr.123           ', exp01.test('me@josejpr.123')) // false;
console.log('@josejpr.123             ', exp01.test('@josejpr.123')) // false;
console.log('me@josejpr.c             ', exp01.test('me@josejpr.c')) // false;
console.log('me-me@josejpr.com        ', exp01.test('me-me@josejpr.com')) // true;
console.log('me.me@josejpr.com        ', exp01.test('me.me@josejpr.com')) // true;
console.groupEnd('/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/');
