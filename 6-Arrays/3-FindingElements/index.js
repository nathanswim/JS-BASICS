console.log('6. Arrays: 3. Finding Elements (Primitives)')


// Finding Elements: Primitive vs Reference types

// Primitive types
const numbers = [1, 2, 3, 1, 4];

console.log('indexOf:');
console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(2));
console.log(numbers.indexOf('2'));
console.log(numbers.indexOf(1, 2));

console.log('exists:');
console.log(numbers.indexOf(2) !== -1);
console.log(numbers.includes(2));



console.log('lastIndexOf:');
console.log(numbers.lastIndexOf(1));



// add new elements: end, beginning, middle

