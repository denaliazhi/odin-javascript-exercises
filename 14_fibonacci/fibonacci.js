const fibonacci = function(n) {
    num = +n;
    if (num < 0) return "OOPS";

    // Array with 0th and 1st fibonacci values
    const sequence = [0, 1];

    // Loop starts from 2nd value onward
    for (let i = 2; i <= num; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;