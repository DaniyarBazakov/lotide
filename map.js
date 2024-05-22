const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

console.log(results1);


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
    console.log(`\u{1F64C} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${arr1} !== ${arr2}`);
  }
  
};

assertArraysEqual(map(["hello", "bye"], (word) => word[0]), ["h", "b"]);
assertArraysEqual(map([], (word) => word[0]), []);
assertArraysEqual(map(["hello", "ciao", "Required"], (word) => word[0]), ["h", "c", "R"]);

