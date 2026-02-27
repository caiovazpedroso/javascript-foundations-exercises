const sumAll = function(a, b) {
    let total = min = max = 0
    if ((a < 0 || b < 0 )||(typeof a != "number" || typeof b != "number")) {
        return 'ERROR'
    }
    if (a > b) {
        max = a; min = b
    } else {
        max = b; min = a
    }
    for (i = min; i <= max; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
