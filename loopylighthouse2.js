
const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = getReplacement(i, multiples[0], words[0]) + getReplacement(i, multiples[1], words[1]);
    if (output !== '') {
      console.log(output);
    } else {
      console.log(i);
    }
  }
};

const getReplacement = function(number, multiple, word) {
  return number % multiple === 0 ? word : '';
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);