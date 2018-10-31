console.log('Logical Operators');

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan  = highIncome && goodCreditScore;
console.log('Eligible for loan: ' + eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// NOT (!)

goodCreditScore = false;
eligibleForLoan  = highIncome && goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log('Application refused: ' + applicationRefused);

