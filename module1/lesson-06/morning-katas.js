// Write a function that takes in an array of strings and returns all of them 
// concatenated together
// ["abra", "cadabra"] --> returns "abracadabra"


// Jan Solution
// function stringConcatenate(stringArr){
//     let newString = ""
        
//         for (let i = 0; i < stringArr.length; i++){
//             newString += stringArr[i]
//         }
//         console.log(newString);
//         return newString
       
//     }

//Avni Solution

function stringConcatenate(stringArr){
    let result = '';
    for (let i = 0; i < stringArr.length; i++) {
    result = result.concat(stringArr[i]);
    
    }
    console.log(result);
    return result;
}
    stringConcatenate(["abra", "cadabra"]);

// Write a function that given a string return an object that contains each key as a letter and the number of times 
// it appears in the string as a value
// "start" --> { s: 1, t: 2, a: 1, r: 1}

// function countKeys(str){
//     return [...str].reduce((a, b) => { 
//         a[b] = a[b] ? a[b] + 1 : 1; 
//         return a ;
//     }, {});
// }

//Fanny solution

// function countLetters(str) {

//     const lettersObjects = {};

//     str.split('').forEach(letter => {

//         lettersObjects[letter] = 0;

//         for (let i = 0 ; i < str.length ; i++ ) {
//             if ( str[i] === letter ) {
//                 lettersObjects[letter]++;
//             }
//         }
                     
//     });
//     console.log(lettersObjects)
//     return lettersObjects;
// }

// 
function countLetters(str) {
    // return an object with the number of times letters appear indicated

    const lettersObjects = {};
    // Loop over the string
     // Check for the current letter in the loop
    // If it hasn't been initialized intialise it
    // It it has been initialised add 1 to the property 
    str.split('').forEach(letter => {
        if(lettersObjects.hasOwnProperty(letter)){
            lettersObjects[letter] += 1;
        }
        else {
            lettersObjects[letter] = 1;
        }
    })

    return lettersObjects;
   

}
countLetters("starter")

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true 
// "aba" --> false 
// "moOse" --> false (ignore letter case)

// function isIsogram(str){

//   }
// Avni solution 1

// function isIsogram(sWord){

//  for (let iCharIndex = 0; iCharIndex < sWord.length; iCharIndex++) {
//     if (sWord.substring(iCharIndex + 1).includes(sWord.charAt(iCharIndex))){
//         return false;
//     }
//     return true;
//  }
    
// }

// Avni solution 2

// let isIsogram = (str) => str.split("").every((character, index) => str.indexOf(character) == index);


// Hadeel solution
// function isIsogram(str) {
//     return !str.match(/([a-z]).*\1/i);
// }

function isIsogram(string){
    const occurenceObject = countLetters(string)
    const values = Object.values(occurenceObject);
    return values.every(elem => elem === 1);
}

console.log(isIsogram("Dermatoglyphics")) 
console.log(isIsogram("aba")) // ["a","b", "a"].every

// Write a function that flattens an Array of Array objects into a flat Array. 
// Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// const flatten = function (array){
//   }

const flatten = function(array){
    return array.flat()
}

  console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]))