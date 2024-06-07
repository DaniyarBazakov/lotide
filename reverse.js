const arrWords = function(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(mirror(array[i]));
  }
};

const mirror = function(word) {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    newWord += letter;
  }
  return newWord;
};

module.exports = arrWords;