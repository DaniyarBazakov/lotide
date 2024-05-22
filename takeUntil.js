const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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
    console.log(`\u{1F62A} Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`\u{1F64C} Assertion Passed: ${arr1} === ${arr2}`);
  }
  
};

assertArraysEqual(takeUntil(["hello", "bye", ",", "ciao"], x => x === ','), ["hello", "bye"]);
assertArraysEqual(takeUntil([], x => x), []);
assertArraysEqual(takeUntil([7, -5, 7, 6, 2], x => x < 0), [7]);