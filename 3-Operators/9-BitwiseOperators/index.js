console.log('Bitwise Operators');

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 4 = 00000100

// 1 = 00000001
// 2 = 00000010
// R = 00000011 => 3
console.log(1 | 2);

// 1 = 00000101
// 2 = 00000110
// R = 00000100 => 4
console.log(5 & 6);


// Read, Write, Execute
// 00000100
// 00000110
// 00000111


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

myPermission = writePermission;
console.log(myPermission);

message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

