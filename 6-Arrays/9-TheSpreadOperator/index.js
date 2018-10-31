console.log('6. Arrays: 9. The Spread Operator')

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined1 = [...first, ...second];
console.log(combined1);

const combined2 = [...first, 'a', ...second, 'b'];
console.log(combined2);

const copy = [...combined1];
console.log(copy);
