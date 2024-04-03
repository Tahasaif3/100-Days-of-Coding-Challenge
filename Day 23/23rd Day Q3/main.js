function divideAndRemainder(divider, dividend) {
    var quotient = Math.floor(dividend / divider);
    var remainder = dividend % divider;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(100, 5));
