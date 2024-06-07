const flatten = function(arr) {
  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(arr[i]);
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
};

module.exports = flatten;
