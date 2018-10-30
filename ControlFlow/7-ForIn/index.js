console.log('For...In loop')

const person = {
    name: 'Nathan',
    age: 32
}

for (let key in person)
    console.log(key, ':', person[key]);

const colors = ['red', 'green', 'blue']

for (let index in colors)
    console.log(index, ':', colors[index]);

