const args = process.argv.slice(2);

const toPigLatin = (word) => {
  if (word.length > 0) {
    return word.slice(1) + word[0] + "ay";
  }
  return word;
};

const joinWords = function(array) {
  let sentence = "";
  for (let i = 0; i < array.length; i++) {
    sentence += ` ${toPigLatin(array[i])}`;
  }
  return sentence.slice(1);
};

console.log(joinWords(args));