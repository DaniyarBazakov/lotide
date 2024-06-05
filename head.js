const assertEqual = require("./assertEqual");

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const head = function(array) {
  return array[0];
};

module.exports = head;
