console.log('6. Arrays: 20. Exercise 4 - Moving an Element')

const numbers = [1, 2, 3, 4];

console.log(move(numbers, 0, 0));
console.log(move(numbers, 0, -1));
console.log(move(numbers, 1, -1));
console.log(move(numbers, 1, 1));
console.log(move(numbers, 2, 1));
console.log(move(numbers, 2, 2));


function move(array, index, offset) {
    const position = index + offset;
    if (position < 0 || position >= array.length) {
        console.error('Invalid offset.')
        return;
    }

    const result = [...array];
    const element = result.splice(index, 1)[0];
    result.splice(position, 0, element);
    return result;
}