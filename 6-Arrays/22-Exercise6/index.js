console.log('6. Arrays: 22. Exercise 6 - Get Max')

const numbers = [1, 2, 3, 4];

console.log(getMax([]));
console.log(getMax([1, 5, 6, 7, 3, 2]));
console.log(getMax([1, 2, 3, 4]));


function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}

console.log(getMax2([]));
console.log(getMax2([1, 5, 6, 7, 3, 2]));
console.log(getMax2([1, 2, 3, 4]));
console.log(getMax2([-2, 1, 2, -3, -4]));

function getMax2(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i = 1; i < array.length; i++)
        if (max < array[i])
            max = array[i];
    return max;
}