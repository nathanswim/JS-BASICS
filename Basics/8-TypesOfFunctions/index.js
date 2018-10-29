console.log('types of functions');

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


// performing a task
function greet(firstName, lastName) { // parameter
    console.log('Hello ' + firstName + ' ' + lastName);
}

//greet('Nathan', 'Swim'); // pass argument 
greet('John', 'Smith');


// calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

