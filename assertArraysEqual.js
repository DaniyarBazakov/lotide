const eqArraysEqual = function(arr1, arr2) {
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

eqArraysEqual([1, 2, 3], [1, 2, 3]);

eqArraysEqual([1, 6, 3], [1, 2, 7]);

eqArraysEqual([], [1, 2, 3]);

eqArraysEqual([], []);


