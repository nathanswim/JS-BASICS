console.log('Exercise 8: Sum of Multiples of 3 and 5')

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for(let p in obj)
        if(typeof obj[p] === 'string')
            console.log(p, ':', obj[p]);
}
