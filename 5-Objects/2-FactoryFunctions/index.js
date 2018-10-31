console.log('5. Objects: 2. Factory Functions')

// object oriented programming (OOP)


// Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw', radius);
        }
    
    };
}

let c1 = createCircle(1);
let c2 = createCircle(2);
c1.draw();

console.log(c1);
console.log(c2);