console.log('7. Functions: 7. Try and Catch')

const person = {
    firstName: 'Nathan',
    lastName: 'Swim',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('Value is not a string.');
        var parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name.');
        
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//person.fullName = 'John Smith';
// person.fullName = true; // Uncaught TypeError...

try{
    person.fullName = ''; // Uncaught TypeError...
}catch(x){
    alert(x);
}

console.log(person);
