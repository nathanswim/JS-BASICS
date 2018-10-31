console.log('6. Arrays: 10. Iterating an Array')

const numbers = [1, 2, 3];

console.log('for ... in:');
for (let index in numbers)
    console.log(numbers[index]);

console.log('for ... of:');
for (let number of numbers)
    console.log(number);

console.log('forEach with function:');
numbers.forEach(function (n) { console.log(n); });

console.log('forEach with lambda:');
numbers.forEach(n => console.log(n));

console.log('forEach with lambda and index:');
numbers.forEach((n, i) => console.log(i, n));


