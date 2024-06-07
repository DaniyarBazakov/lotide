const countLetters = function(string) {
  const results = {};
  for (let str of string) {
    if (str !== ' ') {
      if (results[str]) {
        results[str] += 1;
      } else {
        results[str] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;