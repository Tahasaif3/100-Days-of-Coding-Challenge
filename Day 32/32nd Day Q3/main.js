function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; });
}
var numbers = [10, 20, 30, 40, 50];
console.log(calculateSum(numbers));
