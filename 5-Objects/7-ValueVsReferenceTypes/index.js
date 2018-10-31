console.log('5. Objects: 8. Value vs Reference Types')

// Value Types:
// - Number
// - String
// - Boolean
// - Symbol
// - undefined
// - null

// Reference Types:
// - Object
// - Function
// - Array


// Value Type:
let x = 10;
let y = x;

x = 20;

console.log(x, y);


// Reference Type:
let a = { value: 10 };
let b = a;

a.value = 20;

console.log(a, b);


// value type and functions
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);


// reference type and functions
let numberObject = { value:10 };

function increaseObject(number) {
    number.value++;
}

increaseObject(numberObject);
console.log(numberObject);
