console.log('5. Objects: 8. Enumerating Properties of an Object')

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

// object is not iterable
// for(let key of circle)
//     console.log(key);

for (let key of Object.keys(circle))
    console.log(key, circle[key]);

for (let entry of Object.entries(circle))
    console.log(entry);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('radius' in circle) console.log('yes');
if ('color' in circle) console.log('yes');


