// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

module.exports = assertEqual;