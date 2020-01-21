/**
 * Description: Match function.
 */

console.group('match /Hello+/i');
console.log('H              ', 'H'.match(/Hello+/i)) // null;
console.log('hello          ', 'hello'.match(/Hello+/i)) // object;
console.log('HHello         ', 'HHello'.match(/Hello+/i)) // object;
console.log('Hello          ', 'Hello'.match(/Hello+/i)) // object;
console.groupEnd('match /Hello+/i');
