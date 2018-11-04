console.log('7. Functions: 3. Arguments')

// java script is a dynamic language.
// for example:
let x = 1;
x = 'a';


function sum(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum(1)); // 1 + undefined
console.log(sum(1, 2, 3, 4, 5)); // 1 + 2
console.log(sumAll(1, 2, 3, 4, 5, 10)); // 1 + 2

// varying number of parameters

function sumAll() {
    let total = 0;
    for (let v of arguments)
        total += v;
    return total;
}

