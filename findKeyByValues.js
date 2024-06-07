const findKeyByValue = function(object, str) {
  for (let obj in object) {
    if (object[obj] === str) {
      return obj;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

module.exports = findKeyByValue;