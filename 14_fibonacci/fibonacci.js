const fibonacci = function(n) {

    if (+n < 0) return "OOPS";
    if (+n == 0) return 0;

    let a = 0;
    let b = 1;
    let curr = a + b;

    for (let i = 2; i < +n; i++) {
        a = b;
        b = curr;
        curr = a + b;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
