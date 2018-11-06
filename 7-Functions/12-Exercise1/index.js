console.log('7. Functions: 12. Exercise 1 - Sum of Arguments')

console.log(sum(1, 2, 3, 4));
console.log(sum(5, 2, 3, 4));
console.log(sum([5, 2, 3, 4]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a,b)=>a+b);
}