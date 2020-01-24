/**
 * Description: JavaScript Handlers | Inline JS handler.
 */

console.group('/\bon\w+=\S+(?=.*>)/');
const exp01 = /\bon\w+=\S+(?=.*>)/;
console.log('<div onclick=""></div>   ', exp01.test('<div onclick=""></div>')) // true;
console.log('<div>Hi</div>            ', exp01.test('<div>Hi</div>')) // false;
console.groupEnd('/\bon\w+=\S+(?=.*>)/');
