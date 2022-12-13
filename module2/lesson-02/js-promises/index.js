// console.log('1')
// console.log('2')
// setTimeout(()=> console.log('3'), 2000)
// console.log('4')x

const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];
   
// Callback Example
//   function getDirections(step, callback, errorCallback) {
//     // setTimeout(() => {
//       console.log( directions[step] );
      
//       if (!directions[step]) errorCallback("Instructions not found.");
//       else callback();
//     // }, 2000); 
//   }


//Promise Example

// Promise ---> Two outcomes
// 1. Promise successful ---> execute resolve as a callback
// 2. Promise failed ---> execute reject as a callback
function obtainDirections(step) {
    return new Promise (function (resolve, reject) {
      // setTimeout(() => {
        console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve(directions[step]);
      // }, 2000); 
    })
  };

// Promise chain
// obtainDirections(0) // executing a promise 
// .then((firstDirection)=>{ // 
//     console.log('First direction: ', firstDirection)
// })
// // .then(() => { // execute this after line 42 operation is successful
// //     obtainDirections(1)
// // })
// .catch(error => console.log(error))

fetch('https://catfact.ninja/fact?max_length=140') // make a request to the catfact API
.then(response => response.json()) // this will parse the data to JSON
.then(data => document.getElementById('cat-fact').innerText = data.fact)
.catch(error => console.log(error))
   
//   // Callback hell example
//   getDirections(0, ()=> {
//     getDirections(1, () => {
//         getDirections(2, () => {
//             getDirections(3, () => {

//             })
//         })
//     });
//   });