const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  const equal = eqObjects(actual, expected);
  if (equal) {
    console.log(`\u{1F64C} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;