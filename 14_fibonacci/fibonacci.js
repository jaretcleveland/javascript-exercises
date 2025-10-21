const fibonacci = function(countArg) {
    // Check the argument's type and makes sure it is a number throughout rest of function.
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    // Handle edge cases
    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    // Initialize the first two Fibonacci numbers
    let firstPrev = 1;
    let secondPrev = 0;

    // Calculate Fibonacci number iteratively
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
