console.log('6. Arrays: 18. Exercise 2 - Except')

const numbers = [1, 2, 3, 4];

console.log(except(numbers, [1]));
console.log(except(numbers, [2, 3]));



function except(array, excluded) {
    const result = [];
    for (let e of array)    {
        if(excluded.findIndex(e) === -1)
            result.push(e);
    }
    return result;
}