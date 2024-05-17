const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F64C} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62A} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  //const result = array.slice(1)
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const emptyArray = tail(["Hello"]);
assertEqual(emptyArray.length, 0);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const emptyInput = tail([]);
assertEqual(emptyInput.length, 0);

