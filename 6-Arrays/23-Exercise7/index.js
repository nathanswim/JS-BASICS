console.log('6. Arrays: 23. Exercise 7 - Movies')

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// all movies in 2018 with rating > 4
// sort them by their rating in 
// descending order
// only pick the title property to display on console.

function displayMovies(movies) {
    const titles = movies
        .filter(m => m.year === 2018 && m.rating > 4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(m => m.title);

    for (let m of titles)
        console.log(m);
}

displayMovies(movies);
