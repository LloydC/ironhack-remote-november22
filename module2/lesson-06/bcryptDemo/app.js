const bcrypt = require('bcrypt');
const saltRounds = 10;
 
const plainPassword1 = 'HelloWorld';
const plainPassword2 = 'helloworld';
 
// const salt = bcrypt.genSaltSync(saltRounds);
 
// console.log(`Salt => ${salt}`);

 
const hash1 = bcrypt.hashSync(plainPassword1, saltRounds);
const hash2 = bcrypt.hashSync(plainPassword2, saltRounds);
 
const verifyPass1 = bcrypt.compareSync(plainPassword1, hash2);
// const verifyPass2 = bcrypt.compareSync('some wrong password', hash2);
 
console.log(`Hash 1: ${hash1}`);
// console.log(`Hash 2: ${hash2}`);
console.log('----------------------------------------');
console.log(`Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`);
// console.log(`Is plainPassword2 corresponding to the created hash2: ${verifyPass2}`);