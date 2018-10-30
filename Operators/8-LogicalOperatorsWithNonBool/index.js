console.log('Logical Operators With Non-Booleans');

// Falsey values (evaluate to false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not falsey, -> Truthy

console.log(false || 0 || '' || undefined || null || NaN || 3); // returns 3

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor);
