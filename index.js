const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters  = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValues');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const loopyLighthouse = require('./loopylighthouse2');
const map = require('./map');
const toPigLatin = require('./pig-latin');
const arrWords = require('./reverse');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  loopyLighthouse: loopyLighthouse,
  map: map,
  toPigLatin: toPigLatin,
  arrWords: arrWords,
  takeUntil: takeUntil,
  without: without,
};