console.log('6. Arrays: 5. Arrow Functions')


// Finding Elements: Primitive vs Reference types

// Reference types
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
];

const find1 = courses.findIndex(function (course) { 
    return course.name === 'b'; 
});
console.log(find1);

const find2 = courses.findIndex( course => course.name === 'b');
console.log(find2);

