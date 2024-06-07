const toPigLatin = (word) => {
  if (word.length > 0) {
    return word.slice(1) + word[0] + "ay";
  }
  return word;
};

module.exports = toPigLatin;