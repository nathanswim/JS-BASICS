console.log('Exercise 3: FizzBuzz')

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    let by3 = input % 3 === 0;
    let by5 = input % 5 === 0;

    if (by3 && by5)
        return 'FizzBuzz';

    if (by3)
        return 'Fizz';

    if (by5)
        return 'Buzz';

    return input;
}

// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// not a number => 'Not a number'
console.log(fizzBuzz(30));
console.log(fizzBuzz(3));
console.log(fizzBuzz(20));
console.log(fizzBuzz(7));
console.log(fizzBuzz('words'));
console.log(fizzBuzz(false));


