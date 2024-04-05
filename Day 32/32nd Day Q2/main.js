function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [10, 20, 30, 40, 50];
console.log(filterGreaterThanTen(numbers));
