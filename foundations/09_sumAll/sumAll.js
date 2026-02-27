const sumAll = function(a, b) {
    let total = min = max = 0
    if (a > b) {
        max = a; min = b
    } else {
        min = b; min = a
    }
    for (i = min; i <= max; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
