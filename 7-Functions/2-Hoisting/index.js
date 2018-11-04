console.log('7. Functions: 2. Hoisting')

// Hoisting:
// during runtime, Javascript moves all 
// function declarations to the top of
// the file. This is done automatically
// by the javascript engine.

walk();

// Function Declaration
function walk() {
    console.log('walk');
}

// Function Expression
const run = function () { 
    console.log('run');
};


