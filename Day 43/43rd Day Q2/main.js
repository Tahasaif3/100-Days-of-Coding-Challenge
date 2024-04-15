var multiply = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (product, num) { return product * num; }, 1);
};
console.log(multiply(20, 2, 10));
console.log(multiply(10, 15, 40));
