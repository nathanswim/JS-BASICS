console.log('For...Of loop')

const person = {
    name: 'Nathan',
    age: 32
}

const colors = ['red', 'green', 'blue']

for (let color of colors)
    console.log(colors.indexOf(color), ':', color);