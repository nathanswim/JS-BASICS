console.log('6. Arrays: 8. Combining and Slicing Arrays')

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const sliced1 = combined.slice(2, 4);
console.log(sliced1);

const sliced2 = combined.slice(2);
console.log(sliced2);

const sliced3 = combined.slice();
console.log(sliced3);

const firstObjArray = [{id:1}];
const copyOfObjArray = firstObjArray.slice();
firstObjArray[0].id=10;
console.log(firstObjArray);
console.log(copyOfObjArray);
