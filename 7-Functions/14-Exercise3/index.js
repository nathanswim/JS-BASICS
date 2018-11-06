console.log('7. Functions: 14. Exercise 3 - Error Handling')

const numbers = [1, 2, 3, 4];

try {
    const count = countOccurrences(true, 1);
    console.log(count);
} catch (x) {
    console.log(x);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');
    return array.reduce((total, current) =>
        total + (current === searchElement ? 1 : 0)
        , 0);
}

