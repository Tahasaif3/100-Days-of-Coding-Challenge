function divideAndRemainder(divider:number,dividend:number): {quotient:number;remainder:number} {
    let quotient = Math.floor(dividend / divider)
    let remainder = dividend % divider;
    return {quotient,remainder};
}
console.log(divideAndRemainder(100,5));


