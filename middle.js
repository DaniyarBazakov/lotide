const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
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

const assertArraysEqual = function(arr1, arr2) {
  let equal = eqArrays(arr1, arr2);
  if (equal === false) {
    console.log(`${arr1} is not equal to ${arr2}`);
  } else {
    console.log(`${arr1} is equal to ${arr2}`);
  }
  
};

const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [2, 3]), false);

