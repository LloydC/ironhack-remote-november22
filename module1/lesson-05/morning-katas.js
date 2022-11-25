// 1. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1)
 };

//  console.log(removeChar('Hello'))
//  console.log(removeChar('World'))

// 2. Create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//     const numbersArray = [];

//     for(i = 0; i < l.length; i++){
//         if(typeof l[i] === 'number'){
//             numbersArray.push(l[i])
//         }
//     }
//     return numbersArray;
// }

function filter_list(l) {
    return l.filter(num => typeof num === 'number');
}

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))

// 3. Write function findSum

// This function will return the sum of all multiples of 3 and 5.

// i.e:

// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    // 1. Have an array variable to store the multiples
//      // 2. for loop for getting all the numbers between 0 and n
//       // 3. Add conditional statement
//     //  a. multiples of 3 ---> n % 3 === 0 
//     // b. multiples of 5 ---> n % 5 === 0 
//     // 4. Sum them up
    let sum = 0;

    for(let i =0; i <= n; i++){
        if(i % 3 === 0 || i % 5 === 0 ){
            sum += i
        }
    }

    return sum;
}

console.log(findSum(5))
console.log(findSum(10))

// 4. 
// Complete the solution so that it reverses the string passed into it.

// i.e:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){ 
  return Array.from(str).reverse().join('');
}

console.log(solution('world'))


// 5. Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// '1345678912345678' ---> '############5678'

// function maskify(cc) {
//     let secretCC = '';
//     for(let i; i < cc.length; i++){
//         if(cc[i+4] !== undefined){
//             secretCC += '#';
//         }
//         else{
//             secretCC += cc[i]
//         }
//     }
//     return secretCC;
// }

// function maskify(cc) {
//     return cc
//       .slice(0, -4)
//       .replace(/[0-9]/g, "#")
//       .concat(cc.slice(-4, cc.len));
// }

function maskify(cc) {
    return `${"#".repeat(cc.length - 4)}${cc.slice(cc.length - 4)}`;

}

console.log(maskify('1345678912345678'))