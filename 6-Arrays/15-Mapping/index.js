console.log('6. Arrays: 15. Mapping an Array')

const numbers = [1, -1, 2, 3];

// look for all positive numbers
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => `<li>${n}</li>`);
console.log(items);

const html = `<ul>${items.join('')}</ul>`;
console.log(html);


const objects = filtered.map(n => ({ value: n }));



console.log(objects);

// chaining map and filter
const objects2 = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(o => o.value > 1);
console.log(objects2);
