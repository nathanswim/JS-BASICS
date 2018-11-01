console.log('6. Arrays: 17. Exercise 1 - Array from Range')

//const numbers = arrayFromRange(1, 4);
const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const result = [];
    for (let i = min; i <= max; i++)
        result.push(i);
    return result;
}


