console.log('6. Arrays: 3. Finding Elements (Reference)')


// Finding Elements: Primitive vs Reference types

// Reference types
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// different references, not found
console.log(courses.includes({ id: 1, name: 'a' }));

const find = courses.find(function (course) { 
    return course.name === 'a'; 
});
const find2 = courses.find(function (course) { 
    return course.name === 'xyz'; 
});
console.log(find);
console.log(find2);


const find3 = courses.findIndex(function (course) { 
    return course.name === 'a'; 
});
const find4 = courses.findIndex(function (course) { 
    return course.name === 'xyz'; 
});
console.log(find3);
console.log(find4);


