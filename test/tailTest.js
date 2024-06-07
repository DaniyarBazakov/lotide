const tail = require("../tail");
const assert = require('chai').assert;

const result = tail(["Hello", "Lighthouse", "Labs"]);

const emptyArray = tail(["Hello"]);

const words = tail(["Yo Yo", "Lighthouse", "Labs"]);

const emptyInput = tail([]);

describe("#tail", () => {
  it("Should return 2", () => {
    assert.strictEqual(result.length, 2);
  });
  it("Should return 'Lighthouse'", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("Should return 'Labs'", () => {
    assert.strictEqual(result[1], "Labs");
  });
  it("Should return 0", () => {
    assert.strictEqual(emptyArray.length, 0);
  });
  it("Should return 2", () => {
    assert.strictEqual(words.length, 2);
  });
  it("Should return 0", () => {
    assert.strictEqual(emptyInput.length, 0);
  });
});