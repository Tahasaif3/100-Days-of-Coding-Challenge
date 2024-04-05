function filterGreaterThanTen(numbers:number[]):number [] {
    return numbers.filter((number) => number > 10);
}
const numbers:number[] = [10,20,30,40,50]
console.log(filterGreaterThanTen(numbers));