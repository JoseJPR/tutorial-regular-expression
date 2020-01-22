/**
 * Description: Test Emails format.
 */

 // Start with minimum any words or number @ continue with minimum any words or number . finish with 2, 3 or 4 any words or number.
console.group('/^\w+\@\w+\.\w{2,4}$/i');
console.log('me@josejpr.com       ', /^\w+\@\w+\.\w{2,4}$/i.test('me@josejpr.com')) // true;
console.log('mejosejpr.com        ', /^\w+\@\w+\.\w{2,4}$/i.test('mejosejpr.com')) // false;
console.log('me@josejprcom        ', /^\w+\@\w+\.\w{2,4}$/i.test('me@josejprcom')) // false;
console.log('mejosejprcom         ', /^\w+\@\w+\.\w{2,4}$/i.test('mejosejprcom')) // false;
console.log('me@josejpr.commm     ', /^\w+\@\w+\.\w{2,4}$/i.test('me@josejpr.commm')) // false;
console.groupEnd('/^\w+\@\w+\.\w{2,4}$/i');
