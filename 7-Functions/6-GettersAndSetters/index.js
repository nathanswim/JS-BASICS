console.log('7. Functions: 6. Getters and Setters')

const person = {
    firstName: 'Nathan',
    lastName: 'Swim',
    fullName(){
        return `${person.firstName} ${person.lastName}`;
    }
};

console.log(person.fullName());

// cannot do the following:
// person.fullName = 'John Smith'

// getters => access properties
// setters => change (mutate) properties.

const other = {
    firstName: 'Nathan',
    lastName: 'Swim',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        var parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

other.fullName = 'John Smith'

console.log(other.fullName);
console.log(other.firstName);
console.log(other.lastName);
