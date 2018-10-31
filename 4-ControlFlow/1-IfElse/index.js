console.log('if...else')

// Hour
// if hour between 6am and 12pm: Good morning!
// if it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!


function displayGreeting(hour) {
    if (hour >= 6 && hour < 12) 
        console.log('Good morning!');
    else if (hour >= 12 && hour < 18) 
        console.log('Good afternoon!');
    else 
        console.log('Good evening!');
}

let hour = 10;
displayGreeting(10);
displayGreeting(5);
displayGreeting(13);
