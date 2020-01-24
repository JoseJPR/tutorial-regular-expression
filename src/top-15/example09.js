/**
 * Description: Email | Uncommon email ids.
 */

console.group('/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/');
const exp01 = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
console.log('me@josejpr.com           ', exp01.test('me@josejpr.com')) // true;
console.log('me.me-me@josejpr.com     ', exp01.test('me.me-me@josejpr.com')) // true;
console.log('me^me@josejpr.com        ', exp01.test('me^me@josejpr.com')) // false;
console.log('me·me@josejpr.com        ', exp01.test('me·me@josejpr.com')) // false;
console.log('me@josejpr.comcomcom     ', exp01.test('me@josejpr.comcomcom')) // false;
console.groupEnd('/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/');
