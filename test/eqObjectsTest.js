const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };


describe("#eqObjects", () => {
  it("returns true for eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
});