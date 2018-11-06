console.log('7. Functions: 8. Local Vs Global Scope')

const message1 = 'hi';

console.log(message1);

// scope is limited to the block within which a variable is defined.
{
    const message2 = 'hi';
}
//console.log(message2); // uncaught ReferenceError


// scope is limited to the block within which a variable is defined.
function start() {
    const message3 = 'hi';

    if(true) {
        const another = 'bye';
    }

    //console.log(another); // uncaught ReferenceError

    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    //console.log(i); // uncaught ReferenceError

}
//console.log(message3); // uncaught ReferenceError

start();

// global scope
const color = 'red';

// 2 variables with the same name in different scopes
function start2() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}

function stop2(){
    const message = 'bye';
    console.log(color);
}

start2();
stop2();