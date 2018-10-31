console.log('5. Objects: 6. Functions are Objects')

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}



const another = new Circle(1);

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);


const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const circle = new Circle1(2);

Circle.call({}, 1);
Circle.apply({}, [1]);

