const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for eqArrays([3, 8, 382], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([3, 8, 382], [1, 2, 3]), false); 
  });
  it("returns false for eqArrays([], [1, 2, 3])]", () => {
    assert.strictEqual(eqArrays([], [1, 2, 3]), false); 
  });
});