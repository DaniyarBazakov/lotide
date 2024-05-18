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

const flatten = function(arr) {
  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(arr[i]);
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3], [4]]), [1, 2, 3, 4]);
assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
assertEqual(eqArrays(flatten([[1, 2, 3], [4, 5], [6, 7, 8]]), [1, 2, 3, 5, 6, 7, 8]), false);


