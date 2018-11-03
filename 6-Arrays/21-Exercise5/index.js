console.log('6. Arrays: 21. Exercise 5 - Count Occurrences')

const numbers = [1, 2, 3, 4, 1];

console.log(countOccurrences(numbers, 0));
console.log(countOccurrences(numbers, 1));
console.log(countOccurrences(numbers, 2));


function countOccurrences(array, searchElement) {
    let result = 0
    for (let element of array)
        if (element === searchElement)
            result++;
    return result;
}

console.log(countOccurrences2(numbers, 0));
console.log(countOccurrences2(numbers, 1));
console.log(countOccurrences2(numbers, 2));

function countOccurrences2(array, searchElement) {
    return array.reduce((total, current) => 
        total + (current === searchElement ? 1 : 0)
    , 0);
}