console.log('7. Functions: 4. The Rest Operator')

// java script is a dynamic language.
// for example:
let x = 1;
x = 'a';

// rest operator
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1)); // 1 + undefined
console.log(sum(1, 2, 3, 4, 5)); // 1 + 2
console.log(sum(1, 2, 3, 4, 5, 10)); // 1 + 2


function sum2(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum2(0.1, 10)); // 1 + undefined
console.log(sum2(0.25, 1, 2, 3, 4, 5)); // 1 + 2
console.log(sum2(1, 2, 3, 4, 5, 10)); // 1 + 2


