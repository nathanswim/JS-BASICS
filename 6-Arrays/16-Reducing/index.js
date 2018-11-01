console.log('6. Arrays: 16. Reducing an Array')

const numbers = [1, -1, 2, 3];

// Option1:
let sum1 = 0;
for (let n of numbers)
    sum1 += n;
console.log(sum1);

// Option 2:
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
let sum2 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum2);

// Option 3:
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
let sum3 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);

console.log(sum3);
