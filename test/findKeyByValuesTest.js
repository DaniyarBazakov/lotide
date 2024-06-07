const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValues');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("findKeyByValue", () => {
  it("returns 'drama' for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns 'drama' for findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); 
  });
});