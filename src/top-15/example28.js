/**
 * Description: JavaScript Handlers | Inline JS handler with element.
 */

console.group('/(?:<[^>]+\s)(on\S+)=["\']?((?:.(?!["\']?\s+(?:\S+)=|[>"\']))+.)["\']?/');
const exp01 = /(?:<[^>]+\s)(on\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/;
console.log('<div onclick="open()"></div>   ', exp01.test('<div onclick="open()"></div>')) // true;
console.log('<div onclick=""></div>         ', exp01.test('<div onclick=""></div>')) // false;
console.log('<div>Hi</div>                  ', exp01.test('<div>Hi</div>')) // false;
console.groupEnd('/(?:<[^>]+\s)(on\S+)=["\']?((?:.(?!["\']?\s+(?:\S+)=|[>"\']))+.)["\']?/');
