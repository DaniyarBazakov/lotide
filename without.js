const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(arr1, arr2) {
  let equal = true;
  if (arr1.length !== arr2.length) {
    equal = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      equal = false;
    }
  }
  if (equal === false) {
    console.log(`${arr1} is not equal to ${arr2}`);
  } else {
    console.log(`${arr1} is equal to ${arr2}`);
  }
  
};

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


const without = function(source, toRemove) {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    let shouldBeAdded = true;

    for (let j = 0; j < toRemove.length; j++) {
      if (source[i] === toRemove[j]) {
        shouldBeAdded = false;
      }
    }

    if (shouldBeAdded) {
      result.push(source[i]);
    }
  }

  return result;
};


//console.log(without([1, 2, 3], [1]));
assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);