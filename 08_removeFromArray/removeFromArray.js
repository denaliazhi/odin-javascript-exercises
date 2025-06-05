const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i])) {
            // Modify array in-place
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
