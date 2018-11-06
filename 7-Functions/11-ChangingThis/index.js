console.log('7. Functions: 11. Changing \'this\'')

const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        console.log('self === this:')
        const self = this;
        this.tags.forEach(function(tag) { // <= set self === this;
            console.log(self.title, tag);       
        });

        console.log('bind function with this arg:')
        this.tags.forEach(function(tag) { // <= call bind() method with this as param
            console.log(this.title, tag);       
        }.bind(this));

        console.log('using arrow function or lambda expression:')
        this.tags.forEach(e=> console.log(this.title, e));
    }
};

video.showTags();


function playVideo(a, b){
    console.log(this, a, b);
}

playVideo.call({name:'Nathan'}, 1, 2);
playVideo.apply({name:'Nathan'}, [1, 2]);
const fn = playVideo.bind({name:'Nathan'});
fn(1, 2);
playVideo(1, 2);