/**
 * Description: Exec function.
 */

console.group('exec /Hello+/i');
const exp17 = /Hello+/i;
console.log('H              ', exp17.exec('H')) // null;
console.log('hello          ', exp17.exec('hello')) // object;
console.log('HHello         ', exp17.exec('HHello')) // object;
console.log('Hello          ', exp17.exec('Helloo')) // object;
console.groupEnd('exec /Hello+/i');
