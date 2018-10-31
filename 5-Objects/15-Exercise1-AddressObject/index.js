console.log('5. Objects: 15. Exercise 1 - AddressObject')

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function showAddress(address) {
    console.log(`${address.street}
${address.city}
${address.zipCode}`);
}

function showAddress2(address) {
    for (let p in address)
        console.log(p, ':', address[p]);
}
const address = new Address('6507 Prince of Wales Dr', 'North Gower, ON', 'K0A 2T0');

showAddress(address);
showAddress2(address);
