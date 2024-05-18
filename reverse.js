const args = process.argv.slice(2);

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

//arrWords(["yes", "no"]);
arrWords(args);



/*
const mirror = function(word) {

  let newWord = "";

  for (i = 0; i < word.length; i++) {
    let letter = word[word.length -1 - i];
    //console.log(letter)
    newWord += letter;
    //console.log(word[-i])
  };
  return newWord;
}
*/
