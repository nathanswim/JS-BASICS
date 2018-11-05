console.log('7. Functions: 1. Declaration vs Expressions')

// Function Declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function () { 
    console.log('run');
};

// Named Function Expression
let jog = function walkFast() { 
    console.log('jog');
};

let move = run;

walk();
run();
jog();
move();
