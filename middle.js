const assertArraysEqual = require("./assertArraysEqual");

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




module.exports = middle;
