const convertToCelsius = function(x) {
  let y = (x - 32) * 5/9
  return Number(Number.parseFloat(y).toFixed(1))
};

const convertToFahrenheit = function(x) {
  let y = x * 9/5 + 32
  return Number(Number.parseFloat(y).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
