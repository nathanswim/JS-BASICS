console.log('7. Functions: 13. Exercise 2 - Area of Circle')

const circle = {
    radius: 1,
    get area() {
        return this.radius * this.radius * Math.PI;
    }
};

circle.radius = 2;
circle.area = 3;
console.log(circle.area);

