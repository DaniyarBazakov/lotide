const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("Should return []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("Should return []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("Should return [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});