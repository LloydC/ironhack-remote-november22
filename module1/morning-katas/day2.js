function namesSorter (departmentsArray) {
    return departmentsArray.flat().sort((a, b) => a.length - b.length || a.localeCompare(b));
  }

 // namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]])

 // The function should check if two numbers are equal within a certain margin.
// The function should take in three parameters: the two values to compare and an "epsilon" value
// that determines the error margin.TheThe function should return true or false.

function checkEpsilon(firstValue, secondValue, epsilon){
    // const subResult = Math.abs(firstValue - secondValue);
    console.log(Math.abs(firstValue - secondValue) <= epsilon)
    return Math.abs(firstValue - secondValue) <= epsilon;
    // if(subResult <= epsilon){
    //     console.log(subResult <= epsilon)
    //     return true
    // }
    // console.log(subResult <= epsilon)
    // return false;
    // Subtract one number with the other 12- 13 = -1
    // return the positive value
}

checkEpsilon(10,11,0.5) 
checkEpsilon(10,10.2,0.3)

// Define a function that takes in an array of numbers as a parameter 
// and returns the largest value in the array (you can't use Math.max() function)
function findMaxValue(numbersArray){
    let largestValue = 0;

    for(let i = 0; i < numbersArray.length; i++){
        if(largestValue < numbersArray[i]){
            largestValue = numbersArray[i];
        }
    }
    return largestValue;
}
console.log(findMaxValue([2]))
console.log(findMaxValue([1,2,3]))
// console.log(findMaxValue([-10,-4, -7]))

// Define a function that takes in an array of integers and returns the average.

// average([1, 2, 3]) --> 2
// average([5, 15, 10]) --> 10

// Define a function that takes in a string and reverses it (you can't use the .reverse() function)

// reverse("apple") ---> "elppa"
// reverse("canterbury") ---> "yrubretnac"