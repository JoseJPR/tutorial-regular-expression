/**
 * Description: URL | Include http(s) Protocol.
 */

console.group('/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/');
const exp01 = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
console.log('http://www.josejpr.com       ', exp01.test('http://www.josejpr.com')) // true;
console.log('http://josejpr.com           ', exp01.test('http://josejpr.com')) // true;
console.log('https://josejpr.com          ', exp01.test('https://josejpr.com ')) // true;
console.log('https://www.josejpr.com      ', exp01.test('https://www.josejpr.com')) // true;
console.log('//www.josejpr.com            ', exp01.test('//www.josejpr.com')) // false;
console.log('josejpr.com                  ', exp01.test('josejpr.com')) // false;
console.groupEnd('/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/');
