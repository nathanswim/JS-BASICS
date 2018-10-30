console.log('Exercise 4: Demerit Points')


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    const speedOver = speed - speedLimit;
    if(speedOver < kmPerPoint) return 'Ok';

    const points = Math.floor(speedOver / kmPerPoint);
    
    if (points >= 12) return 'License suspended';

    return 'Points: ' + points;
}

// speed limit is 70km/h
// for every 5 km over => 1 point
// more than 12 points, license suspended.
// Math.floor();
console.log(checkSpeed(30));
console.log(checkSpeed(70));
console.log(checkSpeed(74));
console.log(checkSpeed(75));
console.log(checkSpeed(76));
console.log(checkSpeed(96));
console.log(checkSpeed(150));


