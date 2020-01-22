/**
 * Description: Search function.
 */

console.group('search /Hi my friend/i');
console.log('Hi     ', 'Hi my friend'.search(/Hi/i)) // 0;
console.log('friend ', 'Hi my friend'.search(/friend/i)) // 6;
console.log('\\W     ', 'Hi my friend'.search(/\W/i)) // 2;
console.log('\\S     ', 'Hi my friend'.search(/\S/i)) // 0;
console.groupEnd('search /Hi/i');
