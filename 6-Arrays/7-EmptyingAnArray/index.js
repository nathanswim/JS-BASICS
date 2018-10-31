console.log('6. Arrays: 7. Emptying an Array')

// solution 1
console.log('Solution 1:');
let solution1 = [1, 2, 3, 4, 5, 6];
console.log('solution1', solution1);

let another = solution1;
solution1 = [];
console.log('solution1', solution1);
console.log('another', another);

// solution 2
console.log('Solution 2:');
const solution2 = [1, 2, 3, 4, 5, 6];
console.log('solution2', solution2);

another2 = solution2;
solution2.length=0;

console.log('solution2', solution2);
console.log('another2', another2);

// solution 3
console.log('Solution 3:');
const solution3 = [1, 2, 3, 4, 5, 6];
console.log('solution3', solution3);

solution3.splice(0, solution3.length);

console.log('solution3', solution3);


// solution 4
console.log('Solution 4:');
const solution4 = [1, 2, 3, 4, 5, 6];
console.log('solution4', solution4);

while(solution4.length > 0) solution4.pop();

console.log('solution4', solution4);
