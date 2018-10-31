console.log('5. Objects: 13. Template Literals')

// String primitive with new line single line
const messageSingle = 'This is my\n first message';
console.log(messageSingle);

// String with new line concatenation.
const messageConcat =
    'This is my\n' +
    '\'first\' message';
console.log(messageConcat);

// Javascript literals:
// Object => {}
// Boolean => true, false
// String => '', ""
// Template => `` (back tick)

const messageTemplate =
    `this is my
'first' message`;
console.log(messageTemplate);

const name = 'John';
const email =
`Hi ${name}${2 + 3},

Thank you for joining my mailing list.

Regards,
Nathan`;

console.log(email);
