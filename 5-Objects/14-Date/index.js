console.log('5. Objects: 14. Date')

// different ways to create a date object
const now = new Date();
console.log(now);

const date1 = new Date('May 11 2018 11:15');
console.log(date1);

const date2 = new Date(2018, 4, 11, 11, 15);
console.log(date2);

now.setFullYear(2017);
console.log(now);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDay()}`);

