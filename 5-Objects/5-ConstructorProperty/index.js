console.log('5. Objects: 5. Constructor Property')


// object oriented programming (OOP)
// camel notation: oneTwoThreeFour
// pascal notation: OneTwoThreeFour

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw', radius);
        }
    
    };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

let x = {};
// let x = new Object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...