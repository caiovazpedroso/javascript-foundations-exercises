const reverseString = function(str) {
    console.log(str)
    let rev = ''
    for (let i = str.length-1; i >= 0; i--){
        rev += str[i]
    }
    return rev
};

// Do not edit below this line
module.exports = reverseString;
