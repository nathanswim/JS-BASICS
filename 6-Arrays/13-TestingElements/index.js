console.log('6. Arrays: 13. Testing the Elements of an Array')

const numbers = [1, 2, 3];

const allPositive = numbers.every(n => n > 0);
console.log(allPositive);

const allEven = numbers.every(n => n % 2 === 0);
console.log(allEven);

const somePositive = numbers.some(n => n > 0);
console.log(somePositive);

const someEven = numbers.some(n => n % 2 === 0);
console.log(someEven);

