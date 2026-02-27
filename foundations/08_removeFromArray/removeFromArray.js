const removeFromArray = function(arr, ...item) {
    let newArr = [];
    arr.forEach((i) => {
    if (!item.includes(i)) {
      newArr.push(i);
    }
  });
  // and return that array
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
