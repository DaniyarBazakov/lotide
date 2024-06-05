// const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 6, 3], [1, 2, 7]);

assertArraysEqual([], [1, 2, 3]);

assertArraysEqual([], []);