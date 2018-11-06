console.log('7. Functions: 10. The \'this\' Keyword')

// 'this' references the object that is currently executing the function

// method in an object -> this references obj
// regular function -> this references global object (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function () {
    console.log(this);
}

video.play();
video.stop();

function playVideo() {
    console.log(this);
}

playVideo();

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');

const dvd = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(e=> console.log(this.title, e));
        
        this.tags.forEach(function(tag) { // <= this callback function is just a regular function
            console.log(this);            //    a regular function defined in the window scope.
            console.log(this.title, tag);
        });

        this.tags.forEach(function(tag) { // <= adding a this arg
            console.log(this, tag);       
        }, {firstName:'Nathan'});

        this.tags.forEach(function(tag) { // <= adding a this arg === this
            console.log(this.title, tag);       
        }, this);
    }
};

dvd.showTags();
