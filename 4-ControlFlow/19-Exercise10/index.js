console.log('4. Control Flow 19. Exercise 10: Stars')

showStars(0);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let stars = '';
        for (let i = 0; i < row; i++)
            stars += '*';
        console.log(stars);
    }

}