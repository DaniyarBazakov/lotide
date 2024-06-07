const findKeyByValue = function(object, str) {
  for (let obj in object) {
    if (object[obj] === str) {
      return obj;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;