const without = function(source, toRemove) {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    let shouldBeAdded = true;

    for (let j = 0; j < toRemove.length; j++) {
      if (source[i] === toRemove[j]) {
        shouldBeAdded = false;
      }
    }

    if (shouldBeAdded) {
      result.push(source[i]);
    }
  }

  return result;
};

module.exports = without;