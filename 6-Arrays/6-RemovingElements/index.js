console.log('6. Arrays: 6. Removing elements')

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

// Remove element from beginning, end, and middle

// end
const last = numbers.pop();
console.log(numbers, last);

// beggining
const first = numbers.shift();
console.log(numbers, first);

// middle
console.log(numbers)
numbers.splice(2, 1);
console.log(numbers);
