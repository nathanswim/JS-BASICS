console.log('7. Functions: 5. Default Parameters')

function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

function interest2(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest2(10000, 3.5, 5));
console.log(interest2(10000));
