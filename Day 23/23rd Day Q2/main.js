function multiplyDecimals(num1, num2) {
    return Math.round(num1 * num2 * 100) / 100;
}
console.log(multiplyDecimals(0.10, 0.12));
