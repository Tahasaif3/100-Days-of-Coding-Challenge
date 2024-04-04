// 2 Function declaration for squaring a number
// method 1
function squareDeclaration(number:number):number {
    return number * number
}
// method 2
const squareExpression = function (number:number):number {
    return number * number   
}

console.log(squareDeclaration(8)); // output 64
console.log(squareExpression(8));  // output 64

