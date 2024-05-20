// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let equal = eqArrays(arr1, arr2);
  if (equal === false) {
    console.log(`${arr1} is not equal to ${arr2}`);
  } else {
    console.log(`${arr1} is equal to ${arr2}`);
  }
  
};


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

