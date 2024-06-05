// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(array) {
  //const result = array.slice(1)
  return array.slice(1);
};



module.exports = tail;
