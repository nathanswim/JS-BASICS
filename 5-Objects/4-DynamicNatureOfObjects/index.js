console.log('5. Objects: 4. Dynamic Nature of Functions')

const circle = {
    radius: 1
}

circle.color = 'yellow';
circle.draw = function() {console.log('draw');}
console.log(circle);

delete circle.color;
delete circle.draw;

console.log(circle);