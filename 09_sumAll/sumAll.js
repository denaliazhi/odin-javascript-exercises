const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) 
        || a < 0 || b < 0) {
        return "ERROR";
    }

    // Swap order of args if first is > second
    if (a > b) [b, a] = [a, b];

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
