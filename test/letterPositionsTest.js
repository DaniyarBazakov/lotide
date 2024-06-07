const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("letterPositions('hello').e should return [1]", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});
