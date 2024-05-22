const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  for (let obj in object) {
    if (callback(object[obj])) {
      return obj;
    }
  }
  return undefined;
};

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

const result1 = findKey(
  {
    "Toyota": { engine: 1.8 },
    BMW: { engine: 3.0 },
    Mercedes: { engine: 5.5 },
    Mazde: { engine: 2.5 },
  },
  (x) => x.engine === 5.5
);


assertEqual(result, "noma");
assertEqual(result1, "Mercedes");