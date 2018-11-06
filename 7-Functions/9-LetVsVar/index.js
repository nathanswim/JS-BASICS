console.log('7. Functions: 9. Let Vs Var')

let x = 0;
var y = 0;

// Why problems with var and why it should be avoided.

function start() {
    for(let i = 0; i < 5; i++)    {
        console.log(i);
    }
    //console.log(i); // Uncaught ReferenceError
}

start();


// var limited to the function scope
function start2() {
    for(var i = 0; i < 5; i++)    {
        console.log(i);
    }
    console.log(i); // issue with var keyword
}

//prior to ES6:
// var : only way to define variables
//  - creates function scoped variables
//
// ES6 (ES2015) and following:
// let, const - create block-scoped variables

start2();


function start3() {
    for(var i = 0; i < 5; i++)    {
        if(true){
            var color = 'red';
            let other = 'blue;'
        }
        
        console.log(color);
        //console.log(other);// Uncaught ReferenceError
    }
    console.log(color); // issue with var keyword
    //console.log(other); // Uncaught ReferenceError
}

start3();

var color = 'red'; // attaches self to window object
// CONSOLE:
// > window.red
// < "red"
console.log(window.color); // => "red"

let age = 30;
// CONSOLE:
// > window.age
// < undefined
console.log(window.age); // => undefined;


// function declaration attaches self to window object
function sayHi() {
    console.log('hi');
}

window.sayHi();
