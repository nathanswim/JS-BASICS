console.log('Exercise 6: Count Truthy')

const a = [true, false, true, false, true, false];
console.log(countTruthy(a));

const b = ['', 1, 0];
console.log(countTruthy(b));

function countTruthy(array) {
    let count = 0;
    for (let v of array)
        if (v) count++;
    return count;
}