/**
 * Takes an object where the keys are people's names and the values are their ages.
 * Returns the name of the person with the greatest age.
 *
 * @param {object} obj - The input object of the form { 'Joe': 42, 'Tanya': 11 }
 * @returns {string} - Returns the name of the oldest person
 *
 * ex: oldestPerson({ 'Joe': 42, 'Tanya': 11 })
 * returns: "Joe"
 *
 * ex: oldestPerson({ 'Marcus': 29, 'Julia': 29, 'Kevin': 34 })
 * returns: 'Kevin'
 */
function oldestPerson(obj) {
  let ageArr = Object.values(obj)
  return Math.max(...ageArr)
}
console.log(oldestPerson({'Bob' : 50, 'Jake' : 60, 'Marsha' : 42}))
// console.log(oldestPerson({'Bob' : 50, 'Jake' : 60, 'Marsha' : 42}))
module.exports = oldestPerson




// function oldestPerson(obj) {
//     let ageArr = Object.values(obj)
//     return Math.max(...ageArr)
//   }



// obj.sort((a, b) => {
//     return a - b
// })


//     let ages = []
//     ages = ages.push(Object.values)

//     return ages
// }

// console.log(oldestPerson({ 'Bob' : 50, 'Jake' : 60, 'Marsha' : 42}))

// let currentSize;
// let maxSize = -1;
// let largestBoxart;

// boxarts.forEach((boxart) => {
//   currentSize = boxart.width * boxart.height;
//   if (currentSize > maxSize) {
//     largestBoxart = boxart;
//     maxSize = currentSize;
//   }
// });

// return largestBoxart;