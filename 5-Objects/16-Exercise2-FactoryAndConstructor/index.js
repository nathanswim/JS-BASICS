console.log('5. Objects: 16. Exercise 2 - Factory And Constructor');

let address1 = {
    street: '6507 Prince of Wales Dr',
    city: 'North Gower, ON',
    zipCode: 'K0A 2T0'
};

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = createAddress('6507 Prince of Wales Dr', 'North Gower, ON', 'K0A 2T0');
const address3 = new Address('6507 Prince of Wales Dr', 'North Gower, ON', 'K0A 2T0');

function showAddress(address) {
    for (let p in address)
        console.log(p, ':', address[p]);
}

showAddress(address1);
showAddress(address2);
showAddress(address3);
