console.log('Exercise 7: String Properties')

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
