/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/

function countThrees(n) {
    let numOfThrees
   for(let i = 0; i < n.length; i++){
       if(i === 3){
        numOfThrees=  numOfThrees += 1
       }
   }
   return numOfThrees
}

//console.log(countThrees(333))

module.exports = countThrees



// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);



 // let threeCt = 0
    // for(let i = 0; n.toString().length; i++){
    //     if(i === "3"){
    //         threeCt = threeCt + 1
    //     }
    // }
    // return threeCt