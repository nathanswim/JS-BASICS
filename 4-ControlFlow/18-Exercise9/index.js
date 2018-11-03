console.log('4. Control Flow 18. Exercise 9: Grade')

const marks = [80, 80, 50];
// average 70

// 1-59 F
// 60-69 D
// 70-79 C
// 80-89 B
// 90-100 A

console.log(calculateGrade(marks));

// multiples of 3: 3, 6, 9
// multiples of 5: 5, 10
function calculateGrade(marks) {
    const avg = calculateAvg(marks);

    if(avg < 60) return 'F';
    if(avg < 70) return 'D';
    if(avg < 80) return 'C';
    if(avg < 90) return 'B';
    return 'A';
}

function calculateAvg(array){
    let sum = 0;
    for (let value of array) sum += value;
    return sum / array.length;
}