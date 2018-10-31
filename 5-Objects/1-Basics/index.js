console.log('5. Objects: 1-Basics')

// objects are collections of key value pairs


let radius = 1;
let x = 1;
let y = 1;

// object oriented programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }

};

circle.draw();

let f = function() {console.log('hello');}
f();
