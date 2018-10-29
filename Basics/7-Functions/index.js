console.log('functions');

// fundamental building block in javascript

function greet() {
    console.log('Hello World');
}

greet();


function greet(name) { // parameter
    console.log('Hello ' + name);
}

greet('Nathan'); // pass argument 
greet('John');
greet('Mary');

function greet(firstName, lastName) { // parameter
    console.log('Hello ' + firstName + ' ' + lastName);
}

greet('Nathan', 'Swim'); // pass argument 
greet('John', 'Smith');
