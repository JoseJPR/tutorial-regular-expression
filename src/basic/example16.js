/**
 * Description: String groups.
 */

console.group('/Woo+(hoo)+/i');
const exp16 = /Woo+(hoo)+/i;
console.log('Woohoo         ', exp16.test('Woohoo')) // true;
console.log('WoooHooHoo     ', exp16.test('WooHooHoo')) // true;
console.log('WoooHooo       ', exp16.test('WoooHooo')) // true;
console.log('WoooHHoo       ', exp16.test('WoooHHoo')) // false;
console.groupEnd('/Woo+(hoo)+/i');
