console.log('Exercise 5: Even and Odd Numbers')

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const state = i % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(i, state);
    }
}