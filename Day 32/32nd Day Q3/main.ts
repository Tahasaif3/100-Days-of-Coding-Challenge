function calculateSum(numbers:number[]):number {
    return numbers.reduce((accumulator,current) => accumulator + current)
}
const numbers:number[] = [10,20,30,40,50];
console.log(calculateSum(numbers));
