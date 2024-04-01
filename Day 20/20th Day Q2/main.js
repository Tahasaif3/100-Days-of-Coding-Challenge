// function makeAdder(valuetoAdd:number):(number) => number {
//     return function (number:number):number {
//         return number + valuetoAdd;
//     }
// }
// let addfive = makeAdder(5);
// console.log(addfive(10));
function makeAdder(valuetoAdd) {
    return function (number) {
        return number + valuetoAdd;
    };
}
var addfive = makeAdder(10);
console.log(addfive(50));
