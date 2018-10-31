console.log('5. Objects: 16. Exercise 3 - Object Equality');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');
const address3 = address1;

function showAddress(address) {
    for (let p in address)
        console.log(p, ':', address[p]);
}

showAddress(address1);
showAddress(address2);


function areEqual(address1, address2) {
    for (let p in address1)
        if(address1[p] !== address2[p])
            return false;
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));