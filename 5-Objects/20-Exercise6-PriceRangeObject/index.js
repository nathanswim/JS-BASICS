console.log('5. Objects: 16. Exercise 6 - Price Range Object');


// price range objects.
// create 3 

function PriceRange(low, high) {
    this.low = low;
    this.high = high;
    this.show = function (price) {
        let message = '';
        if (price <= low)
            message = '$';
        else if (price > low && price < high)
            message = '$$';
        else if (price >= high)
            message = '$$$';
        else
            message = 'Invalid';
        console.log(message);
    };
}

var range = new PriceRange(10, 20);

range.show(5);
range.show(10);
range.show(11);
range.show(21);
range.show('blah');


let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson:0, maxPerPerson:10 },
    {label: '$$', tooltip: 'Moderate', minPerPerson:11, maxPerPerson:20 },
    {label: '$$$', tooltip: 'Expensive', minPerPerson:21, maxPerPerson:50 },
];

let restaurants = [
    {averagePerPerson: 5}
];

let restaurant = restaurants[0];

function getPriceRange(restaurant) {
    for(let pr of priceRanges)
        if(restaurant.averagePerPerson >= pr.minPerPerson && 
            restaurant.averagePerPerson <= pr.maxPerPerson)
            return pr;
    return null;
}

console.log(getPriceRange(restaurant));