console.log('6. Arrays: 18. Exercise 2 - Includes')

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));
console.log(includes(numbers, -1));

function includes(array, searchElement) {
    for (let e of array)
        if (e === searchElement) 
            return true;
    return false;
}