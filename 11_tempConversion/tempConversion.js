const convertToCelsius = function(fahrenheit) {
  // Temperature calculation is multiplied by 10 prior to rouding so that it can
  // later be divided by 10 leaving just one decimal point.
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
    return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
