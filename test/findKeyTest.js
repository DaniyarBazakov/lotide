const assert = require('chai').assert;
const findKey = require("../findKey");

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

describe("#findKey", () => {
  it("returns 'noma'", () => {
    assert.strictEqual(result, "noma");
  });
  it("returns 'Mercedes'", () => {
    assert.strictEqual(result1, "Mercedes");
  });
});