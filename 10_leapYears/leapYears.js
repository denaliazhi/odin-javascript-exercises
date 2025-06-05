const leapYears = function(year) {
    // If year is divisible by 4
    if (year % 4 === 0
        // It must be divisible by 400
        && ((year % 400 === 0)
            // OR it must not be divisible by 100
            || (year % 100 != 0))
    ) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
