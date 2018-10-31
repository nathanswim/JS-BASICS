console.log('6. Arrays: 2. Adding Elements')

const numbers = [3,4];
console.log(numbers);

// add new elements: end, beginning, middle

// end
numbers.push(5, 6);
console.log(numbers);

// beginning
numbers.unshift(1, 2);
console.log(numbers);

// middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);
