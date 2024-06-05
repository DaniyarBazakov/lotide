const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`\u{1F64C} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${arr1} !== ${arr2}`);
  }
  
};



module.exports = assertArraysEqual;