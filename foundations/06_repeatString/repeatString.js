const repeatString = function(str, n) {
    if (n < 0) {
        return 'ERROR'
    }
    let x = ''
    for (i = 0; i < n; i++) {
        x += str
    }
    return x
};

// Do not edit below this line
module.exports = repeatString;
