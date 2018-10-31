console.log('5. Objects: 16. Exercise 5 - Constructor Functions');

const post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 3,
    comments: [
        { author: 'd', body: 'e' },
        { author: 'f', body: 'g' }
    ],
    isLive: true
};
console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post2 = new Post('a', 'b', 'c');

console.log(post2);