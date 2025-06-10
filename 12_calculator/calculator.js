const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((tot, curr) => tot + curr, 0);
};

const multiply = function(arr) {
	return arr.reduce((tot, curr) => tot * curr, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
  let product = 1;
  for (n; n > 0; n--){
    product *= n;
  }
	return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
