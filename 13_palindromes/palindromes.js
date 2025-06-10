const palindromes = function (word) {
    // Non-alphanumerics shouldn't be considered in palindrome
    let tidied = word.replace(/[^a-zA-Z0-9]/g, '')
    let midpoint = tidied.length / 2;
    for (let front = 0; front < midpoint; front++) {
        let back = tidied.length - (front + 1);
        if (tidied[front].toLowerCase() !== tidied[back].toLowerCase()) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
