const fibonacci = function(n) {
    let a = 0;
    let b = 1;
    let c = a + b;

    if (+n < 0) {
        return "OOPS"
    }

    for (let i = 2; i < +n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return +n == 0 ? a : c;
};

// Do not edit below this line
module.exports = fibonacci;
