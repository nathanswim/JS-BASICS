/* 
Reference Types:
    - Object
    - Array
    - Function


*/

let person = {
    name: 'Nathan',
    age: 30
};

console.log(person);

// Dot Notation
person.name = 'John';
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';
console.log(person['name']);

// Which approach is better? bracket notation or dot notation?
// - dot notation should be default choice
// - bracket notation for runtime property selection

let selection = 'name';
person[selection] = 'Biff';
console.log(person[selection]);
