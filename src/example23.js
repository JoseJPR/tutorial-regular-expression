/**
 * Description: Replace function.
 */

console.group('replace /Hi/i');
console.log('H      ', 'H'.replace(/Hi/i, 'Bye')) // H;
console.log('hi     ', 'hi'.replace(/Hi/i, 'Bye')) // Bye;
console.log('HHi    ', 'HHi'.replace(/Hi/i, 'Bye')) // HBye;
console.log('Hii    ', 'Hii'.replace(/Hi/i, 'Bye')) // Byei;
console.groupEnd('replace /Hi/i');
