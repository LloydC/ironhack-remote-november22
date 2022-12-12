const colors = require('colors');
const testPackage = require('./test-package');

 console.log('testPackage', testPackage.sayHello('John'));
 console.log('testPackage', testPackage.sayGoodbye('Jan'));
// console.log('hello'.green); 
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap);