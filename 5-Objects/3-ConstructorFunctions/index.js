console.log('5. Objects: 3. Constructor Functions')

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

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();
console.log(circle);