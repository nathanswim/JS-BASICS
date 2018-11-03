console.log('6. Arrays: 19. Exercise 3 - Except')

const numbers = [1, 2, 3, 4, 1, 1];

console.log(except(numbers, [1]));
console.log(except(numbers, [2, 3]));



function except(array, excluded) {
    const result = [];
    for (let number of array)
        if (!excluded.includes(number))
            result.push(number);
    return result;
}