console.log('5. Objects: 9. Cloning an Object')

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

//approach #1
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

//approach #2
// const another = {color:'yellow'};
// Object.assign(another, circle);

//approach #3
const another = { ...circle };

console.log(another);

