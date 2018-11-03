console.log('Exercise 8: Sum of Multiples of 3 and 5')

console.log(sum(10));

// multiples of 3: 3, 6, 9
// multiples of 5: 5, 10
function sum(limit) {
    let total = 0;

    for (let i = 1; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            total += i;

    return total;
}
