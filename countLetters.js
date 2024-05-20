const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const eqObjects = function(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     // if (object1[key] !== object2[key]) {
//     //   return false;
//     // }
//     return assertEqual(object1[key], object2[key]);
//   }

//   return true;
// };

const countLetters = function(string) {
  const results = {};
  //loop through string
  //for (let i = 0; i < string.length; i++) {
  for (let str of string) {
    //if results[string[i]] ---> results[string[i]] += 1
    if (str !== ' ') {
      if (results[str]) {
        results[str] += 1;
      } else {
        results[str] = 1;
      }
    }
  }
  return results;
  //if results[str] ---> results[str] += 1
  //else results[str] = 1
};

assertEqual(countLetters("lighthouse in the house")["l"], 1);

// eqObjects(countLetters("lighthouse in the house"), {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// });

// eqObjects(countLetters("hello"), {
//   h: 1,
//   e: 1,
//   l: 2,
//   o: 1
// });