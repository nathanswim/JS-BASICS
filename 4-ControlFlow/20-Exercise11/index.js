﻿console.log('4. Control Flow 20. Exercise 11: Prime Numbers')

showPrimes(23);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
        if(isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor == 0) 
            return false;
    return true;
}

